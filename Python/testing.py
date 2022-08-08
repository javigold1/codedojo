# my_dict = {"name": "Noelle", "language": "Python"}
# for each_key in my_dict:
#     print(each_key)


# capitals = {"Washington": "Olympia", "California": "Sacramento", "Idaho": "Boise",
#             "Illinois": "Springfield", "Texas": "Austin", "Oklahoma": "Oklahoma City", "Virginia": "Richmond"}
# for keyy in capitals.keys():
#     print(keyy)

# for keyy, key in capitals.items():
#     print(f" hi {key} you're in {keyy}")
# students = [
#     {'first_name':  'Michael', 'last_name': 'Jordan'},
#     {'first_name': 'John', 'last_name': 'Rosales'},
#     {'first_name': 'Mark', 'last_name': 'Guillen'},
#     {'first_name': 'KB', 'last_name': 'Tonel'}
# ]

# key = "first_name"
# list = students


# def iterateDictionary2(some_list):
#     x = 0
#     z = 0
#     key = 'first_name'
#     y = len(some_list)
#     print(y)
#     for i in range(y):
#         # print(some_list[i][key])
#         # x += some_list[i][key]
#         x += 1
#     return x


# print(iterateDictionary2(list))
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}


def print_info(some_dict):
    returned_list = ''
    # num_keys = 0
    for key in some_dict:
        num_keys = (len(some_dict[key]))
        returned_list += f"{len(some_dict[key])} {key} \n"
        for i in range(num_keys):
            returned_list += f"{some_dict[key][i]} \n"
        returned_list += "\n"
    # print(returned_list)
    return returned_list


print_info(dojo)
