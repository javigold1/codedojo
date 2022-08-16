from dojos_and_ninjas_app.config.mysqlconnection import connectToMySQL
from dojos_and_ninjas_app import db_name


class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        
     # Now we use class methods to query our database

    @classmethod
    def get_all_dojos(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL(db_name).query_db(query)
       
        all_dojos = []
        # Iterate over the db results and create instances of dojo with cls.
        for dojos in results:
             all_dojos.append( cls(dojos) )
            
        return all_dojos

    @classmethod    
    def show_one(cls, data):
        query = "SELECT * FROM dojos where id = "+ data +";"
        results = connectToMySQL(db_name).query_db(query)
        if results == None:
                dojo = False
        else:
            dojo = []
        
        for dojos in results:
             dojo.append( cls(dojos) )
        return dojo

    @classmethod
    def update_dojo(cls, data):
        query = "Update dojos Set first_name = %(fname)s, last_name = %(lname)s, email = %(email)s WHERE id = %(id)s;"

        return connectToMySQL(db_name).query_db( query, data )    


    @classmethod
    def add_dojo(cls, data):
        query = "INSERT INTO dojos( name , created_at, updated_at ) VALUES ( %(name)s , NOW() , NOW() );"
        
        return connectToMySQL(db_name).query_db( query, data )

   

 