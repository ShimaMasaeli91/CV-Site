'use strict';
const menuIcon = document.querySelector('.container-svg');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const modalProjects = document.getElementById('modal-projects');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
menuIcon.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
modalProjects.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// document.getElementById('searchform').onsubmit = function () {
//   window.location =
//     'http://www.google.com/search?q=site:www.shimamasaeli.com ' +
//     document.getElementById('test').value;
//   return false;
// };

// The issue is with the CSS transition property. Currently, the modal is transitioning from its hidden state to its shown state with a duration of 0.4 seconds.

// However, the modal position is set to absolute with a fixed left value of 0. This means that when the modal is shown, it immediately appears at the leftmost position without any transition effect.

// To fix this, you can update the CSS for the modal as follows:

// ```css
// .modal {
//   /* ... other styles ... */
//   left: -21.5%; /* Start with the modal hidden offscreen to the left */
//   transition: left 0.4s ease-out; /* Transition the left position */
// }

// .modal.show {
//   left: 0; /* Show the modal by moving it to the leftmost position */
// }
// ```

// Then, update the JavaScript code to add and remove the "show" class instead of the "hidden" class:

// ```javascript
// const openModal = function () {
//   modal.classList.add('show'); // add the "show" class
//   overlay.classList.add('show'); // add the "show" class
// };

// const closeModal = function () {
//   modal.classList.remove('show'); // remove the "show" class
//   overlay.classList.remove('show'); // remove the "show" class
// };

// // Get the search form element
// const searchForm = document.getElementById('searchform');

// // Add event listener for form submission
// searchForm.addEventListener('submit', function (event) {
//   // Prevent the form from being submitted
//   event.preventDefault();

//   // Clear previous search results
//   clearSearchResults();

//   // Get the search term from the input field
//   const searchTerm = document.querySelector('.search-field').value;

//   // Show the spinner
//   showSpinner();

//   // Delay the search function for 2 seconds (just for demonstration)
//   setTimeout(function () {
//     // Perform the search
//     performSearch(searchTerm);
//   }, 2000);
// });

// // Function to clear search results
// function clearSearchResults() {
//   document.querySelector('.search-results').innerHTML = '';
// }

// // Function to show the spinner
// function showSpinner() {
//   const spinner = document.createElement('div');
//   spinner.classList.add('spinner');
//   document.querySelector('.search-results').appendChild(spinner);
// }

// // Function to perform the search
// function performSearch(searchTerm) {
//   // Get all the text elements on the page
//   const textElements = document.querySelectorAll('.text-element');

//   // Variable to keep track if the search term is found
//   let searchTermFound = false;

//   // Loop through each text element and check if it contains the search term
//   textElements.forEach(function (element) {
//     if (element.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
//       // If the search term is found, scroll to the element and highlight it
//       scrollToElement(element);
//       highlightElement(element);
//       searchTermFound = true;
//       return;
//     }
//   });

//   // If the search term is not found, display a "Not Found" message
//   if (!searchTermFound) {
//     displayNotFoundMessage();
//   }
// }

// // Function to scroll to an element
// function scrollToElement(element) {
//   element.scrollIntoView({ behavior: 'smooth' });
// }

// // Function to highlight an element
// function highlightElement(element) {
//   element.classList.add('highlight');
// }

// // Function to display a "Not Found" message
// function displayNotFoundMessage() {
//   const notFoundMessage = document.createElement('div');
//   notFoundMessage.classList.add('not-found-message');

//   const headline = document.createElement('h2');
//   headline.textContent = 'Not Found';

//   const explanation = document.createElement('p');
//   explanation.textContent =
//     'Sorry, but nothing matched your search terms. Please try again with some different keywords.';

//   notFoundMessage.appendChild(headline);
//   notFoundMessage.appendChild(explanation);
//   document.querySelector('.search-results').appendChild(notFoundMessage);
// }
