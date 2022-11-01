module.exports ={
    posts: [{id:"abc123",title:"Teste",description:"teste de description",},],

    getAll(){
        return this.posts;
    },
    newPost(title, description){
        this.posts.push({id:Math.random().toString(36).substring(2,9),title: title,description: description});
    },
    deletePost(id){
        this.posts=this.posts.filter(post=>post.id!=id);
    }


}
