'use strict';

//Begin page with pop up to welcome
alert ('Welcome to my website. How well do you know me?');

//Question one in regards to place of birth
console.log ('variable for questionOne is undefined, waiting for input', questionOne)
var questionOne = prompt ('Was I born in the United States? Please answer with Yes/Y/No/N.').toUpperCase();
console.log ('Input by user should be variable', questionOne)
if (questionOne === 'YES' || questionOne === 'Y') {
    alert ('Oh no! That is wrong! Better luck next time!')
} else if (questionOne === 'NO' || questionOne === 'N'){
    alert ('Wow! You know me so well!')
} else {
    alert ('Please answer with Yes, Y, or No, N next time.')
}


//Question two in regards to ice cream
console.log('variable for questionTwo is undefined, waiting for input', questionTwo)
var questionTwo = prompt ('Do I like vanilla ice cream? Please answer with Yes/Y/No/N.').toUpperCase();
console.log ('Input by user should be variable', questionTwo)
if (questionTwo === 'YES' || questionTwo === 'Y') {
    alert ('Wow! You know me so well!')
} else if (questionTwo === 'NO' || questionTwo === 'N'){
    alert ('Oh no! That is wrong! Better luck next time!')
} else {
    alert ('Please answer with Yes, Y, or No, N next time.')
}


//Question three in regards to cats
console.log('variable for questionTwo is undefined, waiting for input', questionThree)
var questionThree = prompt ('Do I like cats? Please answer with Yes/Y/No/N.').toUpperCase();
console.log ('Input by user should be variable', questionThree)
if (questionThree === 'YES' || questionThree === 'Y') {
    alert ('Wow! You know me so well!')
} else if (questionThree === 'NO' || questionThree === 'N'){
    alert ('Oh no! That is wrong! Better luck next time!')
} else {
    alert ('Please answer with Yes, Y, or No, N next time.')
}


//Question four in regards to coffee
console.log('variable for questionTwo is undefined, waiting for input', questionFour)
var questionFour = prompt ('Do I enjoy the aroma and taste of coffe? Please answer with Yes/Y/No/N.').toUpperCase();
console.log ('Input by user should be variable', questionTwo)
if (questionFour === 'YES' || questionFour === 'Y') {
    alert ('Oh no! That is wrong! Better luck next time!')
} else if (questionFour === 'NO' || questionFour === 'N'){
    alert ('Wow! You know me so well!')
} else {
    alert ('Please answer with Yes, Y, or No, N next time.')
}

//Question five in regards to travelling
console.log('variable for questionTwo is undefined, waiting for input', questionFour)
var questionFive = prompt ('Have I ever been to Chicago? Please answer with Yes/Y/No/N.').toUpperCase();
console.log ('Input by user should be variable', questionFive)
if (questionFive === 'YES' || questionFive === 'Y') {
    alert ('Oh no! That is wrong! Better luck next time!')
} else if (questionFive === 'NO' || questionFive === 'N'){
    alert ('Wow! You know me so well!')
} else {
    alert ('Please answer with Yes, Y, or No, N next time.')
}

