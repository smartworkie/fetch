const div= document.getElementById("container");

const fetchPost = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const post = await response.json(); 
console.log(post)
    post.forEach((each)=>{ 
        div.innerHTML += `
            <div class='box'>
                <h1> ${each.title} </h1>
                <h3>${each.body}</h3>
            </div>
        `
    })
}
fetchPost();


