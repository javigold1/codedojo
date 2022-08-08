# from ctypes import cast
from flask import Flask, render_template
# Import Flask to allow us to create our app
# Create a new instance of the Flask class called "app"
app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")

# The "@" decorator associates this route with the function immediately following


@app.route('/play')
def index1():
    return render_template("index.html")
