const todoList = [
    {
        name: 'make dinner',
        dueDate: '2025-08-18'
    }, {
        name: 'wash dishes',
        dueDate: '2025-08-18'
    }
];

renderTodoList();

document.querySelector('.js-add-btn')
    .addEventListener('click', () => {
        addTodo();
    });

function renderTodoList() {
    let todoListHTML = ''; //an empty string to display HTML through JS

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;

        const html = `

            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${i},1);
                renderTodoList();
            " class="delete-btn">Delete</button>        
        
        `; //generated HTML 
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
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

    inputElement.value = ''; //this reset the input box
    renderTodoList();
}