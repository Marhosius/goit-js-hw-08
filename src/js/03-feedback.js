import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');

const trotledOnInputSave = throttle(onInputSave, 500);

document.addEventListener('DOMContentLoaded', onLoadForm);
formEl.addEventListener('input', trotledOnInputSave);
formEl.addEventListener('submit', onFormSubmit);

function onLoadForm() {
    if (localStorage.getItem('feedback-form-state') !== null) {
        let savedInfo = JSON.parse(localStorage.getItem('feedback-form-state'));
        console.log(formEl.elements);
        formEl.elements.email.value = savedInfo.email;
        formEl.elements.message.value = savedInfo.text;
        return
    }
    return
};

function onInputSave(el) {
    const feedbackFormState = {
        email: '',
        text: '',
    };
    // console.log(el.currentTarget.elements.email.value);
    // console.log('Все ОК!');
    feedbackFormState.email = el.currentTarget.elements.email.value;
    feedbackFormState.text = el.currentTarget.elements.message.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
};

function onFormSubmit(ev) {
    ev.preventDefault();
    const feedbackFormSubmit = {
        email: '',
        text: '',
    };
    feedbackFormSubmit.text = ev.currentTarget.elements.message.value;
    feedbackFormSubmit.email = ev.currentTarget.elements.email.value;
    console.log(feedbackFormSubmit);
    localStorage.removeItem('feedback-form-state');
    ev.currentTarget.reset();
};
