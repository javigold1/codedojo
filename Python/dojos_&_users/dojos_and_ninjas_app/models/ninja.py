from dojos_and_ninjas_app.config.mysqlconnection import connectToMySQL
from dojos_and_ninjas_app import db_name

class Ninja:
    def __init__( self , data ):
        self.id = data['id']
        self.fname = data['first_name']
        self.lname = data['last_name']
        self.age = data ['age']
        self.dojos_id = data ['dojos_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
                
     # Now we use class methods to query our database

    @classmethod
    def get_all_ninjas(cls):
        query = "SELECT * FROM ninjas;"
       
        results = connectToMySQL(db_name).query_db(query)
       
        all_ninjas = []
        # Iterate over the db results and create instances of dojo with cls.
        for ninjas in results:
             all_ninjas.append( cls(ninjas) )
             #print(dojos)
        return all_ninjas

    @classmethod    
    def show_one(cls, data):
        # print(data)
        query = "SELECT * FROM ninjas where id = "+ data +";"
      
        results = connectToMySQL(db_name).query_db(query)
        
        all_ninjas = []
        if results == None:
                all_ninjas = False
        else:
         for ninjas in results:
             all_ninjas.append( cls(ninjas) )
         return all_ninjas

    @classmethod
    def update_ninja(cls, data):
        query = "Update ninjas Set first_name = %(fname)s, last_name = %(lname)s, email = %(email)s WHERE id = %(id)s;"
        # print(query)
        
        return connectToMySQL(db_name).query_db( query, data )    


    @classmethod
    def add_ninja(cls, data):
        query = "INSERT INTO ninjas( first_name , last_name, age, dojos_id, created_at, updated_at ) VALUES ( %(fname)s , %(lname)s, %(age)s, %(dojo_id)s,NOW() , NOW() );"
        # print(query)
        return connectToMySQL(db_name).query_db( query, data )

    @classmethod
    def show_ninjas(cls, id):
        query = "Select * from ninjas left join dojos on dojos_id=dojos.id where dojos_id=" + id + ";"
        results = connectToMySQL(db_name).query_db(query)
        show_obj = []       
        if results == False:
                  show_obj = None
        else:
            for ninja in results:
             show_obj.append( cls(ninja) )
   
        return show_obj

    @classmethod
    def show_dojo_name(cls, id):
        query = "Select * from dojos where id=" + id + ";"
        result = connectToMySQL(db_name).query_db(query)
        if not result:
            return False
        dojo = result[0]    
        return dojo   
      