<template>
  <div class="header">
    <div class="logo">
      <h5>Youcode youssoufia</h5>
    </div>

    <ul class="nav justify-content-end">
      <li class="nav-item">
        <router-link to="/"
          ><button type="button" class="btn btn-outline-primary">
            Sign In
          </button></router-link
        >
      </li>

      <li class="nav-item">
        <router-link to="/SignUp"
          ><button type="button" class="btn btn-outline-primary">
            Sign Up
          </button></router-link
        >
      </li>
    </ul>
  </div>

  <!-- Foorm -->
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
<style lang="scss" scoped>
.header {
  padding: 6px;
  background-color: #fff;
  color: #fff;
  overflow: hidden;
  justify-content: space-around;
  display: flex;
  .logo {
    padding: 5px;
    float: left;
    color: blue;
  }
  .nav {
    width: 12%;
    display: flex !important;
    justify-content: space-between !important;
  }

  h5 {
    color: goldenrod;
  }
}
</style>
