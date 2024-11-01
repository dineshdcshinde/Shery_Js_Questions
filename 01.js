// ----------------------------------------------------BASICS Day 1 to 6-------------------------------------------------------------------------

// 1 - Sum of two integers
// let a = 12;
// let b = 12;
// let c = a+b;
// console.log(c);

// 2- Print the messege along with values and sum
// 	Ex - The sum of 45 & 12  = 57
// let a = 45;
// let b =12 ;
// console.log(`The sum of ${a} & ${b} = ${a+b}`);

// 3- Accept two integers from user and print the sum
// let a = +prompt("Enter first number:");
// let b = +prompt("Enter second number:");
// console.log(`The sum will be ${a+b}`);

// 4- Accept the User's name, age and print in following manner
// 	Ex - Hello Shery, you are 12 years old.
// let userName = prompt("Shery enter userName");
// let age = +prompt("Enter age");
// console.log(`Hello ${userName} Shery, you are ${age}`);

// 5- Solve Increment & decrement operator questions on
// 	https://javaconceptoftheday.com/quiz-on-increment-and-decrement-operators/

// 6- Accept two numbers from user and swap their values
// let a =12;
// let b =23;
// let c =a;

// a=b;
// b=c;
// console.log(a,b)

// -----Without new variable
// let a = 12;
// let b = 23;

// b = (b-a)+1;//12
// a=(b+a)-1;//23
// console.log(a,b);

// --------------------------------------------------------------MATH CLASS Day 7---------------------------------------------------------

// 7- Accept the length and width of a rectangle. Calculate & print the area and perimiter.
// let length = +prompt("Enter lengthof a Rectangle");
// let width = +prompt("Enter width of a Rectangle");

// 8- Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)

// 9- Accept the three sides of triangle and calculate the area using herons formula

// 10- Find surface area of sphere

// 11- Find circumference and area of circle

// --------------------------------------------------------------IF ELSE Day 8 to 11-------------------------------------------------------------

// 12- Accept two numbers and print the greatest between them

// let a = +prompt("Enter first number:");
// let b = +prompt("Enter second number:");

// if(a>b){
//     console.log(`a is the greater number`);
// }else if(a=b){
//     console.log("Both are same");
// }else{
//     console.log("b is the greater number");
// }

// 13- Accept the gender from the user as char and print the respective greeting message
//       Ex - Good Morning Sir (on the basis of gender)

// let gender = prompt(`what peoples call u "he or she"`);
// if(gender == "he"){
//     alert("Good Morning Sir");
// }else {
//     alert("Good Morning Madam :)");
// }

// 14- Extend the previous program and handle the wrong inputs.
//       Print Good Morning sir for input m or M & Good morning Maam for input F or f
//       else print Wrong Input

// let gender = prompt(`What is your gender "M or F"`);
// gender = gender.toUpperCase();
// if(gender == "M"){
//     alert("Good Morning Sir");
// }else if(gender == "F") {
//     alert("Good Morning Madam :)");
// } else{
// console.log("Wrong input");
// }

// 15- Accept an integer and check whether it is an even number or odd.
// let number = +prompt('Enter number');
// if(number%2===0){
//     console.log("Even number");
// }else{
//     console.log("Odd number");
// }

// 16- Accept name and age from the user. Check if the user is a valid voter or not.
//       Vaid - Hello Shery, You are a valid voter.
//       Invalid - Sorry Shery, you can't cast the vote.
// Part 2 - Print after how many years the user will be eligible

// let sheryName = prompt("Enter Your name:");
// let age = +prompt("Enter you age");

// if (age >= 18) {
//   alert("Hello Shery, You are a valid voter! :)");
// } else{
//     console.log(`Sorry Shery, you can't cast the vote!Wait for the ${18-age}`);
// }

// 17- Accept a day number between 1-7 and print the corresponding dayname.

// let dayNumber = +prompt(`Enter the dayNumber 1-7:`);
// if (dayNumber === 1) {
//   console.log("Monday");
// } else if (dayNumber === 2) {
//   console.log("Tuesday");
// } else if (dayNumber === 3) {
//   console.log("Wednesday");
// } else if (dayNumber === 4) {
//   console.log(`Thursday`);
// } else if (dayNumber === 5) {
//   console.log("Friday");
// } else if (dayNumber === 6) {
//   console.log("Saturday");
// } else if (dayNumber === 7) {
//   console.log("Sunday :) Funday");
// } else {
//   console.log("Wrong input");
// }

// 18- Accept three numbers and print the greatest among them

// let first  = +prompt("Enter first number:");
// let second = +prompt("Enter second number:");
// let third = +prompt("Enter third number:");

// if(first >second && first > third){
//     console.log("First Number is greater");
// } else if(second > first && second >third){
//     console.log("Second number is greater");
// }else{
//     console.log(`Third number is greater`);
// }

// 22- Accept an english alphabet from user and check if it is a consonent or a vowel;

// let alphabet = prompt("Enter alphabet");
// alphabet = alphabet.toLocaleLowerCase();

// if(alphabet === "a" || alphabet === "e" || alphabet === "i"|| alphabet === "o"||alphabet === "u"){
//     console.log(`Alphabet  ${alphabet} is vowel`);
// }else{
//     console.log(`Alphabet  ${alphabet} is  consonent`);
// }

// ------------------------------------------------------------------LOOPS Day 12 to 16---------------------------------------------------------------

// 23- Accept an integer and Print hello world n times

// let number = +prompt(`Enter number`);
// let number = 5;

// for(let i=1; i<=number; i++){
//     console.log("Hello World");
// }

// 24- Print natural number up to n.

// let natural = 10000;
// for(let i =1; i<=natural; i++){
//     console.log(i);
// }

// 25- Reverse for loop. Print n to 1.

// let reverseNumber=+prompt("Enter number");
// let reverseNumber = 1000;
// for(let i= reverseNumber; i>=1; i--
// ){
// console.log(i);
// }

// 26- Take a number as input and print its table
//        5 * 1 = 5
//        5 * 2 = 10 ... up to 10 terms

// let table = 290;

// for(let i = 1; i<=10; i++){
//     console.log(i*table);
// }

// 27- Sum up to n terms.

// let number = 5;
// let sum =0;

// for(let i=1; i<=number; i++){
//     sum += i;
// }
// console.log(sum);

// 28- Factorial of a number

// let number = 5;
// let fact = 1;
// if(number > 0){
//     for(let i=1; i<=number; i++){
//         fact = fact*i;
//     }
//     console.log(fact);
// } else{
//     console.log("Not valid");
// }

// 29- Print the sum of all even & odd numbers in a range seperately.
// let range = 10;
// let even = 0;
// let odd = 0;

// for (let i =0; i <=range; i++){
//     if(i%2 === 0){
//         even+=i;
//     } else{
//         odd += i;
//     }
// }

// console.log(even, odd)

// 30- Print all the factors of a number.
// let number = 12;
// let factors = [];

// for(let i=1; i<=number; i++){
//     if(number % i === 0){
//         factors.push(i);
//     }
// }

// console.log(factors)

// 31- Print the sum of all factors of a number, 50 -> 1 + 2 + 5 + 10 + 25 + 50 = 93
// let num = 50;
// let factSum = 0;

// for(let i=1; i<=num; i++){
//     if(num%i === 0){
//         factSum+=i;
//     }
// }
// console.log(factSum);

// 32- Check if the number is Prime or not.
// console.log(factSum%2==0?"prime":"notPrime");

// 33- Write a program to take two inputs a, b & find the value of a  raised to
// the power of b.
// 	Ex - a = 2, b = 5
// 	OP - 2^5 = 32
// let a = +prompt("Enter a value:");
// let b = +prompt("Enter b value:");
// let a = 2;
// let b = 5;
// console.log(Math.pow(a,b));

// let pow = 1;
// for (let i = 0; i < b; i++) {
//   //5
//   pow *= a;
// }
// console.log(pow);

// 34- Seprate each digit of a number and print it on the new line ex - 123
// 	OP
// 		3
// 		2
// 		1
// let num = 123; 
// while (num > 0) {   
//     let lastDigit = num %10; // gave last digit
//     console.log(lastDigit); //print
//     num = Math.floor(num/10);//remove the last digit 
// }

// 34- Sum of digits of a number, 936 = 18}
// let num = 936; 
// let sum = 0;
// while(num>0){
//     let digit = num%10;
//     // console.log(digit); 
//     num = Math.floor(num/10);
//     sum+=digit;
// }
// console.log(sum);

// 35- Sum of digits of a number, 936 = 18
// let sum = 0;
// while(num>0){
//     let digit = num%10;
//     // console.log(digit); 
//     num = Math.floor(num/10);
//     sum+=digit;
// }
// console.log(sum);

// 36- Accept a number and print its reverse

let num = 123456;
let reverse = 0;
let temp = num;
while(temp > 0){
    let digit = temp % 10;
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
}
console.log(reverse);


// 37- Accept a number and check if it is a pallindromic number (If number and its reverse are equal)
//        Ex - 12321 - Rerverse - 12321
// 38- Accept a number and check if it is a strong number or not (Sum of factorial of each digit)
//        Ex- 145 = 1! + 4! + 5! = 145
// 39- Automorphic number 5 = 25 = 625 = 390625, 6=36, 76 = 5776
