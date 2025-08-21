const todoList = JSON.parse(localStorage.getItem('todoKey')) || [];

renderTodoList();

document.querySelector('.js-add-btn')
    .addEventListener('click', () => {
        addTodo();
    });

function renderTodoList() {
    let todoListHTML = ''; //an empty string to display HTML through JS

    //replacing for loop with foreach method
    todoList.forEach((todoObject) => {
        //used destructured form of an object 
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="js-delete-btn delete-btn">Delete</button>        
        `; //generated HTML 
        todoListHTML += html;
    });

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-btn')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                localStorage.setItem('todoKey', JSON.stringify(todoList));
                renderTodoList();
            });
        });
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dueDateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateInputElement.value;

    todoList.push({
        //name: name,
        //dueDate: dueDate    
        name, dueDate
    }); //push object element to the array

    //whenever we update by add or delete, we update the localStorage
    localStorage.setItem('todoKey', JSON.stringify(todoList));

    inputElement.value = ''; //this reset the input box
    renderTodoList();
}