<template>
  <app-header></app-header>
  
  <router-view></router-view>
</template>

<script>
import AppHeader from "@/components/global/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: cornflowerblue;
  height: 40.8rem;
  
  
}


</style>
