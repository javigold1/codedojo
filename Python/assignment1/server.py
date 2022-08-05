from ctypes import cast
from flask import Flask  # Import Flask to allow us to create our app
# Create a new instance of the Flask class called "app"
app = Flask(__name__)


# The "@" decorator associates this route with the function immediately following
@app.route('/')
def hello_world():
    return 'Hello World1!'  # Return the string 'Hello World!' as a response


@app.route('/dojo')
def success():
    return "Dojo!"


# for a route '/hello/____' anything after '/hello/' gets passed as a variable 'name'

@app.route('/say/<name>')
def hello(name):
    print(name)
    return "Hello, " + name


@app.route('/repeat/<num>/<nam>')
def repeat(num, nam):
    return_value = ''
    id = int(num)
    print(type(id))

    for i in range(id):
        return_value += f"{nam} <br>"
    return return_value


if __name__ == "__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.
