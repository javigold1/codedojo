from flask import render_template, request, redirect,session

from dojos_and_ninjas_app import app

from dojos_and_ninjas_app.models.dojo import Dojo
from dojos_and_ninjas_app.models.ninja import Ninja

 
@app.route("/")
def index():
    return render_template("dojo.html", dojo_obj=Dojo.get_all_dojos())



@app.route("/add_dojo", methods=["POST"]) 
def add_dojo():
    data = {
        "name": request.form["name"],
    }
    Dojo.add_dojo(data)
    return redirect("/")  


@app.route("/addNinjas") 
def add_ninja():
    return render_template("addNinja.html", dojo_obj=Dojo.get_all_dojos())

@app.route("/add_ninja", methods=["POST"]) 
def add_ninjas():
    data = {
    **request.form
    }
    Ninja.add_ninja(data)
    return redirect("/")

@app.route("/dojoshow/<id>")
def show_dojo(id):
    show_obj=Ninja.show_ninjas(id)
    dojo = Ninja.show_dojo_name(id)

    if not show_obj:
        return redirect("/")
   
    return render_template("dojoShow.html", show_obj=Ninja.show_ninjas(id), dojo_name = dojo)




