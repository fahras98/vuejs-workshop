<template>
    <div id="app">
      <Head></Head>
    <About></About>
    <Experience></Experience>
    <Skills></Skills>
    <Projects></Projects>
    <Fotter></Fotter>
  </div>
</template>
<script>

import Head from "./components/Head";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Fotter from "./components/Fotter";


export default {
  name: "App",
  components:{
    Head,
    About,
    Experience,
    Skills,
    Projects,
    Fotter
  }
}



</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
