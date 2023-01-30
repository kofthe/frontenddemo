//window.alert("Error") 
//alert("Please try again")

console.log("i am a console");
console.warn("i am a console");
console.error("i am a console");
console.info("i am a console");


document.writeln("Merhabalar2312312");

//Kullanıcı tarafından alınana iki sayının toplamını veren js algoritmasını yazınız. 
//Clean Code 
//DRY - Dont Repeat Yourself 

let number1 = parseInt(prompt("Please enter number 1")); 
console.log(typeof number1); //gelen yapının türünü vermektedir. 
let number2 = parseInt(prompt("Please enter number 2")); 
console.log(typeof number2); //gelen yapının türünü vermektedir. 
const number3 = 45; 
number3 = 55; //kızacak. Sabitlemek istenilenler const olarak verilir. 
const sum = number1 + number2; 
console.log(sum);


function sumOfNumbers() {
    let number3 = parseInt(prompt("Please enter number 3"));
    let number4 = parseInt(prompt("Please enter number 4"));
    const number5 = number3 + number4;
    console.log(number5);
}
sumOfNumbers();

function sumOfNumbers2(num1, num2) { 
    num1 = Number(prompt("Please enter number 1"));
    num2 = Number(prompt("Please enter number 2"));
    const num3 = num1 + num2;
    console.log(num3);
}

let sumOfNumbers2 = (num4, num5) => {
    return num4 + num5;
}

//İki sayının küçük olanının karekökünü hesaplayan uygulama 

let twoNumberSum5 = () => {
    let num1, num2; 
    num1 = Number(prompt("Please enter number 1"));
    num2 = Number(prompt("Please enter number 2"));
    let data = Math.sqrt(Math.min(num1, num2));
    console.log(data);
}
twoNumberSum5();

let sayilariTopla = () => {
    let num1, num2; 
    num1 = Number(prompt("Please enter number 1"));
    num2 = Number(prompt("Please enter number 2"));
    if (num1 < 0 || num2 < 0) {
        console.log("Please enter positive numbers");
    }else {
        let data = num1 + num2;
        console.log(data);
    }
}
sayilariTopla();