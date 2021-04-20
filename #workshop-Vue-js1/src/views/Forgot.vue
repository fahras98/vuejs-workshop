<template>
  <div class="container">
    <form>
      <h3>Forgot Password</h3>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      <button type="submit" class="btn btn-primary">Reset Password</button>
    </form>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
form {
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
