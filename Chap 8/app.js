
/* Question 1 */

// prompt the user to enter a character
//let user_input = prompt("Enter a Character");

//Ascii code for the input character
// let ascii = user_input.charCodeAt(0);
// console.log(ascii);

//check input Number, uppercase letter and lowercase letter
// if (ascii >= 48 && ascii <= 57) {
//     alert(`${user_input} is a number.`);
// }else if(ascii >= 65 && ascii <= 90){
//     alert(`${user_input} is a UpperCase Letter.`);
// }else if(ascii >= 97 && ascii <= 122){
//     alert(`${user_input} is a LowerCase Letter.`)
// }else{
//     alert(`${user_input} is not a number`);
// }


/* Question 2 */

// // user se integer le rahe hain
// let num1 = parseInt(prompt("Enter the First Integer"));
// let num2 = parseInt(prompt("Enter the Second Integer"));

// // agr user input me string likhe ga tw if chalega
// if (String(num1) ===  "NaN") {
//     alert("Allow Only Integer")
// }else if(num1 === num2){
//     alert("The two Integers are Equal");
// }else{
//     // find the larger integer
//     let larger;
//     if (num1 > num2) {
//         larger = num1;
//     }else{
//         larger = num2;
//     }
//     // if else dono kay sath work karega alert
//     alert(`The Larger Integer is ${larger}`)
// }


/* Question 3 */

// let user_num = Number(prompt("Enter Your Number"));
// if (String(user_num) === "NaN") {
//    alert('Only Number Allow');
// }
// if (user_num > 0) {
//     alert(`${user_num} Number is Positive`);
// }else if(user_num < 0){
//     alert(`${user_num} Number is Negative`);
// }else if(user_num === 0){
//     alert("Number is Zero");
// }else{
//     alert("Only Number Allow")
// }


/* Question 4 */

// let input = +prompt("Enter a Character");
// if (input === Number(input)) {
//     alert("Allow Only Character");
// }
// if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
//     alert("Character is a Vowel");
// }else{
//     alert("Character is not a Vowel");
// }
// Vowels = a,e,i,o,u


/* Question 5 */

// let password = "sha123@";

// let user_password = prompt("Enter Your Password");

// // user agr password nahi daly ga tw if condition chalega
// if (!user_password) {
//   alert("Please Enter Your Pasword");   
// }else if(password === user_password){
//     alert("Correct! The password you entered matches the original password.")
// }else{
//     alert("Incorrect Password");
// }
  

/* Question 6 */

// let greeting;
// let hour = 13;
// if (hour < 18) {
//     greeting = "Good Day";
// }else{
//     greeting = "Good Evening"
// }
// alert(greeting);


/* Question 7 */

let user_time = prompt("Enter Your Time");

if (user_time >= "5am" || user_time < "12:00pm"){
    alert(`Good Morning! Time is ${user_time}`);    
} else if(user_time >= "12pm" || user_time < "4:00pm" ){
    alert(`Good Afternoon! Time is ${user_time}`);    
} else if(user_time >= "4pm" || user_time < "10:00pm"){
    alert(`Good Evening! Time is ${user_time}`); 
}else if(user_time >= "10pm" || user_time < "5am"){
    alert(`Good Night! Time is ${user_time}`);
}else{
    alert("Incorrect Time! Please Enter Time with am and pm");
}