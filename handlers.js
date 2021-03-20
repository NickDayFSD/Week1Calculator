import{
    add,
    subtract,
    multiply,
    divide
} from './mathUtils.js';

const input1 = document.getElementById('math-input-1');
const input2 = document.getElementById('math-input-2');
const result = document.getElementById('math-results');

console.log(input1);
console.log(input2);

export function addClick (){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const sum = add(value1, value2);
    result.textContent = sum;
}

export function subClick (){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const difference = subtract(value1, value2);
    result.textContent = difference;
}

export function multClick (){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const product = multiply(value1, value2);
    result.textContent = product;
}

export function divClick (){
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const quotient = divide(value1, value2);
    result.textContent = quotient;
}