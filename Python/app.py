# Basic
for i in range(151):
    print(i)

# Multiples of Five
for i in range(5, 1001, 5):
    print(i)

# Counting, the Dojo Way
for i in range(1, 101):
    if i % 10 == 0:
        print('Coding Dojo')
    elif i % 5 == 0:
        print('Coding')
    else:
        print(i)

# Whoa. That Sucker's Huge
sum_of_itself = int(0)
for i in range(5000):
    sum_of_itself += i

print(sum_of_itself)

# Countdown by Fours
for i in range(2018, 0, -4):
    print(i)

# Flexible Counter
lowNum = 2
highNum = 9 + 1
mult = 3

for i in range(lowNum, highNum):
    if i % 3 == 0:
        print(i)
