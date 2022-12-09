const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#enter-email');
const pass = document.querySelector('#enter-pass');
const submittBtn = document.querySelector('button');
const inputs = [...document.querySelectorAll('.inputs')];

const firstNameRegex = /^[A-Z]\w+$/;
const lastNameRegex = /^[A-Z]\w+$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegex = /^[A-Za-z]\w{7,14}$/;


submittBtn.addEventListener('click', () => {
    for(const input of inputs){
        if(input.classList.contains('inputs-valid')){
            input.classList.toggle('inputs-valid');
        } else if(input.classList.contains('inputs-error')){
            input.classList.toggle('inputs-error');
        }
    } 
    getFirstName();
    getLastName();
    getEmail();
    getPass();
})

function getFirstName(){
    if(firstName.value === '' && firstName.value.length <= 0 || !firstName.value.match(firstNameRegex)){
        firstName.placeholder = 'First name cannot be empty!'
        firstName.classList.toggle('inputs-error');
    } else if(firstName.value.match(firstNameRegex)) {
        firstName.classList.toggle('inputs-valid')
    }
}

function getLastName(){
    if(lastName.value === '' && lastName.value.length <= 0 || !lastName.value.match(lastNameRegex)){
        lastName.placeholder = 'Last name cannot be empty!'
        lastName.classList.toggle('inputs-error');
    } else if(lastName.value.match(lastNameRegex)) {
        lastName.classList.toggle('inputs-valid')
    }
}

function getEmail(){
        if(email.value === '' && email.value.length <= 0 || !email.value.match(emailRegex)){
        email.placeholder = 'Email cannot be empty!'
        email.classList.toggle('inputs-error');
    } else if(email.value.match(emailRegex)) {
        email.classList.toggle('inputs-valid')
    }
}

function getPass(){
    if(pass.value === '' && pass.value.length <= 0 || !pass.value.match(passRegex)){
        pass.placeholder = 'Password cannot be empty!'
        pass.classList.toggle('inputs-error');
    } else if(pass.value.match(passRegex)) {
        pass.classList.toggle('inputs-valid')
    }   
}