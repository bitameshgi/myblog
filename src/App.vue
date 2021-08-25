<template>
  <custome-navbar></custome-navbar>

  <div class="jumbotron">
    <div class="container d-flex flex-column align-items-center">
      <h2 class="jumbotron-heading"><strong> Welcome to Blog Home!</strong></h2>
      <p class="lead text-muted">
        A Bootstrap 5 starter layout for your next blog homepage
      </p>
    </div>
  </div>
  <!-- <heading> -->

  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <a href="#">
            <img
              src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
              class="card-img-top"
            />
          </a>
          <div class="card-body">
            <h3><strong>Featured Post Title</strong></h3>
            <p class="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium enim aut velit rem quo cum, deserunt quam? Eos commodi,
              nulla iure reprehenderit similique numquam deserunt, quae,
              consectetur qui doloremque magnam?
            </p>
            <a class="btn btn-primary" href="#">Read more →</a>
          </div>
        </div>
      </div>
      <!-- <box-left> -->


      <div class="col-lg-4">
        <Search></Search>
        <Categories></Categories>
        <Side></Side>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <Post></Post>
        </div>
        <div class="col-lg-4">
          <Post></Post>
        </div>
      </div>
      <Pagination></Pagination>
</div>
</div>

     <My-footer></My-footer>

  
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Search from "./components/SearchBox.vue";
import Categories from "./components/CategoriesBox.vue";
import Side from "./components/SideBox.vue";
import Post from "./components/Posts.vue";
import Pagination from "./components/Pagination.vue";
import Footer from "./components/Footer.vue"

export default {
  components: {
    "custome-navbar": Navbar,
    Search,
    Categories,
    Side,
    Post,
    Pagination,
    'My-footer':Footer
  },

  data() {
    return {};
  },
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

