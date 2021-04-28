<template>
 
      <div class="bg-image d-flex flex-column justify-content-center">
        <div class="full-name">
          <h1>Younes</h1>
          <hr />
          <p>Full-Stack Developer</p>
        </div>
      </div>
        
        
      
      
  
</template>

<script>
export default {
name:"Head",
}
</script>

<style   lang="scss" scoped>
      

.bg-image{
  height: 100vh;
  background-image: url("../assets/assets/bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  z-index: 0;
  .full-name{
  font-family: 'Nunito Sans', sans-serif;
  z-index: 1;
  h1{
   color: white;
    font-size:60px;
}
p{
   color: white;
    font-size:30px;
}
hr{
  width:55%;
  border: 1px solid white;
}
  
}
}


</style>