document.addEventListener("DOMContentLoaded",()=>{
    uptadePosts();
})


function uptadePosts(){
    fetch("http://localhost:3000/api/all").then(res=>
    {
        return res.json();
    }).then(json=>{

        let postElements='';
        let posts= JSON.parse(json);

        posts.forEach((post)=>{ 
            let postElement=`<div id ="${post.id}" class="card mb-4">
            <div class="card-header">
                <h5 class="card-title">${post.title}</h5>
            </div>
            <div class="card-body">
                <div class="card-text">${post.description} </div>
            </div>
            <div class="card-footer">
                <button onclick="deletePost(${post.id})">Deletar</button>
            </div>
        </div>`
        postElements+=postElement;
        })
        document.getElementById("posts").innerHTML=postElements;

    });
}

function newPost(){
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let post = {title,description};

    const options = {method: "POST",
                    headers: new Headers({'Content-Type': 'application/json'}),
                    body: JSON.stringify(post)
                    }

    fetch("http://localhost:3000/api/new",options).then(res=>{
        uptadePosts();
        document.getElementById("title").value="";
        document.getElementById("description").value="";
    })


}
function deletePost(div){

    let id=div.id
    let post ={id};
    const options = {method: 'DELETE',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(post)
    }

    fetch("http://localhost:3000/api/del",options).then(res=>{
        uptadePosts();
})
}