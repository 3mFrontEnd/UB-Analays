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
