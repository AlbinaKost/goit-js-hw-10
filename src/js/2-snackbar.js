import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const input = form.querySelector('label > input');
  const delay = input.value; // Отримання значення вводу

  function promise(delay, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  }

  promise(delay, form.elements.state.value)
    .then(value => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${value} ms`,
        messageColor: '#FFFFFF',
        backgroundColor: '#59A10D',
        position: 'topRight',
      });
    })
    .catch(value => {
      iziToast.show({
        message: `❌ Rejected promise in ${value} ms`,
        messageColor: '#FFFFFF',
        backgroundColor: '#EF4040',
        position: 'topRight',
      });
    });

  form.reset();
});



