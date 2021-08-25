<template>
    <!-- <div class="col-lg-4"> -->
      <div class="card">
        <a href="#">
          <img
            src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
            class="card-img-top">
        </a>
        <div class="card-body">
          <h3><strong>Post Title</strong></h3>
          <p class="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            enim aut velit rem quo cum, deserunt quam? Eos commodi, nulla.
          </p>
          <a class="btn btn-primary" href="#">Read more →</a>
        </div>
      </div>
    <!-- </div> -->
    <!-- <div class="col-lg-4"> -->
      <div class="card mt-4">
        <a href="#">
          <img
            src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
            class="card-img-top">
        </a>
        <div class="card-body">
          <h3><strong>Post Title</strong></h3>
          <p class="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            enim aut velit rem quo cum, deserunt quam? Eos commodi, nulla.
          </p>
          <a class="btn btn-primary" href="#">Read more →</a>
        </div>
      </div>
    <!-- </div> -->

</template>
<script>
import axios from 'axios';
export default {
  created(){
    axios.get('https://jsonplaceholder.typicode.com/posts?_page=1&_limite=9')
    .then(res => 
    {
	///سلام این یه تغییره که من دادم  :)
      const posts = res.data// متن و عنوان مطالب وبلاگ
      posts.forEach(function (item){ // مطالب رو یکی یکی پیمایش میکنیم
          console.log(item.title)//چاپ عنوان های مطالب
      })
      
    })
    .catch(err => console.log(err))
  }
}
</script>