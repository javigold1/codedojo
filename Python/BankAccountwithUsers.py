class BankAccount:

    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        self.balance -= amount

    def display_account_info(self):
        return_value = ''
        for attr in self.__dict__.items():
            return_value += f"{str(attr)} \n"
        return(return_value)

    def yield_interest(self):
        if self.balance > 0:
            self.balance *= (1 - self.int_rate)


class User:

    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=.02, balance=0)

    def make_deposit(self, amount):
        self.account.balance += amount

    def make_withdrawal(self, amount):
        self.account.balance -= amount

    def display_user_balance(self):
        return_val = ''
        # print(self.account.balance)
        return_val = f"{str(self.account.balance)}"
        return return_val


my_account = User('Jeff', 'jford@perks.com')
# print(my_account.display_user_balance())

my_account.make_deposit(30)
print(f"The account balance is:  {(my_account.display_user_balance())}")


# my_account = BankAccount(.03, 1000)
# your_account = BankAccount(.01, 2000)

# my_account.deposit(10)
# my_account.deposit(30)
# my_account.deposit(4)
# my_account.withdraw(10)
# my_account.yield_interest()
# print(my_account.display_account_info())

# your_account.deposit(20)
# your_account.deposit(5)
# your_account.withdraw(30)
# your_account.withdraw(40)
# your_account.withdraw(10)
# your_account.withdraw(5)
# your_account.yield_interest()
# print(your_account.display_account_info())
