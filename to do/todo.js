const todoList = ['make dinner', 'wash dishes'];

document.querySelector('.js-add-btn')
    .addEventListener('click', () => {
        addTodo();
    });

function addTodo() {
    let inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    todoList.push(name); //push to the array
    console.log(todoList); //console output of the array
    inputElement.value = ''; //this reset the input box
    renderTodoList();
}


function renderTodoList() {
    let todoListHTML = ''; //an empty string to display HTML through JS

    for (let i = 0; i < todoList.length; i++) {
        const todos = todoList[i];
        const html = `<p>${todos}</p>`; //generated HTML 
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}