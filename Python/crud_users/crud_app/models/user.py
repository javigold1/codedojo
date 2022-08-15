from crud_app.config.mysqlconnection import connectToMySQL

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.fname = data['first_name']
        self.lname = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # Now we use class methods to query our database

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
       
        results = connectToMySQL('users_db').query_db(query)
       
        all_users = []
        # Iterate over the db results and create instances of user with cls.
        for users in results:
             all_users.append( cls(users) )
        return all_users

    @classmethod    
    def show_one(cls, data):
        print(data)
        query = "SELECT * FROM users where id = "+ data +";"
       
      
        
        results = connectToMySQL('users_db').query_db(query)
        
        if results == None:
                user = False
        else:
            user = []
        
        for users in results:
             user.append( cls(users) )
        return user

    @classmethod
    def update_user(cls, data):
        query = "Update users Set first_name = %(fname)s, last_name = %(lname)s, email = %(email)s WHERE id = %(id)s;"
        print(query)
        
        return connectToMySQL('users_db').query_db( query, data )    


    @classmethod
    def save(cls, data):
        query = "INSERT INTO users( first_name , last_name, email , created_at, updated_at ) VALUES ( %(fname)s , %(lname)s, %(email)s, NOW() , NOW() );"
        
        return connectToMySQL('users_db').query_db( query, data )

    @classmethod
    def delete_user(cls, id):
        print(id)

        query = "DELETE from users where id = " + id + ";"

        return connectToMySQL('users_db').query_db( query )    
        
            