// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedbackElement = document.getElementById("feedback");
    
    // Check if an option was selected
    if (!selectedOption) {
        feedbackElement.textContent = "Please select an answer before submitting!";
        feedbackElement.className = "incorrect";
        return;
    }
    
    // Get the user's answer value
    const userAnswer = selectedOption.value;
    
    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.className = "correct";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.className = "incorrect";
    }
}

// Wait for DOM to be fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the submit button
    const submitButton = document.getElementById("submit-answer");
    if (submitButton) {
        submitButton.addEventListener("click", checkAnswer);
    } else {
        console.error("Submit button with id 'submit-answer' not found");
    }
    
    // Add event listeners to options for better UX
    const options = document.querySelectorAll('.option');
    if (options.length > 0) {
        options.forEach(option => {
            option.addEventListener('click', function() {
                // Remove selected class from all options
                options.forEach(opt => opt.classList.remove('selected'));
                // Add selected class to clicked option
                this.classList.add('selected');
                // Check the radio input inside this option
                const radioInput = this.querySelector('input[type="radio"]');
                if (radioInput) {
                    radioInput.checked = true;
                }
            });
        });
    } else {
        console.error("No elements with class 'option' found");
    }
});