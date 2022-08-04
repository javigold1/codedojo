# Update Values in Dictionaries and Lists
x = [[5, 2, 3], [10, 8, 9]]
students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}
z = [{'x': 10, 'y': 20}]

# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ]

x[1][0] = 15

# Change the last_name of the first student from 'Jordan' to 'Bryant'

students[0]['last_name'] = 'Bryant'

# In the sports_directory, change 'Messi' to 'Andres'

sports_directory['soccer'][0] = 'Andres'

# Change the value 20 in z to 30

z[0]['y'] = 30


print(x)
print(students)
print(sports_directory)
print(z)

# Iterate Through a List of Dictionaries
students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]


def iterateDictionary(students_list):
    x = ""
    z = 0
    y = len(students_list)
    for i in range(y):
        num_keys = (len(students_list[i]))
        for key in students_list[i]:
            z += 1
            x += f"{str(key)} - {str(students_list[i][key])}"
            if z < num_keys:
                x += f", "

        x += '\n'
        z = 0
    return x


print(iterateDictionary(students))

# Get Values From a List of Dictionaries
key_name = "last_name"
list_name = students


def iterateDictionary2(key_name, some_list):
    x = ""
    y = len(some_list)
    for i in range(y):
        x += some_list[i][key_name] + '\n'
    return x


print(iterateDictionary2(key_name, list_name))

# Iterate Through a Dictionary with List Values

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}


def print_info(some_dict):
    returned_list = ''
    for key in some_dict:
        num_keys = (len(some_dict[key]))
        returned_list += f"{len(some_dict[key])} {key} \n"
        for i in range(num_keys):
            returned_list += f"{some_dict[key][i]} \n"
        returned_list += "\n"
    return returned_list


print(print_info(dojo))
