<template>
  <nav>
    <ul class="pagination my-4">
      <li class="page-item" :class="{'disabled':FirstPage}">
        <button type="button" class="page-link" aria-label="Previous">
          Previous
        </button>
      </li>
      <li class="page-item" v-for="page in pages" :key="page.name" :class="{'active' : page.isActive}">
        <button type="button" @click="clickPage(page.name)" class="page-link" :disabled="page.isActive">{{page.name}} </button></li>
 
      <li class="page-item" :class="{'disabled':LastPage}">
        <button type="button" class="page-link" aria-label="Next">Next</button>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    totalpage: {
      type: Number,
    },
    mainpage: {
      type: Number,
    },
  },
  computed: {
    pages(){
      let range=[];
   for (let i = 1; i <= this.totalpage; i++) {
     range.push({
       name:i,
       isActive: i===this.mainpage
     })
   }
     return range;
  
    },
    FirstPage() {
      return this.mainpage === 1;
    },
    LastPage() {
return this.mainpage===this.totalpage;
    }
  },
  methods:{
    clickPage(page){
      
    }
  }
};
</script>