import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');

const trotledOnInputSave = throttle(onInputSave, 500);

document.addEventListener('DOMContentLoaded', onLoadForm);
document.addEventListener('input', trotledOnInputSave);
formEl.addEventListener('submit', onFormSubmit);

function onLoadForm() {
    if (localStorage.getItem('feedback-form-state') !== null) {
        let savedInfo = JSON.parse(localStorage.getItem('feedback-form-state'));
        formEl.elements.email.value = savedInfo.email;
        formEl.elements.message.value = savedInfo.text;
        return
    }
    return
};

function onInputSave() {
    const feedbackFormState = {
        email: '',
        text: '',
    };
    feedbackFormState.email = formEl.elements.email.value;
    feedbackFormState.text = formEl.elements.message.value;
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
