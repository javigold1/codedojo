import re
from flask import render_template, request, redirect, session,flash

from flask_app import app
from flask_app.models import model_recipe, model_user

from flask_app import bcrypt



@app.route("/")
def index():
    if session['user_id']:
        return redirect("/dashboard")
    return render_template("index.html")

@app.route("/register", methods=['POST'])
def register():
        data = { "email" : request.form["email"] }
        if not model_user.User.validate_registration(request.form):
            return redirect('/')

        pw_hash = bcrypt.generate_password_hash(request.form['password'])

        data = {
            "first_name": request.form['first_name'],
            "last_name": request.form['last_name'],
            "email": request.form['email'],
            "password": pw_hash
        }
        user_id = model_user.User.register_user(data)
        session['user_id'] = user_id

        return redirect('/dashboard')

@app.route("/dashboard")
def login_success():
        if not session['user_id']:
              return redirect("/")
        recipe_obj = model_recipe.Recipe.get_all_recipes()
        for i in recipe_obj:
            # print(i.user_info)
            # print(i.instructions)
            return render_template("dashboard.html", recipe_obj=recipe_obj)


@app.route("/logout")
def log_out():
        session['user_id'] = False
        return redirect("/")


@app.route("/validate_login", methods=['POST'])
def validate_login():
        data = { "email" : request.form["email"] }
        user_in_db = model_user.User.get_by_email(data)
        if not user_in_db:
            flash("Invalid Email/Password")
            return redirect("/")
        if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
            flash("Invalid Email/Password")
            return redirect('/')
        session['user_id'] = user_in_db.id
        session['user_first_name'] = user_in_db.fname
        return redirect("/dashboard")


@app.route("/new_recipe")
def new_recipe():
        if not session['user_id']:
              return redirect("/")
        return render_template("new_recipe.html")


@app.route("/add_recipe", methods=['POST'])
def add_recipe():
        if not session['user_id']:
              return redirect("/")

        if not model_recipe.Recipe.validate_recipe(request.form):
            return redirect('/new_recipe')

        data = {
            "name": request.form['recipe_name'],
            "description": request.form['description'],
            "instructions": request.form['instructions'],
            "date_made": request.form['date_made'],
            "under_30": request.form['under_30'],
            "user_id": session['user_id']
        }
        recipe_id = model_recipe.Recipe.add_recipe(data)
        
        return redirect('/dashboard')

@app.route("/edit_recipe/<id>")
def edit_recipe(id):
            if not session['user_id']:
              return redirect("/")

            return render_template("edit_recipe.html", recipe_obj=model_recipe.Recipe.get_recipe({"id": id}))


@app.route("/update_recipe", methods=['POST'])
def update_recipe():
         update = model_recipe.Recipe.update_recipe(request.form)
         return redirect('/dashboard')

@app.route("/show_recipe/<id>")
def show_recipe(id):
            if not session['user_id']:
              return redirect("/")

            return render_template("show_recipe.html", recipe_obj=model_recipe.Recipe.get_recipe({"id": id}))

@app.route("/delete_recipe/<id>")
def delete_recipe(id):
            if not session['user_id']:
              return redirect("/")

            model_recipe.Recipe.delete_recipe({"id": id})
            return redirect('/dashboard')
