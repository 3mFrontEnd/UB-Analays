const buttons = document.querySelectorAll(".button");
const forms = document.querySelectorAll("form");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        forms.forEach(form => form.classList.remove("show"));
        forms[index].classList.add("show");
    });
});







// Function to change label color based on input value
function changeLabelColor() {
    const input1 = document.getElementById('input1');
    const label1 = document.querySelector('label[for="input1After"]');

    input1.addEventListener('input', () => {
        const inputValue = parseInt(input1.value);

        if (inputValue > 10 && inputValue < 20) {
            input1.style.backgroundColor = 'green'; 
        }else if (inputValue > 20 && inputValue < 40) {
            input1.style.backgroundColor = 'yellow';    
        }else if (inputValue > 40) {
            input1.style.backgroundColor = 'red';
        } else {
            input1.style.color = ''; 
        }
    });
}


window.addEventListener('load', changeLabelColor);



const labels = document.querySelectorAll('label');


const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeModal = document.getElementById('close-modal');


labels.forEach(label => {
    label.addEventListener('click', () => {
       
        const labelText = label.textContent.trim();

        

        const labelTexts = {
            "FSB:": "This is the text for FSB label.",
            "UREA:": "This is the text for UREA label.",
            "CREATININE:": "This is the text for CREATININE label.",
            "CHOLESTEROL:": "This is the text for CHOLESTEROL label.",
            "TRIGLYCERIDE:": "This is the text for TRIGLYCERIDE label.",
            "HDL:": "This is the text for HDL label.",
            "LDL_CH:": "This is the text for LDL_CH label.",
            "ALT(SGPT):": "This is the text for ALT(SGPT) label.",
            "ALT(SGOT):": "This is the text for ALT(SGOT) label.",   
            "?": "hi.",         
        };


        // Display the corresponding text in the modal
        modalText.textContent = labelTexts[labelText];

        // Show the modal
        modal.style.display = 'block';
    });
});

// Close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});



// Get the reload-modal 
const reloadModal = document.getElementById('reload-modal');
const closeReloadModal = document.getElementById('close-reload-modal');

// Show the reload-modal 
window.addEventListener('load', () => {
    reloadModal.style.display = 'block';
});

// Close the reload-modal 
closeReloadModal.addEventListener('click', () => {
    reloadModal.style.display = 'none';
});
