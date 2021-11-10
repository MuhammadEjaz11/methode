///STRING METHODS


// Question no:1

// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");
// var fullName = firstName + " " + lastName;
// document.write("Hello " + fullName);



// Question no:2

// var favrtMoblie = prompt("Enter Your Favorite Mobile Phone");
// document.write("My favorite phone is: " + favrtMoblie + "<br>")
// var length = favrtMoblie.length
// document.write("Length of string " + length);


// Question no:3

// var string = "Pakistani";
// document.write("String "+string + "<br>");
// var index = string.indexOf("n");
// document.write("Index of n: " + index);


// Question no:4

// var program = "Hello World";
// document.write("String " + program + "<br>");
// var lastIndex = program.lastIndexOf("l");
// document.write("Last Index of 'l' "+ lastIndex);

// Question no:5

// var word = "Pakistani";
// document.write("String " + word + "<br>");
// var findWord = word.charAt(3);
// document.write("Character at index 3: " + findWord);

// Question no:6

// var firstName = prompt("Enter your First Name ");
// var lastName = prompt("Enter your Last Name ");
// var fullName = firstName.concat(" " + lastName);
// document.write(fullName);


// Question no:7


// var city = "Hyderabad";
// document.write("City: " + city + "<br>");
// var replacement = city.replace("Hyderabad", "Islamabad");
// document.write("After replacement: " + replacement);


// Question no:8


// var message = "“Ali and Sami are best friends. They play cricket and football together.”";
// document.write(message + "<br>");
// var allReplace = message.replace(/and/g, "&");
// document.write(allReplace);

// Question no:9


// var string = "472";
// document.write("Value:" + string + "<br>" + "Type: " + typeof string + "<br>");
// var number = Number(string);
// document.write("Value:" + number + "<br>" + "Type: " + typeof number + "<br>");


// Question no:10


// var user = prompt("Enter Name");
// document.write("User Input: " + user + "<br>");
// var user2 = user.toUpperCase();
// document.write("Upper case: " + user2);


// Question no:11


// var nam = prompt("Enter Name");
// document.write("User input: " + nam + "<br>");
// var firstchar = nam.slice(0, 1).toUpperCase();
// var lastChar = nam.slice(1).toLowerCase();
// var titleCase = firstchar.concat( lastChar)
// document.write("Title case: " + titleCase);


// Question no:12


// var number = 35.36;
// document.write("Number: " + number + "<br>");
// var result = number.toString().replace(".", "");
// document.write("Result: " + result);


// Question no:13



// var userName = prompt("Enter Name ");

// if (userName.match(/[\@\.\,\!]/)) {

//     document.write("Please Enter a valid username ");

// }
// else {
//     document.write(userName)
// }




// Question no:14


// var matchFound = "yes"
// var items = ["cake", "apple", "pie", "cookie", "chips", "patties"];
// var costumer = prompt("Enter  Items");
// var costumer = costumer.toLowerCase();

// for (i = 0; i < items.length; i++) {
//     if (costumer === items[i]) {
//         document.write(costumer + " is available at index " + i + " in our bakery")
//         matchFound = "No"
//     }
// }
// if (matchFound   === "yes") {
//     document.write(costumer + " is not available  " + " in our bakery")

// }



// Question no:15


// var password = prompt("Enter Password");

// if (password.match(/[a-z]||(?=.*[A-Z]) && (?=.*[0-9]){6,20}/)) {
//     document.write("Password Correct");
// }

// else {
//     document.write(" Enter a valid Password");
// }



// Question no:16

// var university = "University of Karachi";
// var arr = university.split("")
// for (i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>")

// }






// Question no:17


// var userInput = prompt("Enter a name");
// document.write("User input " + userInput + "<br>");
// userInput = userInput.slice(-1);
// document.write("Last Character of input: " + userInput)




// Question no:18

// var text = "The quick brown fox jumps over the lazy dog";
// var text1 = text.toLowerCase();
// document.write(text + "<br>");
// var count = 0;
// for (i = 0; i < text1.length; i++) {
//     if (text1.slice(i, i + 3) === "the") {
//         count++;

//     }
// }
// document.write("There are " + count + " occurrence of word" + " 'the' ");

// MATH METHODS

// Question no:1


// var positiveNumber = +prompt("Enter a Number");
// document.write("number: " + positiveNumber + "<br>");

// var roundOff = Math.round(positiveNumber);
// document.write("round off: " + roundOff + "<br>");

// var floor = Math.floor(positiveNumber);
// document.write("floor value: " + floor + "<br>");

// var ciel = Math.ceil(positiveNumber);
// document.write("ceil value: " + ciel + "<br>");




// Question no:2


// var negativeNumber = +prompt("Enter a Negative  Number");
// document.write("number: " + negativeNumber + "<br>");

// var roundOff = Math.round(negativeNumber);
// document.write("round off: " + roundOff + "<br>");

// var floor = Math.floor(negativeNumber);
// document.write("floor value: " + floor + "<br>");

// var ciel = Math.ceil(negativeNumber );
// document.write("ceil value: " + ciel + "<br>");


// Question no:3


// var num1 = +prompt("Enter a number ");
// var abs = Math.abs(num1);
// document.write("The absolute Value of " + num1 + " is " + abs);


// Question no:4


// var randome = Math.floor(Math.random() * 6) + 1;
// document.write("random dice: " + randome);


// Question no:5

// var game = Math.floor(Math.random() * 2) + 1;

// document.write(game+"<br>")

// if (game === 2) {
//     document.write("randoem coin value : Heads");
// }
// else {
//     document.write("randome coin value: Tails");
// }


// Question no:6


// var num = Math.floor(Math.random() * 100) + 1;
// document.write("random number between 1 and 100: " + num);

// Question no:7

// var userWeight = Number(prompt("Enter  weight"));
// document.write("The weight of user is " + userWeight + " Kilograms");



// Question no:8

// var secret = Math.floor(Math.random() * 10) + 1;
// console.log(secret);
// var secretNumber = +prompt("Guess The Number Between 1 and 10");

// if (secretNumber === secret) {
//     document.write("You Win");
// }
// else {

//     document.write("Try again!");
// }
