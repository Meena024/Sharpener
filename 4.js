// localStorage.setItem('name','bob')
// console.log(localStorage.getItem('name'))
// localStorage.removeItem('name')
// console.log(localStorage.getItem('name'))
// sessionStorage.setItem('name','john')
// console.log(sessionStorage.getItem('name'))
// //sessionStorage.removeItem('name')
// console.log(sessionStorage.getItem('name'))

// document.cookie = 'name=kyle; expires=' +new Date(2025,0,1).toUTCString()

// Get the form element
const form = document.getElementById('my-form');

// Add a submit event listener to the form
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting in the traditional way

  // Get the values entered in the form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Create an object to store user data
  const userData = {
    name: name,
    email: email
  };

  // Convert the object to a JSON string
  const userDataJSON = JSON.stringify(userData);

  // Save the data to local storage
  localStorage.setItem('user', userDataJSON);

  // Display a message to the user
  showMessage('User data saved successfully!', 'success');

  // Reset the form
  form.reset();
});

// Function to display messages
function showMessage(message, className) {
  // Create a div element for the message
  const div = document.createElement('div');
  div.className = `msg ${className}`;
  div.appendChild(document.createTextNode(message));

  // Insert the message into the DOM
  const container = document.querySelector('.container');
  const form = document.getElementById('my-form');
  container.insertBefore(div, form);

  // Remove the message after 3 seconds
  setTimeout(function () {
    document.querySelector('.msg').remove();
  }, 3000);
}
