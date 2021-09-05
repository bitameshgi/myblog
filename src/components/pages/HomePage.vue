<template>
  
    <!-- <custome-navbar></custome-navbar> -->

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
     
    
  
      
   
      
    <PostList></PostList> 
    <div class="col-lg-4">
        <Search></Search>
         <Categories></Categories>

        <Side></Side>
     </div>
  
      
      <Pagination :mainpage="1" :totalpage="10"></Pagination>
     </div>
 </div> 
    

    
  

   <!-- <My-footer></My-footer>  -->
  </template>

<script>
import Search from '../SearchBox.vue';
import Categories from '../CategoriesBox.vue';
import Side from '../SideBox.vue';
import PostList from '../PostList.vue'; 
import Pagination from '../Pagination.vue';

  

 export default {
   components: {
    Search,
    Categories,
    Side,
    Pagination,
    PostList
  },

  data() {
     return {};
  },
 }; 


</script>