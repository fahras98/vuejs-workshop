<template>
  <div class="container">
    <div id="form">
      <form>
        <h3>Sign Up</h3>

        <div class="form-group">
          <label for="exampleInputEmail1">Full Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">Sign Up</button>
        <div class="form-check">
          <a class="dropdown-item" >Already registered <router-link to="/">Sign In?</router-link></a>
         
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#form {
  background-color: #fff;
  width: 37%;
  padding: 50px;
  border-radius: 20px;
  display: inline-block;
  margin: 50px 0;

  label {
    display: flex;
  }
  input {
    height: 44px;
  }
  button {
    width: 100%;
    background: rgb(2, 46, 42);
  }
}
</style>
