const div= document.getElementById("container");
const fetchTodos = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todo = await response.json(); 
console.log(todo)
    todo.forEach((each)=>{ 
        div.innerHTML += `
            <div class='box'>
                <h1> ${each.title} </h1>
                <h3>${each.completed}</h3>
            </div>
        `
    })
}
fetchTodos();