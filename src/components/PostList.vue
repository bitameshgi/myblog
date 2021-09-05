<template>
<div class="col-lg-8">
    
     
      <Post></Post>
<div class="row">
    <div class="col-lg-6">
        <post></post>
        <post></post>
    </div>
 <div class="col-lg-6">
        <post></post>
        <post></post>
    </div>
</div>
</div>
</template>
<script>
import Post from './Post.vue';
export default {
    components:{
        Post,
        // props:['Post'],
    }
}
</script>