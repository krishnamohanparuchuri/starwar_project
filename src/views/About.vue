<template>
  <div class="about-container">
    <h1>Qusetionarie</h1>
    <div class="questionarie">

      <p class="about-head">1) What parts did you struggle with and why?</p>
      <section>
        <p>The project is straight forward for me to implement the task's.During the course program i have gone through all the concepts like fetch requests from an API. The struggling part in this task:  </p>
        <div>

        <li>1) How to start the project? which tools are required? </li>
        <li>2) Analysing the required specifications for the task </li>
        <li>3) Which framework I have to choose?</li>
        <li>4) Designing the mockup  sketches </li>
        <li>5) Do I need to implement any npm libraries for completing the task? </li>
        </div>
      </section>
    </div>
    <div class="questionarie part2">
      <p class="about-head">2) Would you do anything differently if you were to do it again?</p>
      <section>
        <p>To do the same task with a different approach will be a nice idea, for implementing the same task i will choose a other Webframework like React or Vue Js (version 3) or plain JavaScript. By building the own api or may be use of 'axios' without using fetch requests,can be implemented with out use Of VUEX and make some more styling to the whole project. </p>
      </section>
    </div>
    <div class="questionarie">
      <p class="about-head">3) Which framework did you choose and why? If you did not choose to use a framework, why?</p>
      <section>
        <p>Choosing a Vue Js webframework is my first choice, vue js is one of the leading webframeworks available in the present market. For the last two to three years there is a rapid growth in usage of Vue js Framework. The main features are versatile, performant with size of 20Kb and fast virtual Dom, using the component model, VUEX and including Routing and mostly the debugging tools like vue plugin where we can access and have control over the whole data flow between the components. The concepts used in Vue js are more relevant to javascript programming language which is the core for building webPages. </p>
      </section>

    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.about-container{
  width:100%;
  min-height:500px;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin-left:100px;
}
h1{
  margin-right:160px;
}
.questionarie{
  width:80%;
  height:300px;
  display:flex;
  flex-direction:column;
}
.part2{
  height:200px;
  }
.about-head{
  font-size:22px;
  color:chocolate;
  display:flex;
  justify-content: flex-start;
  margin:5px;
}
section{
  font-size:20px;
  width:700px;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
}
section > p{
  display:flex;
  justify-content: flex-start;
  text-align: start;
}
li{
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  list-style: none;
  text-align: start;
}
  
</style>