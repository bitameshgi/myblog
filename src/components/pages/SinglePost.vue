<template>
    
    <div class="container">
        <h2> post title : {{post.title}}</h2>
        <p>{{post.body}}</p>
    </div>
</template>



 <script>
import axios from 'axios';
export default {
data(){
return{
    post:{}
}
},
    created(){
    const id= this.$route.params.post;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
     .then(res =>this.post=res.data)
     .catch(err => console.log(err))
   }
}
</script>