<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm />
      <p>No account yet? <span @click="showLogin = false">Signup</span> instead.</p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm />
      <p>Already registered? <span @click="showLogin = true">Login</span> instead.</p>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true)

    return { showLogin }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: medium solid #f7f8f9;
    outline: none;
    margin: 10px auto;
    color: #212c5b;
    font-size: 14px;
    transition: background-color 0.3s ease 0s;
    padding: 7px 18px;
    height: 40px;
    -webkit-box-shadow: none;
    box-shadow: none; 
  }
  .welcome input:focus {
    border: medium solid #99bfb7;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    color: #212c5b;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>
