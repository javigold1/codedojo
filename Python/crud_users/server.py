# import the class from users.py
from crud_app.controllers import users
from crud_app import app

# app = Flask(__name__)
        
if __name__ == "__main__":
    app.run(debug=True)