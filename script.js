'use strict';

const textInputField = document.getElementById('text-input');
const startBtn = document.getElementById('start-btn');
const outputField = document.getElementById('output');

let textArr = '';
startBtn.addEventListener('click', () => {
    if (textInputField.value) {
        for (let char of textInputField.value) {
            textArr += char;
            outputField.value += textArr + '\n';
        }
    } else {
        outputField.value = 'Please write something in the text inputfield';
        outputField.style.color = 'red';
    }
})
