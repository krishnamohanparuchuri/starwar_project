<template>
  <div class="starwar-container">
      <div class="starwar-header">
         <h1>Rendering the starwar people details</h1>
         <input type="text" name="searchButton" id="searchButton" placeholder="Enter some name" v-model="search">
      </div>
      <div class="starwar-body">
       <people-info v-for="people in filteredPeoples"
       :key="people.name"
       :name="people.name"
       :gender="people.gender"
       :birthYear="people.birth_year"
       :starships="people.starships"
       :films="people.films"
       :mass="people.mass"
       :created="people.created"></people-info>
      </div>
      <div class="starwar-pagination">
          <pagination></pagination>
      </div>
  </div>
</template>

<script>
import PeopleInfo from '../components/PeopleInfo.vue';
import Pagination from '../components/Pagination.vue'
export default {
name:'StarwarPeople',
data(){
    return{
        search:'',
    }
},
components:{
  PeopleInfo,
  Pagination
},
computed:{
    peoples(){
        return this.$store.state.peoples
    },
    filteredPeoples(){
        return this.$store.state.peoples.filter((people)=>{
            return people.name.toLowerCase().includes(this.search.toLowerCase())
        })
    },
},
mounted(){
    this.$store.dispatch('loadPeople')
}
}
</script>

<style scoped>
.starwar-container{
    width:100%;
    min-height:900px;
    display:flex;
    flex-direction:column;
}
.starwar-header{
    width:80%;
    min-height:100px;
    display:flex;
    flex-direction:column;
    margin:0 auto;
}
.starwar-header > input{
    height:50px;
    width:100%;
}
.starwar-body{
    width:1300px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    margin:20px;
    margin:0 auto;
}
people-info{
    width:400px;
    height:500px;
    margin:0 auto;
}
.starwar-pagination{
    width:100%;
   display:flex;
   justify-content: center;
   align-items: center;
   height:100px;

}
input{
    font-size:24px;
    color:black;
}
</style>