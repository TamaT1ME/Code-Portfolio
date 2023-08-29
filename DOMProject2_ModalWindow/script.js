'use strict';

/*
This project is to help you deepen your knowledge and skills with DOM and Events.

In this project, you will build a UI component which is called a Modal Window.

A Modal Window is basically a pop-up box which gets overlaid over the rest of the page. 

No matter which of the three buttons the user clicks, it will open the same modal window.

To close the modal window, the user can either click the X button on the modal window or click outside of the window or the user can press the Esc key on their keyboard.
*/

// Get the button and modal elements from the HTML and CSS file

const buttons = document.querySelectorAll('button');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function hide() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden'); // Hide the modal window
}

// Add an event listener to each button for when it's clicked

buttons.forEach(button => {
  button.addEventListener('click', () => {
    modal.classList.remove('hidden'); // Show the modal window
    overlay.classList.remove('hidden');
  });

  // Add an event listener to the close button for when it's clicked

  modal.querySelector('.close-modal').addEventListener('click', () => {
    hide();
  });

  // Add an event listener to the modal element for when the user clicks outside of it

  overlay.addEventListener('click', event => {
    if (event.target == overlay) {
      hide();
    }
  });

  // Add an event listener to the document for when the user presses the Esc key

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      hide();
    }
  });
});
