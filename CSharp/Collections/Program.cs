// System.Collections.Generic;

// Create an array to hold integer values 0 through 9
int[] NewArray = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

// Create an array of the names "Tim", "Martin", "Nikki", & "Sara"
string[] names = { "Tim", "Martin", "Nikki", "Sara" };

for (int idx = 0; idx < names.Length; idx++)
{
    Console.WriteLine($"A name in my array - {names[idx]}");
}

// Create an array of length 10 that alternates between true and false values, starting with true
int numIdx = 10;
bool[] boolArray = new bool[numIdx];
bool isItTrue = true;

for (int i = 0; i < numIdx; i++)
{
    boolArray[i] = isItTrue;
    isItTrue = !isItTrue;
}

foreach (bool res in boolArray)
{
    System.Console.WriteLine(res);
}

// Create a list of ice cream flavors that holds at least 5 different flavors
var flavors = new List<string>() { "vanilla", "chocolate", "rocky road", "napolean", "cookies n cream" };

// Output the length of this list after building it
Console.WriteLine(flavors.Count);

// Output the third flavor in the list, then remove this value
var thirdValue = flavors[2];
Console.WriteLine(thirdValue);
flavors.Remove(thirdValue);
// Output the new length of the list 
foreach (var res in flavors)
{
    System.Console.WriteLine(res);
}
Console.WriteLine(flavors.Count);


Dictionary<string, string> iceCream = new Dictionary<string, string>();

for (int idx = 0; idx < names.Length; idx++)
{
    Random R = new Random();
    int flavorIndex = R.Next(0, flavors.Count());
    iceCream.Add(names[idx], flavors[flavorIndex]);
}

foreach (KeyValuePair<string, string> entry in iceCream)
{
    Console.WriteLine(entry.Key + " - " + entry.Value);
}


