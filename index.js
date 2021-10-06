const clear = document.querySelector(".clear");
const percent = document.querySelector(".percent");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const sub = document.querySelector(".sub");
const add = document.querySelector(".add");
const equal = document.querySelector(".equal");
const dispCalc = document.getElementsByClassName("disp-calc");
const numbers = document.querySelectorAll(".nu");
// const no1 = document.getElementsByClassName("no1");
// const no2 = document.getElementsByClassName("no2");
// const no3 = document.getElementsByClassName("no3");
// const no4 = document.getElementsByClassName("no4");
// const no5 = document.getElementsByClassName("no5");
// const no6 = document.getElementsByClassName("no6");
// const no7 = document.getElementsByClassName("no7");
// const no8 = document.getElementsByClassName("no8");
// const no9 = document.getElementsByClassName("no9");

// displayfunction
const print = function (property) {
  dispCalc[0].innerText += `${property.textContent}`;
  return property.textContent;
};

const secondOperand = function (operator) {
  let temp = dispCalc[0].innerText.slice();
  temp = temp.slice(temp.indexOf(operator) + 1);
  console.log(arr[0]);
  return Number(temp);
};

arr = [];

// operator
let operatorno;

// display number
// dispCalc[0].innerText = "";
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    print(number);
  });
});

//display add
add.addEventListener("click", () => {
  arr = [];
  arr.push(Number(dispCalc[0].innerText));
  print(add);
  console.log(arr);
  operatorno = "+";
});

//display mutiply
multiply.addEventListener("click", () => {
  arr = [];
  arr.push(Number(dispCalc[0].innerText));
  print(multiply);
  operatorno = "*";
});

// display divide
divide.addEventListener("click", () => {
  arr = [];
  arr.push(Number(dispCalc[0].innerText));
  print(divide);
  operatorno = "/";
});

//display sub
sub.addEventListener("click", () => {
  arr = [];
  arr.push(Number(dispCalc[0].innerText));
  print(sub);
  operatorno = "-";
});
clear.addEventListener("click", () => {
  dispCalc[0].innerText = "";
  arr = [];
});

equal.addEventListener("click", () => {
  switch (operatorno) {
    case "+":
      dispCalc[0].innerText = `${secondOperand(operatorno) + arr[0]}`;
      break;
    case "*":
      dispCalc[0].innerText = `${secondOperand(operatorno) * arr[0]}`;
      break;
    case "/":
      dispCalc[0].innerText = `${arr[0] / secondOperand(operatorno)}`;
      break;
    case "-":
      dispCalc[0].innerText = `${arr[0] - secondOperand(operatorno)}`;
      break;
    default:
      break;
  }
});
console.log();
