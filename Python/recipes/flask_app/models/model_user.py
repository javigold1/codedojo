from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import db_name
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.fname = data['first_name']
        self.lname = data['last_name']
        self.email = data ['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def register_user(cls,data):
        query = "INSERT INTO user (first_name, last_name, email, password) values (%(first_name)s, %(last_name)s, %(email)s, %(password)s );"
        print(query)
        return connectToMySQL(db_name).query_db(query, data)

    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM user WHERE email = %(email)s;"
        result = connectToMySQL(db_name).query_db(query,data)
        # Didn't find a matching user
        if not result:
            return False
        return cls(result[0])

    @staticmethod
    def validate_registration(data):
        is_valid = True
        if len(data['first_name']) < 2:
            flash("First name must be at least 3 characters.")
            is_valid = False
        if len(data['last_name']) < 2:
            flash("Last name must be at least 3 characters.")
            is_valid = False
        if len(data['email']) < 5:
            flash("Email must be 5 or greater.")
            is_valid = False
        if len(data['password']) < 8:
            flash("Password must be at least 3 characters.")
            is_valid = False
        if not User.validate_email(data):
            is_valid = False
        return is_valid 

    @staticmethod
    def validate_email( data, is_present = False ):
        is_valid = True
        # email = (data['email']) 
   
        if not EMAIL_REGEX.match(data['email']): 
            flash("Invalid email address!", 'email')
            is_valid = False
        else:
            potential_user = User.get_by_email(data)
            if not is_present:
                if potential_user:
                    flash("Email taken!", 'email')
                    is_valid = False
            else:
                if not potential_user:
                    flash("Email not registered!", 'email')
                    is_valid = False
   
        return is_valid

    @staticmethod
    def validate_password_confirm( User ):
        is_valid = True

        if not User['password'] == User['password_confirm']:
            flash("Passwords don't match!", 'password')
            is_valid = False

        return is_valid    

