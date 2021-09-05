<template>
<div class="card mb-4">
          <a href="#">
            <img
              src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
              class="card-img-top"
            />
          </a>
          <div class="card-body">
            <h3 class="card-title ">
              <router-link :to="`/posts/${post.id}`">{{post.title}}</router-link>
              
            </h3>
            <p class="card-text">
             {{post.body}}
            </p>
            <a class="btn btn-primary" href="#">Read more →</a>
          </div>
        </div>



  

</template>
<script>
export default {
  props:['post'],
}
</script>

