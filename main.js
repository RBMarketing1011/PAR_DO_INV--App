const col1 = document.querySelectorAll('#col1');
const col2 = document.querySelectorAll('#col2');
const col3 = document.querySelectorAll('#col3');

let arr1 = new Array;
let arr2 = new Array;
let arr3 = new Array;

let sum = [];

const btn = document.querySelector('#InputBtn');



function Do() {
    col1.forEach(e => {
        arr1.push(e.value);
    });
    col2.forEach(e => {
        arr2.push(e.value);
    })


        if (arr1.length !== arr2.length) {
            alert('Someone wrong with array lengths');
        } else {
            for (var i = 0; i < arr1.length; i++) 
                if (arr1[i] - arr2[i] <= 0) {
                col3[i].value = 0;
            } else {
                col3[i].value = arr1[i] - arr2[i];
            }
        }
    
};

btn.addEventListener('click', (e) => {
    Do();
})