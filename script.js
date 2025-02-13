document.addEventListener('DOMContentLoaded', function () {
    // Timer functionality
    const timerDisplay = document.getElementById('timerDisplay');  // Get the element where the timer will be displayed
    const startTimerBtn = document.getElementById('startTimer');   // Get the "Start Timer" button
    const resetTimerBtn = document.getElementById('resetTimer');   // Get the "Reset Timer" button
    let timerInterval;  // Declare a variable to store the interval ID for the timer
    
    // Start Timer Button
    startTimerBtn.addEventListener('click', function () {
        console.log('Start Timer button clicked');  // Log when the start button is clicked
        
        const hoursInput = document.getElementById('hours');  // Get the input for hours
        const minutesInput = document.getElementById('minutes');  // Get the input for minutes
        const secondsInput = document.getElementById('seconds');  // Get the input for seconds
        
        // Calculate the total time in seconds based on the inputs for hours, minutes, and seconds
        let totalTimeInSeconds = parseInt(hoursInput.value) * 3600 + parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);
    
        // If there's an existing interval, clear it before starting a new one
        if (timerInterval) {
            clearInterval(timerInterval); 
        }
    
        // Start the interval to update the timer every second
        timerInterval = setInterval(function () {
            // If there's still time left, decrement it by 1 second
            if (totalTimeInSeconds > 0) {
                totalTimeInSeconds--;  // Decrease the total time by one second
                const hours = Math.floor(totalTimeInSeconds / 3600);  // Calculate the remaining hours
                const minutes = Math.floor(totalTimeInSeconds / 60 / 60);  // Calculate the remaining minutes
                const seconds = totalTimeInSeconds % 60;  // Calculate the remaining seconds
                timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`; // Update the display in HH:MM:SS format
            } else {
                clearInterval(timerInterval);  // Stop the timer when it reaches zero
                const timerSound = document.getElementById('timer-sound');  // Access the audio element
                timerSound.play();  // Play the sound when the timer reaches zero
            }
        }, 1000);  // The setInterval function runs every 1000 milliseconds (1 second)
    });
    
    // Reset Timer Button
    resetTimerBtn.addEventListener('click', function () {
        console.log('Reset Timer button clicked');  // Log when the reset button is clicked
        clearInterval(timerInterval);  // Stop any active timer
        document.getElementById('hours').value = 0;  // Reset the hours input to 0
        document.getElementById('minutes').value = 0;  // Reset the minutes input to 0
        document.getElementById('seconds').value = 0;  // Reset the seconds input to 0
        timerDisplay.textContent = '00:00:00';  // Reset the timer display to 00:00
    });

    // Motivation functionality
    const motivateBtn = document.getElementById('motivateBtn');  // Get the "Motivate" button
    const motivationText = document.getElementById('motivationText');  // Get the element where the motivational quote will be displayed
    
    motivateBtn.addEventListener('click', function () {
        console.log('Motivate button clicked');  // Log when the motivate button is clicked
        
        // Array of motivational quotes
        const quotes = [
            "Keep going, you're doing great!", 
            "Don't stop until you're proud.", 
            "Believe in yourself, and all that you are.",
            "Every small step you take brings you closer to your dreams. Keep going, you've got this!",
            "Your hard work will pay off stay focused, stay determined, I BELIEVEEVEVE",
            "The effort you're putting in today will build the future you deserve tomorrow.",
            "YOU GOTTA WORK HARDER TO MAKE ME A HOUSE HUSBNAD",
            "MAKE LORD FARQUAD PROUD",
            "I BELIEVE IN MY PROBOSCIS MONKEY",
            "Don't stop until you're proud. Every study session counts towards your big goals!",
            "My baby is the smartest person i know, she definitely got this",
            "PADIPU MOOKIUM SVETHAA",
            "You have the power to achieve whatever you dream of your hard work will get you there."
        ];

        const randomIndex = Math.floor(Math.random() * quotes.length);  // Generate a random index to pick a random quote
        motivationText.textContent = quotes[randomIndex];  // Display the randomly selected quote in the motivationText element
    });
});
