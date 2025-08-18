const todoList = [];

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
}