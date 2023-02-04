import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));


const formText = {};

function onFormSubmit(evt) {
    evt.preventDefault();
    // console.log("Send form");
    
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(formText);
    clearForm();
}

function onInput(evt) {
    formText[evt.target.name] = evt.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formText));
}


function onLoadingPage() {
    clearForm();
    // const savedFormText = localStorage.getItem('feedback-form-state');
    // // console.log(savedFormText)
    // if (savedFormText) {
    //     const text = JSON.parse(savedFormText);

    //     // console.log(text);
    //     // console.log(text.email);
    //     // console.log(text.message);

    //     refs.input.value = text.email;
    //     refs.textarea.value = text.message;
    // }
    try {
    const value = JSON.parse(localStorage.getItem('feedback-form-state'));
      for (const elem of refs.form.elements) {
      const valueEl = value[elem.name];

      if (valueEl) {
        elem.value = valueEl;
        formText[elem.name] = valueEl;
      }
    }
  } catch {
    localStorage.removeItem('feedback-form-state');
  }
}

function clearForm() {
  for (const elem of refs.form.elements) {
    if (elem.nodeName === 'BUTTON') {
      continue;
    }

    elem.value = '';
    formText[elem.name] = '';
  }
}

onLoadingPage();