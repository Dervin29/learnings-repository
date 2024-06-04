// Get the elements from the HTML
const addTask = document.getElementById('add-task'); // The button to add a task
const taskContainer = document.getElementById('task-container'); // The container for the tasks
const inputTask = document.getElementById('input-task'); // The input field for the task

// Add an event listener to the addTask button
addTask.addEventListener('click', function(){
    // Create a new task div element
    let task = document.createElement('div');
    task.classList.add('task'); // Add the 'task' class to the div

    // Create a new list item element with the value of the input field
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li); // Append the list item to the task div

    // Create a new check button element
    let checkButton = document.createElement('button');
    checkButton.classList.add('checkTask'); // Add the 'checkTask' class to the button
    checkButton.innerHTML = '<button class="checkTask">Check<i class="fa fa-check"></i></button>'; // Set the inner HTML of the button
    task.appendChild(checkButton); // Append the check button to the task div

    // Create a new delete button element
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteTask'); // Add the 'deleteTask' class to the button
    deleteBtn.innerHTML = '<button class="deleteTask">Delete<i class="fa-solid fa-trash"></i></button>'; // Set the inner HTML of the button
    task.appendChild(deleteBtn); // Append the delete button to the task div

    // Check if the input field is empty
    if(inputTask.value === ""){
        alert("You must write something!"); // Show an alert if the input field is empty
    }
    else{
        // Append the task div to the task container
        taskContainer.appendChild(task);
        
        // Reset the input field
        inputTask.value = "";

        // Add an event listener to the check button
        checkButton.addEventListener('click', function() {
            this.parentElement.classList.toggle('checked');
        });
        
        // Add an event listener to the delete button
        deleteBtn.addEventListener('click', function(e){
            // Get the target element of the click event
            let target = e.target;
            // Remove the parent element of the target (the task div) from the task container
            target.parentElement.parentElement.remove();
        });
    }
});