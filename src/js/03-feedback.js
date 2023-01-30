import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', onEmailInput);
refs.textarea.addEventListener('input', onTextarealInput)


function onFormSubmit(evt) {
    evt.preventDefault();
    console.log("Send form");
    
    evt.currentTarget.reset();
}

function onEmailInput(evt) {
    const emailValue = evt.currentTarget.value;

    console.log(emailValue);

    localStorage.setItem('feedback-form-state', JSON.stringify(emailValue))
}

function onTextarealInput(evt) {
    const textarealValue = evt.currentTarget.value;

    console.log(textarealValue);

    localStorage.setItem('feedback-form-state', textarealValue)
}