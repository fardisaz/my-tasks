<template>
  <div>
    <form @submit.prevent="handleSubmit" class="checkout-form">
      <div>
        <h1>Sign In To Manage Your Daily Tasks</h1>
        <div style="margin-top: 8rem; margin-right: 4rem">
          <div>
            <label for="email" class="signInlabel">Email</label>
            <input type="email" id="email" v-model="data.email" required />
          </div>
          <div>
            <label for="password" style="margin-left: -1rem; margin-right: 1rem"
              >Password</label
            >
            <input
              type="password"
              id="password"
              v-model="data.password"
              required
            />
          </div>
        </div>
        <div>
          <button class="signin-button" type="submit">
            {{ mode === "login" ? "Login" : "Register" }}
          </button>
          <div>
            {{ mode === "login" ? "Not a user?" : "Already the user?" }}
            <a
              v-if="mode === 'login'"
              class="log-link"
              @click="toggleMode('register')"
            >
              Register</a
            >
            <a v-else class="log-link" @click="toggleMode('login')"> Login</a>
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
import { useTaskStore } from "../stores/TaskStore";
const taskStore = useTaskStore();
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
      taskStore.addUser();
      success();
      setTimeout(() => {
        mode.value = "login";
        router.push({ name: "SignIn" });
      }, 4000);
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
