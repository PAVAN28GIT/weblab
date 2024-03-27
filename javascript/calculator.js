var num1 = prompt("Enter num1 : ");
var num2 = prompt("Enter num2 : ");
num1=parseInt(num1);
num2=parseInt(num2);
var op = prompt("Enter +,-,/,* : ");

switch(op){
    case '+':
        document.write(num1+num2);
        break;
    case '-':
        document.write(num1-num2);
        break;
    case '*':
        document.write(num1*num2);
        break;
    case '/':
        document.write(num1/num2);
        break;
}
