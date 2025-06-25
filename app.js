/*let x;
let y;
let operator;
*/
let num1 = "";
let num2 = "";
let mathOperator = "";

function populate(x) {
    if (!mathOperator)
    {
        num1 = "";
    }
    if (mathOperator) {
        num2 += x;
        document.getElementById("display").innerHTML = num2;
        if (mathOperator == "/" && num1 > 0 && num2 == 0) {
            alert("To Infinity and Beyond! \n\nP.S. the number is Infinity when you divide a positive number by 0 ;)");
            num1 = "";
            num2 = "";
            mathOperator = "";
            document.getElementById("display").innerHTML = 0;
            return;
        }
        if (mathOperator == "/" && num1 < 0 && num2 == 0) {
            alert("To Infinity and Beyond! \n\nP.S. the number is -Infinity when you divide a positive number by 0 ;)");
            num1 = "";
            num2 = "";
            mathOperator = "";
            document.getElementById("display").innerHTML = 0;
            return;
        }
        if (mathOperator == "/" && num1 == 0 && num2 == 0) {
            alert("0 divided 0 is NaN ;)");
            num1 = "";
            num2 = "";
            mathOperator = "";
            document.getElementById("display").innerHTML = 0;
            return;
        }
    }

    else {
        num1 += x;
        document.getElementById("display").innerHTML = num1;
    }
}

function add() {
    console.log("add() was called");
    let n1 = num1;
    let n2 = num2;
    console.log(n1);
    console.log(n2);
    console.log(n1 + n2);
    return n1 + n2;
}

function subtract() {
    console.log("subtract() was called");
    let n1 = num1;
    let n2 = num2;
    console.log(n1);
    console.log(n2);
    console.log(n1 - n2);
    return n1 - n2;
}

function multiply() {
    console.log("multiply() was called");
    let n1 = num1;
    let n2 = num2;
    console.log(n1);
    console.log(n2);
    console.log(n1 * n2);
    return n1 * n2;
}

function division() {
    console.log("division() was called");
    let n1 = num1;
    let n2 = num2;
    console.log(n1);
    console.log(n2);
    console.log(n1 / n2);
    return n1 / n2;
}

function operate(operator, n1, n2) {
    if (operator === "/") {
        if (num1 === "" && num2 === "") {
            alert("Please enter a number, a operator, and then another number in that order first ;)");
            document.getElementById("display").innerHTML = "0.";
            return;
        }
        n1 = num1;
        n2 = num2;
        mathOperator = operator;
        document.getElementById("display").innerHTML = num1;
        division();
    }

    if (operator === "*") {
        if (num1 === "" && num2 === "") {
            alert("Please enter a number, a operator, and then another number in that order first ;)");
            document.getElementById("display").innerHTML = "0.";
            return;
        }
        n1 = num1;
        n2 = num2;
        mathOperator = operator;
        document.getElementById("display").innerHTML = num1;
        multiply();
    }
    if (operator === "-") {
        if (num1 === "" && num2 === "") {
            alert("Please enter a number, a operator, and then another number in that order first ;)");
            document.getElementById("display").innerHTML = "0.";
            return;
        }
        n1 = num1;
        n2 = num2;
        mathOperator = operator;
        console.log(mathOperator);
        document.getElementById("display").innerHTML = num1;
        subtract();
    }
    if (operator === "+") {
        if (num1 === "" && num2 === "") {
            alert("Please enter a number, a operator, and then another number in that order first ;)");
            document.getElementById("display").innerHTML = "0.";
            return;
        }
        n1 = num1;
        n2 = num2;
        mathOperator = operator;
        document.getElementById("display").innerHTML = num1;
        add();
    }
    if (operator === "=") {
        try {
            n1 = num1;
            n2 = num2;
            console.log(eval(n1 + mathOperator + n2));
            document.getElementById("display").innerHTML = parseFloat(eval(n1 + mathOperator + n2).toFixed(9));
            num1 = eval(n1 + mathOperator + n2);
            num2 = "";
            mathOperator = "";
        }
        catch (err) {
            alert("Please enter a number, a operator, and then another number in that order first ;)")
        }
    }
}

function clearCalculation() {
    num1 = "";
    num2 = "";
    mathOperator = "";
    document.getElementById("display").innerHTML = "0.";
}