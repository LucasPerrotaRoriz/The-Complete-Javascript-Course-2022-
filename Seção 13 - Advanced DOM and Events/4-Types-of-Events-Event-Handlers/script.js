'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
header.append(message);

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

/*
An event is basically a signal that is generated by a certain DOM node. No matter if a certain
event is handled or not, for example a click, this event will always happen whe a user clicks,
it does not matter if the event is being listened to or not.

The first advantage of addEventListener is that it allows to add multiple event listeners
to the same event. The old way would simply override the existing function.
The second advantage is that the event handler can be removed in case it's not needed anymore.
*/

const h1 = document.querySelector('h1');

const alertH1 = function(e) {
  alert('addEventListener : Great! You are reading the heading :D');

  //h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

/*
First way of handling events
h1.addEventListener('mouseenter', function(e) {
  alert('addEventListener : Great! You are reading the heading :D');
});*/

/* Old school
Second way of handling events
h1.onmouseenter = function(e) {
  alert('addEventListener : Great! You are reading the heading :D');
}; */

/*
Third way of handling events - By using HTML attribute - Should not be used
Where is located in the HTML file:
<div class="header__title">
        <h1 onclick="alert('HTML alert')">
*/
