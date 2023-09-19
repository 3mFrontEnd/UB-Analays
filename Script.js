// hamburger menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// close button
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close");

// opens the modal
const privacyPolicyLink = document.getElementById("privacy-policy-link");

// to open the modal
function openModal() {
    modal.style.display = "block";
}

// to close the modal
function closeModal() {
    modal.style.display = "none";
}

//  opening the modal when the link is clicked
privacyPolicyLink.addEventListener("click", openModal);

//closing the modal when the close button is clicked
closeButton.addEventListener("click", closeModal);

// to close the modal if the user clicks outside the modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


// script for login and regex
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    //  username and password validation
    const usernameRegex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
    const passwordRegex = /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=.*?[\!\#\@\$\%\&\/\(\)\=\?\*\-\+\-\_\.\:\;\,\]\[\{\}\^])[A-Za-z0-9\!\#\@\$\%\&\/\(\)\=\?\*\-\+\-\_\.\:\;\,\]\[\{\}\^]{8,60}$/; 
    
    // validate the username
    function validateUsername() {
        const usernameValue = usernameInput.value;
        if (!usernameRegex.test(usernameValue)) {
            alert('Username must be 3-16 characters long and can only contain letters, numbers, hyphens, and underscores.');
            return false;
        }
        return true;
    }

    // validate the password
    function validatePassword() {
        const passwordValue = passwordInput.value;
        if (!passwordRegex.test(passwordValue)) {
            alert('Password must be at least 8 characters long and contain at least one digit, one lowercase letter, one uppercase letter, and one special character.');
            return false;
        }
        return true;
    }

    // Event listener for form submission
    loginForm.addEventListener('submit', function (event) {
        if (!validateUsername() || !validatePassword()) {
            event.preventDefault(); 
        }
    });
});