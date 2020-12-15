//date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// nav
const nav = document.querySelector('.nav');
const toggleBtn = document.querySelector('.toggle-collapse');
toggleBtn.addEventListener('click', function () {
  nav.classList.toggle('collapse');

  const lists = nav.querySelectorAll('ul li');

  lists.forEach((list) => {
    list.style.animation = 'navLink 1.5s  ease-in-out';
  });
});

window.addEventListener('resize', function () {
  let width = screen.width;

  if (width > 600) {
    if (nav !== null) {
      nav.classList.remove('collapse');
    }
  }
});

/* Fixed Nav */

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
  }
});

/* Fixed Nav */

// workplace panel
const list = document.querySelector('.workplace__list');
const panels = document.querySelectorAll('.panel');

list.addEventListener('click', function (e) {
  if (e.target.tagName == 'LI') {
    const targetPanel = document.querySelector(e.target.dataset.pick);

    let elems = document.querySelector('.list-active');
    if (elems !== null) {
      elems.classList.remove('list-active');
    }
    e.target.classList.add('list-active');

    panels.forEach((panel) => {
      if (panel == targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
});

// Validation
const form = document.querySelector('.panel__form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const msg = document.getElementById('text-area');

const msgErr = document.querySelector('.msg-err');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nameVal = name.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const msgVal = msg.value.trim();

  if (nameVal === '') {
    setErrorMsg(name, 'Name cannot be blank');
  } else {
    setSuccesMsg(name);
  }

  if (emailVal === '') {
    setErrorMsg(email, 'Email cannot be blank');
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, 'Not a valid email');
  } else {
    setSuccesMsg(email);
  }

  if (msgVal === '') {
    setErrorMsg(msg, 'Message cannot be blank');
  } else {
    setSuccesMsg(msg);
  }

  if (isNaN(phoneVal)) {
    setErrorMsg(phone, 'Input must be a number');
  }
  if (!isNaN(phoneVal)) {
    setSuccesMsg(phone);
  }
  if (phoneVal === '') {
    phone.classList.remove('error-succ');
    phone.classList.remove('error');
  }
});

function setErrorMsg(input, msg) {
  const formControl = input.parentElement;
  formControl.firstElementChild.className = 'input-form  error';

  formControl.children[1].innerText = msg;
}

function setSuccesMsg(input) {
  const formControl = input.parentElement;
  formControl.firstElementChild.className = 'input-form error-succ';
  formControl.children[1].innerText = '';
}

function isEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
  return re;
}

AOS.init({
  duration: 800,
  once: true,
});
