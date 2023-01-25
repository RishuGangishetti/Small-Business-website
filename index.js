// Add JavaScript to navigate to the contact us page when the button is clicked
let contactButton = document.getElementById("contact-us-button");
contactButton.addEventListener("click", function() {
  window.location.href = "contact.html";
});

// Add JavaScript to create an alert message when the form is submitted
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for your message. We will get back to you soon.");
});
