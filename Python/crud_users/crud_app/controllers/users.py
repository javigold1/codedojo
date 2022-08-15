from flask import render_template, request, redirect,session

from crud_app import app

from crud_app.models.user import User

@app.route("/")
def index():

    return render_template("index.html", user_obj=User.get_all())

@app.route("/show/<id>")
def show_user(id):

    return render_template("show.html", action=1, user_obj=User.show_one(id))

@app.route("/edit/<id>")
def edit_user(id):

    return render_template("edit.html", action=2, user_obj=User.show_one(id))

@app.route("/update", methods=["POST"]) 
def update_user():
    data = {
        "id": request.form["id"],
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "email": request.form["email"],
    }
    User.update_user(data)
    return redirect("/")

@app.route("/delete/<id>") 
def delete_user(id):
    User.delete_user(id)
    return redirect("/")


@app.route('/create_user', methods=["POST"])
def create_user():
   
    data = {
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "email": request.form["email"],
    }
 
    User.save(data)
    return redirect('/') 