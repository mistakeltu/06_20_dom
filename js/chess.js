console.clear();
import { renderHeader } from '../js/header.js';
renderHeader();

const formDOM = document.querySelector('form');
const inputDOM = document.querySelector('input');
const boardDOM = document.querySelector('.board');

formDOM.addEventListener('submit', (event) => {
    event.preventDefault();
    const number = parseInt(inputDOM.value);

    if (number > 0 && number % 1 === 0) {
        renderChessBoard(number);
    }
});

// STEP 1
// function renderChessBoard(size = 8) {
//     let HTML = '';
//     for(let i = 0; i < size; i++){
//        if(i % 2 === 0){
//         HTML += `<div class="row">
//                     <div class="cell black"></div>
//                     <div class="cell"></div>
//                     <div class="cell black"></div>
//                     <div class="cell"></div>
//                  </div>`;
//        }else {
//         HTML += `<div class="row">
//                     <div class="cell"></div>
//                     <div class="cell black"></div>
//                     <div class="cell"></div>
//                     <div class="cell black"></div>
//                 </div>`;
//        } 
//     }
//     boardDOM.innerHTML = HTML;
// }

// renderChessBoard();

// STEP 2
// function renderChessBoard(size = 8) {
//     let HTML = '';
//     for(let i = 0; i < size; i++){
//        if(i % 2 === 0){
//         HTML += `<div class="row">`
//             for(let j = 0; j < size; j++){
//                 HTML += ` <div class="cell"></div>`;
//             }
//         HTML += `</div>`;
//        }else {
//         HTML += `<div class="row">`
//             for(let j = 0; j < size; j++){
//                 HTML += ` <div class="cell"></div>`;
//             }
//         HTML += `</div>`;
//        } 
//     }
//     boardDOM.innerHTML = HTML;
// }

// renderChessBoard();

//STEP 3

// function renderChessBoard(size = 8) {
//     let HTML = '';
//     for(let i = 0; i < size; i++){
//        if(i % 2 === 0){
//         HTML += `<div class="row">`
//             for(let j = 0; j < size; j++){
//                 if(j % 2 === 0){
//                     HTML += ` <div class="cell black"></div>`;
//                 }else {
//                     HTML += ` <div class="cell"></div>`;
//                 }
//             }
//         HTML += `</div>`;
//        }else {
//         HTML += `<div class="row">`
//             for(let j = 0; j < size; j++){
//                 if(j % 2 === 0){
//                     HTML += ` <div class="cell"></div>`;
//                 }else {
//                     HTML += ` <div class="cell black"></div>`;
//                 }
//             }
//         HTML += `</div>`;
//        } 
//     }
//     boardDOM.innerHTML = HTML;
// }

// renderChessBoard();

//STEP 4

// function renderChessBoard(size = 8) {
//     let HTML = '';
//     for(let i = 0; i < size; i++){
//        if(i % 2 === 0){
//         HTML += `<div class="row">`
//             for(let j = 0; j < size; j++){
//                 HTML += ` <div class="cell ${j % 2 === 0 ? 'black' : ''}"></div>`;
//             }
//         HTML += `</div>`;
//        }else {
//         HTML += `<div class="row">`
//             for(let j = 0; j < size; j++){
//                 HTML += ` <div class="cell ${j % 2 === 0 ? '' : 'black'}"></div>`;
//             }
//         HTML += `</div>`;
//        } 
//     }
//     boardDOM.innerHTML = HTML;
// }

// renderChessBoard();

//STEP 5

// function renderChessBoard(size = 8) {
//     let HTML = '';
//     for(let i = 0; i < size; i++){
//        HTML += `<div class="row">`
//        if(i % 2 === 0){
//             for(let j = 0; j < size; j++){
//                 HTML += ` <div class="cell ${j % 2 === 0 ? 'black' : ''}"></div>`;
//             }
//         //HTML += `</div>`;
//        }else {
//         //HTML += `<div class="row">`
//             for(let j = 0; j < size; j++){
//                 HTML += ` <div class="cell ${j % 2 === 0 ? '' : 'black'}"></div>`;
//             }
//         } 
//        HTML += `</div>`;
//     }
//     boardDOM.innerHTML = HTML;
// }

// renderChessBoard();

//STEP 6

function renderChessBoard(size = 8) {
    let HTML = '';
    let whiteHTML = '';
    let blackHTML = '';

    for(let j = 0; j < size; j++){
        blackHTML += ` <div class="cell ${j % 2 === 0 ? 'black' : ''}"></div>`;
        whiteHTML += ` <div class="cell ${j % 2 === 0 ? '' : 'black'}"></div>`;
    }

    for(let i = 0; i < size; i++){
       HTML += `<div class="row">${i % 2 === 0 ? blackHTML : whiteHTML}</div>`
    }
    boardDOM.innerHTML = HTML;
}

renderChessBoard();