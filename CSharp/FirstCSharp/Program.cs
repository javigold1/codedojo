// See https://aka.ms/new-console-template for more information

void WriteInts()
{
    for (int i = 1; i <= 100; i++)
    {
        bool isDivisibleBy3 = i % 3 == 0;
        bool isDivisibleBy5 = i % 5 == 0;
        bool isDivisibleBy3and5 = isDivisibleBy3 && isDivisibleBy5;
        bool isDivisibleBy3or5 = isDivisibleBy3 || isDivisibleBy5;

        if (isDivisibleBy3and5)
        {
            Console.WriteLine("FizzBuzz");
        }
        else if (isDivisibleBy3)
        {
            Console.WriteLine("Fizz");
        }
        else if (isDivisibleBy5)
        {
            Console.WriteLine("Buzz");
        }
        else
        {
            Console.WriteLine(i);
        }

    }

}

// WriteInts();


string[] myCars = new string[] { "Mazda Miata", "Ford Model T", "Dodge Challenger", "Nissan 300zx" };
foreach (string car in myCars)
{
    // We no longer need the index, because variable 'car' already represents each indexed value
    Console.WriteLine($"I own a {car}");
}

