document.addEventListener('DOMContentLoaded', function () {
    // Timer functionality
    const timerDisplay = document.getElementById('timerDisplay');
    const startTimerBtn = document.getElementById('startTimer');
    const resetTimerBtn = document.getElementById('resetTimer');
    let timerInterval;

    // Start Timer Button
    startTimerBtn.addEventListener('click', function () {
        const hoursInput = document.getElementById('hours');
        const minutesInput = document.getElementById('minutes');
        const secondsInput = document.getElementById('seconds');
        
        let totalTimeInSeconds = parseInt(hoursInput.value) * 3600 + parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);

        if (timerInterval) {
            clearInterval(timerInterval); 
        }

        timerInterval = setInterval(function () {
            if (totalTimeInSeconds > 0) {
                totalTimeInSeconds--;
                const hours = Math.floor(totalTimeInSeconds / 3600);
                const minutes = Math.floor(totalTimeInSeconds / 60 % 60);
                const seconds = totalTimeInSeconds % 60;
                timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            } else {
                clearInterval(timerInterval);
                const timerSound = document.getElementById('timer-sound');
                timerSound.play();
            }
        }, 1000);
    });

    // Reset Timer Button
    resetTimerBtn.addEventListener('click', function () {
        clearInterval(timerInterval);
        document.getElementById('hours').value = 0;
        document.getElementById('minutes').value = 0;
        document.getElementById('seconds').value = 0;
        timerDisplay.textContent = '00:00:00';
    });

    // Motivation functionality
    const motivateBtn = document.getElementById('motivateBtn');
    const motivationText = document.getElementById('motivationText');

    motivateBtn.addEventListener('click', function () {
        const quotes = [
            "Keep going, you're doing great!",
            "Don't stop until you're proud.",
            "Believe in yourself, and all that you are.",
            "Every small step you take brings you closer to your dreams. Keep going, you've got this!",
            "Your hard work will pay off stay focused, stay determined, I BELIEVE",
            "The effort you're putting in today will build the future you deserve tomorrow.",
            "Don't stop until you're proud. Every study session counts towards your big goals!",
            "You have the power to achieve whatever you dream of, your hard work will get you there."
        ];

        const randomIndex = Math.floor(Math.random() * quotes.length);
        motivationText.textContent = quotes[randomIndex];
    });

    // Flashcard functionality
    let flashcards = [];

    // Function to add a flashcard
    function addFlashcard() {
        const question = document.getElementById('question').value.trim();
        const answer = document.getElementById('answer').value.trim();

        if (question && answer) {
            flashcards.push({ question, answer });
            renderFlashcards();
            document.getElementById('question').value = '';
            document.getElementById('answer').value = '';
        } else {
            alert('Please enter both a question and an answer.');
        }
    }

    // Function to render all flashcards
    function renderFlashcards() {
        const container = document.getElementById('flashcards-container');
        container.innerHTML = ''; // Clear the container before rendering

        flashcards.forEach((card, index) => {
            const flashcard = document.createElement('div');
            flashcard.classList.add('flashcard');

            const front = document.createElement('div');
            front.classList.add('front');
            front.textContent = card.question;

            const back = document.createElement('div');
            back.classList.add('back');
            back.textContent = card.answer;
            back.style.display = 'none';

            // Create the delete button for each flashcard
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent triggering flashcard flip on delete click
                flashcards.splice(index, 1); // Remove the flashcard from the array
                renderFlashcards(); // Re-render the flashcards
            });

            flashcard.appendChild(front);
            flashcard.appendChild(back);
            flashcard.appendChild(deleteBtn);

            flashcard.addEventListener('click', () => {
                front.style.display = front.style.display === 'none' ? 'block' : 'none';
                back.style.display = back.style.display === 'none' ? 'block' : 'none';
            });

            container.appendChild(flashcard);
        });
    }

    // Listen for the Add Flashcard button click
    document.getElementById('addFlashcardBtn').addEventListener('click', addFlashcard);

    // To-Do functionality
    const taskInput = document.getElementById('taskInput');  // Get the task input field
    const todoList = document.getElementById('todoList');  // Get the unordered list for tasks

    // Function to add a task

    function addTask() {
        const taskText = taskInput.value.trim();  // Get the value of the task input and trim any excess spaces
        
        if (taskText) {
            // Create a new list item for the task
            const listItem = document.createElement('li');
            listItem.textContent = taskText;  // Set the text of the list item to the task
    
            // Create a delete button for the task
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.classList.add('delete-btn-task');
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();  // Prevent the click from bubbling up to the list item
                listItem.classList.add('fade-out');  // Add fade-out effect
    
                // Wait for the fade-out transition to complete
                setTimeout(() => {
                    todoList.removeChild(listItem);
                }, 1000);  // This should match the fade-out timing
            });
            
            // Append the delete button to the list item
            listItem.appendChild(deleteBtn);
            
            // Add the list item to the to-do list
            todoList.appendChild(listItem);
    
            // Clear the input field after adding the task
            taskInput.value = '';
        } else {
            alert('Please enter a task before adding.');
        }
    }
    

    // Listen for the Add Task button click
    const addTaskBtn = document.getElementById('addTaskBtn');  // Target the correct button
    addTaskBtn.addEventListener('click', addTask);
});
