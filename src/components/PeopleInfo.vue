<template>
  <div class="people-container">
      <h3>First Name: {{this.firstName}}</h3>
      <h3>Surname: {{this.lastName}}</h3>
      <p @click="toggleDetails">{{isOpen ? 'Hide Info' : 'Show Details'}}</p>
      <div v-show="isOpen" class="details-container" >
         <h4>Gender: {{gender}}</h4>
         <h4>Date of Birth: {{birthYear}}</h4>
         <h4>Mass: {{mass}}</h4>
         <h4>Created Date: {{created}}</h4>
         <div class="people-links">
           <p>No of StarShips : {{starships.length}}</p>
           <p>No of films: {{films.length}} </p> 
         </div>
      </div>
  </div>
</template>

<script>
export default {
name:"PeopleInfo.vue",
props:['name','gender','birthYear','starships','films','mass','created'],
data(){
    return{
        isOpen:false,
        fullName:this.name
    }
},
computed:{

    firstName(){
        const intialName = this.fullName.split(' '|| '-')
        return intialName[0]
    },
    lastName(){
        const intialName = this.fullName.split(' '|| '-')
        return intialName[1]
    }
},
methods:{
    toggleDetails(){
        this.isOpen = !this.isOpen
    },
}

}
</script>

<style scoped>
.people-container{
    margin:20px;
    border:2px solid lightsalmon;
    padding:20px;
}
.people-container > p{
  border:1px solid rgb(158, 158, 12);
  height:30px;
  display:flex;
  justify-content:center;
  align-items:center;
}

</style>