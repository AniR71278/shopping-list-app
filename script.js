// Requirement: At least one class defined with at least one method[span_1](start_span)[span_1](end_span)
class ToDoManager {
    constructor() {
        // Requirement: Save tasks using Local Storage[span_2](start_span)[span_2](end_span)
        // Loads existing tasks from local storage or starts with an empty array
        this.tasks = JSON.parse(localStorage.getItem('todo_tasks')) || [];
        
        // Grab elements from the DOM
        this.taskInput = document.getElementById('taskInput');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.taskList = document.getElementById('taskList');
        this.totalTasksDisplay = document.getElementById('totalTasks');

        // Event Listener for the Add button
        this.addTaskBtn.addEventListener('click', () => this.addTask());
        
        // Initial render to screen
        this.render();
    }

    // Helper method to save to Local Storage
    saveData() {
        localStorage.setItem('todo_tasks', JSON.stringify(this.tasks));
    }

    // Requirement: Add a new task[span_3](start_span)[span_3](end_span)
    addTask() {
        const taskText = this.taskInput.value.trim();
        
        // Requirement: Input validation (prevent empty tasks)[span_4](start_span)[span_4](end_span)
        // Requirement: At least one conditional statement used correctly[span_5](start_span)[span_5](end_span)
        if (taskText === "") {
            alert("Please enter a valid task. Empty tasks cannot be saved.");
            return;
        }

        const newTask = {
            id: Date.now(), // Creates a unique ID based on the exact time
            text: taskText,
            completed: false
        };

        this.tasks.push(newTask);
        this.taskInput.value = ""; // Clear the input field
        this.saveData();
        this.render();
    }

    // Requirement: Delete a task[span_6](start_span)[span_6](end_span)
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveData();
        this.render();
    }

    // Requirement: Mark a task as completed[span_7](start_span)[span_7](end_span)
    toggleComplete(id) {
        // Requirement: At least one loop used correctly[span_8](start_span)[span_8](end_span)
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === id) {
                this.tasks[i].completed = !this.tasks[i].completed;
                break;
            }
        }
        this.saveData();
        this.render();
    }

    // Requirement: Edit an existing task[span_9](start_span)[span_9](end_span)
    editTask(id) {
        const taskToEdit = this.tasks.find(task => task.id === id);
        if (!taskToEdit) return;

        const newText = prompt("Edit your task:", taskToEdit.text);
        
        // Validation for the edit prompt
        if (newText !== null && newText.trim() !== "") {
            taskToEdit.text = newText.trim();
            this.saveData();
            this.render();
        } else if (newText !== null && newText.trim() === "") {
            alert("Task cannot be updated to be empty.");
        }
    }

    // Requirement: Display all tasks[span_10](start_span)[span_10](end_span)
    render() {
        // Clear the current list
        this.taskList.innerHTML = ""; 
        
        // Loop through the array to generate HTML for each task
        this.tasks.forEach(task => {
            const li = document.createElement('li');
            if (task.completed) {
                li.classList.add('completed');
            }

            const textSpan = document.createElement('span');
            textSpan.textContent = task.text;

            const actionDiv = document.createElement('div');
            actionDiv.classList.add('action-btns');

            // Complete/Undo Button
            const toggleBtn = document.createElement('button');
            toggleBtn.textContent = task.completed ? "Undo" : "Complete";
            toggleBtn.classList.add('complete-btn');
            toggleBtn.onclick = () => this.toggleComplete(task.id);

            // Edit Button
            const editBtn = document.createElement('button');
            editBtn.textContent = "Edit";
            editBtn.classList.add('edit-btn');
            editBtn.onclick = () => this.editTask(task.id);

            // Delete Button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = () => this.deleteTask(task.id);

            // Assemble the elements
            actionDiv.appendChild(toggleBtn);
            actionDiv.appendChild(editBtn);
            actionDiv.appendChild(deleteBtn);

            li.appendChild(textSpan);
            li.appendChild(actionDiv);
            
            this.taskList.appendChild(li);
        });

        // Requirement: Display the total number of tasks[span_11](start_span)[span_11](end_span)
        this.totalTasksDisplay.textContent = this.tasks.length;
    }
}

// Initialize the application to kick everything off
const app = new ToDoManager();
