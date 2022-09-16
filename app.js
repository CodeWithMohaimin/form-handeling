// let form = document.getElementById('form');


// const inputName = document.getElementById('name');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const country = document.getElementById('country');
// const message = document.querySelector('small')



// form.addEventListener('submit', function (e) {
//     e.preventDefault()
    
//     let formData = {};

//     [...this.elements].forEach(element => {
//         if (element.type !== 'submit') {
//             formData[element] = element.id
//         }
//     })
//     console.log(formData);
// })



const form = document.getElementById('form');
// all the id's
const inputName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const country = document.getElementById('country');
const message = document.querySelector('small')


form.addEventListener('submit', function (e) {
    e.preventDefault();

    let inputObject = [];
    [...form.elements].forEach(input => {
        inputObject.push(input.value)
    })

    this.reset()
})


// All the information are stored in the inputObject variable
// adding some importent codes
