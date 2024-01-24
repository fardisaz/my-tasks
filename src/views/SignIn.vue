<template>
  <div>
    <form @submit.prevent="handleSubmit" class="checkout-form">
      <div>
        <h1>Sign In To Manage Your Daily Tasks</h1>
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
import { auth } from "../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { ref } from "vue";
import router from "@/router";
import { toast } from "vue3-toastify";
const success = () => {
  toast("You are a member now 🥳", {
    autoClose: 3000,
    position: toast.POSITION.TOP_RIGHT,
  });
};
const errorRegister = () => {
  toast("You need a better password !", {
    autoClose: 3000,
    position: toast.POSITION.TOP_RIGHT,
  });
};
const errorLogin = () => {
  toast("Your email or password is invalid !", {
    autoClose: 3000,
    position: toast.POSITION.TOP_RIGHT,
  });
};

const mode = ref("login");
const user = ref(null);
const data = ref({
  email: "",
  password: "",
});
const toggleMode = (val) => {
  mode.value = val;
  if (val == "register") {
    router.push({ name: "SignUp" });
  }
};
const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log(res);
      router.push({ name: "TaskPage" });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      errorLogin();
      console.log(errorCode, errorMessage);
    });
};
const register = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      success();
      router.push({ name: "SignIn" });
    })
    .catch((error) => {
      errorRegister();
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

onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser;
});
</script>
<style></style>
