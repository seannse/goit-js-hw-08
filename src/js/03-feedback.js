import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';
const { email, message } = formEl.elements;

const onFormElInput = function () {
  localStorage.setItem(
    LS_KEY,
    JSON.stringify({
      email: email.value,
      message: message.value,
    })
  );
};

const updateFormEl = function () {
  const beforeParse = localStorage.getItem(LS_KEY);
  let afterParse;
  try {
    afterParse = JSON.parse(beforeParse) || {};
  } catch (error) {
    console.log(error.message);
  }

  email.value = afterParse.email || '';
  message.value = afterParse.message || '';
};

const onFormElSubmit = function (event) {
  event.preventDefault();

  console.log({
    email: email.value,
    message: message.value,
  });
  this.reset();
  localStorage.removeItem(LS_KEY);
};

updateFormEl();
formEl.addEventListener('input', throttle(onFormElInput, 500));
formEl.addEventListener('submit', onFormElSubmit);
