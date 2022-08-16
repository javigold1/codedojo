import re
from flask import render_template, request, redirect, session,flash

from flask_app import app
from flask_app.models.model_user import User
from flask_app import bcrypt



@app.route("/")
def index():
    return render_template("index.html")


@app.route("/register", methods=['POST'])
def register():
        data = { "email" : request.form["email"] }
        if not User.validate_registration(request.form):
        # redirect to the route where the burger form is rendered.
            return redirect('/')
        # elif not User.validate_email(request.form):
        #     return redirect('/')  
        # elif not User.validate_password_confirm(request.form):
        #     return redirect('/')
        # elif User.get_by_email(data):
        #     flash("Email Taken")
        #     return redirect('/')

        pw_hash = bcrypt.generate_password_hash(request.form['password'])

        data = {
            "first_name": request.form['first_name'],
            "last_name": request.form['last_name'],
            "email": request.form['email'],
            "password": pw_hash
        }
        user_id = User.register_user(data)

        return redirect('/login')

       

@app.route("/login")
def login_page():
        return render_template("login.html")


@app.route("/validate_login", methods=['POST'])
def validate_login():
        # see if the username provided exists in the database
        data = { "email" : request.form["email"] }
        user_in_db = User.get_by_email(data)
        # user is not registered in the db
        if not user_in_db:
            flash("Invalid Email/Password")
            return redirect("/login")
        if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
            # if we get False after checking the password
            flash("Invalid Email/Password")
            return redirect('/login')
        # if the passwords matched, we set the user_id into session
        session['user_id'] = user_in_db.id
        # never render on a post!!!
        return redirect("/dashboard")


@app.route("/dashboard")
def login_success():
        if not session['user_id']:
            return redirect("/login")

        return render_template("dashboard.html")

@app.route("/logout")
def log_out():
        session['user_id'] = False
        return redirect("/login")
