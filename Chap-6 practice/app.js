/* Q1 */
let number = 10;
document.write("The result value of a is: " + number + "<br/><br/>");

++number;
document.write("The value of ++a is: " + number + "<br/>");
document.write("Now the value of a is: " + number + "<br/><br/>");

number++;
document.write("The value of a++ is: 11 <br/>");
document.write("Now the value of a is: " + number + "<br/><br/>");

--number;
document.write("The value of --a is: " + number + "<br/>");
document.write("Now the value of a is: " + number + "<br/><br/>");

number--;
document.write("The value of a-- is: 11 <br/>");
document.write("Now the value of a is: " + number + "<br/><br/>");

/* Q2 */
let a = 2;
let b = 1;
--a;
--a - --b;
--a - --b + ++b;
document.write("a is = " + a + "<br/>");
document.write("b is = " + b + "<br/>");
//--a - --b | || b | b--;