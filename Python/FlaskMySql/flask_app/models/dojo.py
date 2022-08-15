from flask_app.config.mysqlconnection import connectToMySQL

class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('dojos_and_ninjas').query_db(query)
        # Create an empty list to append our instances of friends
        all_dojos = []
        # Iterate over the db results and create instances of friends with cls.
        for dojos in results:
             all_dojos.append( cls(dojos) )
        return all_dojos
    @classmethod
    def save(cls, data):
        query = "INSERT INTO dojos( name , created_at, updated_at ) VALUES ( %(name)s , NOW() , NOW() );"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('dojos_and_ninjas').query_db( query, data )

    @classmethod
    def delete(cls, data):
        query = "DELETE INTO dojos( name , created_at, updated_at ) VALUES ( %(name)s , NOW() , NOW() );"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('dojos_and_ninjas').query_db( query, data )    
        
            