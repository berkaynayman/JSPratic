const todos = [
    { title: 'Todo 1', desc: 'todo 1 desc.'},
    { title: 'Todo 2', desc: 'todo 2 desc.'},
    { title: 'Todo 3', desc: 'todo 3 desc.'}
]

const todoListElem = document.getElementById('todoList')

function todoList(){
    setTimeout(() => {
        let todoItems = ''
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

function newTodo(todo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            todos.push(todo)
            const e = false

            if(!e) {
                resolve(todos)
            } else {
                reject('hata var')
            }
        }, 2000)
    })
}

newTodo({
    title: 'Todo 4',
    desc: 'Todo 4 desc'
}).then(res => {
    console.log('yeni liste', res)
    todoList()
}).catch(e => {
    console.log(e)
})


// Promise All
const p1 = Promise.resolve('P1')
const p2 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'Deneme')
)
const p3 = 1244214
const p4 = fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
    res.json()
)

Promise.all([p1, p2, p3, p4]).then(promises => {
    console.log('promises', promises)
})