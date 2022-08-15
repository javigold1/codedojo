# from ctypes import cast
from flask import Flask, render_template
# Import Flask to allow us to create our app
# Create a new instance of the Flask class called "app"
app = Flask(__name__)


# The "@" decorator associates this route with the function immediately following
@app.route('/')
def index():
    return render_template("index.html")


@app.route('/play')
def play():
    return render_template("index.html")


# for a route '/hello/____' anything after '/hello/' gets passed as a variable 'name'

@app.route('/play/<int:num>')
def display_num(num):
    id = int(num)
    color = "dodgerblue"
    return render_template('index1.html', num=id, color=color)


@app.route('/play/<int:num>/<color>')
def display_color(num, color):
    id = int(num)
    return render_template('index1.html', num=id, color=color)


if __name__ == "__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.
#