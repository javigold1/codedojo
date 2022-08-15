from flask import render_template, request, redirect,session

from flask_app import app

from flask_app.models.dojo import Dojo

@app.route("/")
def index():
    # call the get all classmethod to get all friends
    # dojos = Dojo.get_all()

    # print(friends)
    return render_template("index.html", dojo_obj=Dojo.get_all())

@app.route('/create_dojo', methods=["POST"])
def create_dojo():
    # First we make a data dictionary from our request.form coming from our template.
    # The keys in data need to line up exactly with the variables in our query string.
    print(request.form["name"])

    data = {
        "name": request.form["name"],
    }
    # We pass the data dictionary into the save method from the Friend class.
    Dojo.save(data)
    # Don't forget to redirect after saving to the database.
    return redirect('/')    


