const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});


document.getElementById('bookingform').addEventListener('submit', function(e){
e.preventDefault();
const name = document.getElementById('name').value;
const message = document.getElementById('successMessage');
message.textContent = `Booking Succesful, ${name}!`;
document.getElementById('bookingform').reset();
});