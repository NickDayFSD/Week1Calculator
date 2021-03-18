// import functions and grab DOM elements
//addition
const input1 = document.getElementById('math-input-1');
const input2 = document.getElementById('math-input-2');
const addEquals = document.getElementById('add-equals-button');
const subEquals = document.getElementById('sub-equals-button');
const multEquals = document.getElementById('mult-equals-button');
const divEquals = document.getElementById('div-equals-button');
const result = document.getElementById('math-results');
// initialize state
console.log(input1);
console.log(input2);

// set event listeners to update state and DOM
addEquals.addEventListener('click',() => {
    result.textContent = Number(input1.value) + Number(input2.value);
})
console.log(result);