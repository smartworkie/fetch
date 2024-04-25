const div= document.getElementById("container");

const fetchComment = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/comments")
    const comment = await response.json(); 
console.log(comment)
    comment.forEach((each)=>{ 
        div.innerHTML += `
            <div class='box'>
                <h1> ${each.name} </h1>
                <h3>${each.email}</h3>
                  </div>
        `
    })
}
fetchComment();