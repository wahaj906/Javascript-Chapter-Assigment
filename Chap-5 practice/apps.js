/* Q1 */
let num1 = 5;
let num2 = 3;
let plus = num1 + num2;
document.write("Plus: " + plus + "<br/><br/>");

/* Q2 */
let minus = num1 - num2;
document.write("Minus: " + minus + "<br/>");

let multiply = num1 * num2;
document.write("Multiply: " + multiply + "<br/>");

let divide = num1 / num2;
document.write("Divide: " + divide + "<br/>");

let modulus = num1 % num2;
document.write("Modulus: " + modulus + "<br/><br/>");

/* Q3 */
let number = 5;
document.write("Initial Value: " + number + "<br/>");
number++;
document.write("Value after increment: " + number + "<br/>");
// number = number + 7; both are same
number += 7;
document.write("Value after addition is: " + number + "<br/>");
number--;
document.write("Value after decrement is: " + number + "<br/>");
// number = number / 3; both are same
number %= 3;
document.write("The remainder is: " + number + "<br/><br/>");

/* Q4 */
let ticket = 600;
ticket *= 5 ;
document.write("Total cost to by 5 tickets to a movie is " + ticket + "PKR" + "<br/><br/>"); 

/* Q5 */
let table = 4;

for (let i=1 ; i<=10 ; i++) {
    document.write(table + " " + "X" + " " + i + " " + "=" + " " + table*i + "<br/>");
}

/* Q6 */
let temperature = "NNC";
document.write("25C is 77C <br/> 70F is 21.1111C");

/* Q7 */
let shopping;