# countdown
def countdown(x):
    y = []
    for i in range(x, -1, -1):
        print(i)
        y.append(i)
    return y


print(countdown(5))

# print and return


def Prn_Return(x):
    print(x[0])
    return x[1]


x = [2, 3]
print(Prn_Return(x))

# First plus lenth


def first_plus(x):
    y = x[0]
    y += len(x)
    return y


print(first_plus([3, 4, 5, 6]))

# Values Greater than Second


def values_greater(num_list):
    x = num_list[1]
    num_return = []
    y = 0
    for i in range(len(num_list)):
        if x < num_list[i]:
            y += 1
            num_return.append(num_list[i])
    print(y)
    return num_return


print(values_greater([1, 3, 4, 5]))

# This Length, That Value


def this_length(size, value):
    num_list = []
    for i in range(size):
        num_list.append(value)
    return num_list


print(this_length(5, 8))
