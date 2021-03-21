// import functions and grab DOM elements
import{
    addClick,
    subClick,
    multClick,
    divClick,
} from './handlers.js';

// initialize state
const addEquals = document.getElementById('add-equals-button');
const subEquals = document.getElementById('sub-equals-button');
const multEquals = document.getElementById('mult-equals-button');
const divEquals = document.getElementById('div-equals-button');

// set event listeners to update state and DOM
addEquals.addEventListener('click', addClick);
subEquals.addEventListener('click', subClick);
multEquals.addEventListener('click', multClick);
divEquals.addEventListener('click', divClick);