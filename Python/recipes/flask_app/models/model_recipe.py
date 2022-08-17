from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import db_name
from flask import flash

from flask_app.models import model_user

class Recipe:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data ['instructions']
        self.date_made = data['date_made']
        self.under_30 = data['under_30']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
    
    
    @classmethod
    def add_recipe(cls,data):
        query = "INSERT INTO recipes (name, description, instructions, date_made, under_30, user_id) values (%(name)s, %(description)s, %(instructions)s, %(date_made)s, %(under_30)s, %(user_id)s);"
        return connectToMySQL(db_name).query_db(query, data)

    @classmethod
    def update_recipe(cls,data):
        query = "Update recipes Set name = %(name)s, description = %(description)s, instructions = %(instructions)s, date_made = %(date_made)s,under_30 = %(under_30)s WHERE id = %(id)s;"
        return connectToMySQL(db_name).query_db(query, data) 

    @classmethod
    def delete_recipe(cls,data):
        query = "DELETE from recipes WHERE id = %(id)s;"
        return connectToMySQL(db_name).query_db(query, data)        

    @classmethod
    def get_all_recipes(cls):
        all_recipes = []
        query = "Select * from recipes join user on recipes.user_id = user.id;"  
  
        results = connectToMySQL(db_name).query_db(query)
        if not results:
            return []
        
        for dict in results:
            recipes = cls(dict)
            user_info = {
                'id' : dict['user.id'],
                'first_name' : dict['first_name'],
                'last_name' : dict['last_name'],
                'email' : dict['email'],
                'password' : dict['password'],
                'created_at' : dict['created_at'],
                'updated_at' : dict['updated_at']
            }
            user = model_user.User(user_info)
            recipes.user = user

            all_recipes.append( recipes )

        return all_recipes

    @classmethod
    def get_recipe(cls,data):
        one_recipe = []
        query = "Select * from recipes join user on recipes.user_id = user.id where recipes.id =%(id)s ;"  
        print(query)
        results = connectToMySQL(db_name).query_db(query,data)
        print(results)

        if not results:
            return []
        
        for dict in results:
            recipe = cls(dict)
            user_info = {
                'id' : dict['user.id'],
                'first_name' : dict['first_name'],
                'last_name' : dict['last_name'],
                'email' : dict['email'],
                'password' : dict['password'],
                'created_at' : dict['created_at'],
                'updated_at' : dict['updated_at']
            }
            user = model_user.User(user_info)
            recipe.user = user

            one_recipe.append( recipe )

        return one_recipe
    
    @staticmethod
    def validate_recipe(data):
        is_valid = True
        if len(data['recipe_name']) < 1:
            flash("Recipe must have a name.")
            is_valid = False
        if len(data['description']) < 3:
            flash("Description must be at least 3 characters.")
            is_valid = False
        if len(data['instructions']) < 5:
            flash("Instructions must be at least 5 characters.")
            is_valid = False
        return is_valid 
    