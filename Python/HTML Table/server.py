# from ctypes import cast
from flask import Flask, render_template
# Import Flask to allow us to create our app
# Create a new instance of the Flask class called "app"
app = Flask(__name__)

# The "@" decorator associates this route with the function immediately following
@app.route('/')
def default():
    users = [
        {'first_name' : 'Michael', 'last_name' : 'Choi'},
        {'first_name' : 'John', 'last_name' : 'Supsupin'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'} 
        ]
    return render_template('HtmlTable.html', user=users)

if __name__ == "__main__":   
    app.run(debug=True)