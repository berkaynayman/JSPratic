const todos = [
    { title: 'Todo 1', desc: 'todo 1 desc.'},
    { title: 'Todo 2', desc: 'todo 2 desc.'},
    { title: 'Todo 3', desc: 'todo 3 desc.'}
]

const todoListElem = document.getElementById('todoList')

function todoList(){
    setTimeout(() => {
        let todoItems = ""
        todos.forEach(item => {
            todoItems += `
            <li>
                <b>${item.title}</b>
                <p>${item.desc}</p>
            </li>
            `
        })
        todoListElem.innerHTML = todoItems
    }, 1000);
}

function newTodo(todo, callback){
    setTimeout(() => {
        todos.push(todo)
        callback()
    }, 2000)
}

newTodo({
    title: 'Todo 4',
    desc: 'Todo 4 desc'
}, todoList)

todoList()