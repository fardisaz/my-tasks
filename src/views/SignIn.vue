<template>
  <div>
    <div v-if="user">
      {{ user?.email }}<button @click="signout">Sign out</button>
    </div>
    <form @submit.prevent="handleSubmit" class="checkout-form">
      <div>
        <h1>Sign In to handle your daily tasks</h1>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="data.email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="data.password"
            required
          />
        </div>
        <div>
          <button type="submit">
            {{ mode === "login" ? "Login" : "Register" }}
          </button>
          <div @click="toggleMode(mode === 'login' ? 'register' : 'login')">
            {{
              mode === "login"
                ? "Not a user? Register"
                : "Already the user? Login"
            }}
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { auth } from "../firebase/index.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { ref } from "vue";

const mode = ref("login");
const user = ref(null);
const data = ref({
  email: "",
  password: "",
});
const toggleMode = (val) => {
  mode.value = val;
};
const login = async (email, password) => {};
const register = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("this is the user: ", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
const handleSubmit = () => {
  let email = data.value.email;
  let password = data.value.password;
  mode.value === "login" ? login(email, password) : register(email, password);
};
</script>
