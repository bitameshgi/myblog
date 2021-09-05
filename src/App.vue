<template>
  <custome-navbar></custome-navbar>
  

  
     
    
  
      
   
   
    <router-view></router-view>
  <My-footer></My-footer>
</template>

    
  
<script>
import Navbar from "./components/Navbar.vue";

import Footer from "./components/Footer.vue";


export default {
  components: {
    "custome-navbar": Navbar,
    
    "My-footer": Footer,
  
  
  },

  data() {
    return {};
  },
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

