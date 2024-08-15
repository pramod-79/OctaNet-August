// index.js 
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const dueDateInput = document.getElementById('due-date');
    const linkInput = document.getElementById('task-link');
    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        const dueDate = dueDateInput.value;
        const taskLink = linkInput.value.trim();

        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <span class="due-date">Due: ${dueDate ? dueDate : 'No due date'}</span>
            ${taskLink ? `<a href="${taskLink}" target="_blank">Link to platform</a>` : ''}
            <div class="buttons">
                <button class="complete">Complete</button>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
        taskInput.value = '';
        dueDateInput.value = '';
        linkInput.value = '';

        li.querySelector('.complete').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.querySelector('.edit').addEventListener('click', () => {
            const newText = prompt('Edit your task:', taskText);
            const newDate = prompt('Edit due date:', dueDate);
            const newLink = prompt('Edit platform link:', taskLink);
            if (newText) {
                li.querySelector('span').textContent = newText;
            }
            li.querySelector('.due-date').textContent = `Due: ${newDate ? newDate : 'No due date'}`;
            if (newLink) {
                li.querySelector('a').href = newLink;
            } else {
                const linkElement = li.querySelector('a');
                if (linkElement) linkElement.remove();
            }
        });

        li.querySelector('.delete').addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }
});