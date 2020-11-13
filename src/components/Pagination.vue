<template>
  <div class="pagination-container">
    <li v-for="pageNumber in totalPages" :key="pageNumber">

    <button @click="changePageNumber(pageNumber)">{{pageNumber}}</button>
    </li>
  </div>
</template>

<script>
export default {
    name:"PaginationContainer",
    data(){
        return{
           totalPages:9,
        }
    },
    methods:{
         changePageNumber(pageNumber){
           console.log(pageNumber)
           this.$store.dispatch('loadNewData',pageNumber)
         }
    }

}
</script>

<style scoped>
.pagination-container > button{
     width:30px;
     height:50px;
     margin:5px;

 }
</style>