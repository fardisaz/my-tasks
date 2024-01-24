<template>
  <main>
    <div><button @click="signout">Sign out</button></div>
    <!-- heading -->
    <header>
      <img src="../assets/Pinialogo.svg" alt="pinia logo" />
      <h1>My Tasks</h1>
    </header>
    <!-- new task form -->

    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- loading -->
    <!-- <div class="loading" v-if="loading">Loading tasks...</div> -->
    <!-- task list -->
    <div style="max-width: 700px; margin-left: auto; margin-right: auto">
      <div class="task-list" v-if="filter === 'all'">
        <div class="aligneItems">
          <p>You have {{ totalCount }} task(s) left to do</p>
          <SelectOptions :filter="filter" @selectOption="selectFilter" />
        </div>
        <div v-for="task in tasks" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>

      <div class="task-list" v-if="filter === 'favs'">
        <div class="aligneItems">
          <p>You have {{ favCount }} favorite(s) left to do</p>
          <SelectOptions :filter="filter" @selectOption="selectFilter" />
        </div>
        <div v-for="task in favs" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>
      <p>{{ newTasks }}</p>
      <!-- reset -->
      <nav class="filter">
        <button v-show="tasks?.length > 0" @click="taskStore.$reset">
          reset state
        </button>
      </nav>
    </div>
  </main>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useTaskStore } from "../stores/TaskStore";
import TaskDetails from "../components/TaskDetails.vue";
import { ref, onMounted } from "vue";
import TaskForm from "../components/TaskForm.vue";
import SelectOptions from "../components/SelectOptions.vue";
import { auth } from "../firebase.js";
import { signOut, onAuthStateChanged } from "firebase/auth";
import router from "@/router";
const taskStore = useTaskStore();
const { favs, totalCount, favCount } = storeToRefs(taskStore);

// fetch tasks
onAuthStateChanged(auth, (currentUser) => {
  taskStore.addId(currentUser.uid);
  taskStore.getTasks();
});
// taskStore.addId(auth.currentUser.uid);

const filter = ref("all");
const selectFilter = (selected) => {
  filter.value = selected.value;
};
const signout = async () => {
  await signOut(auth)
    .then((res) => {
      router.push({ name: "SignIn" });
    })
    .catch((e) => {
      console.log(e);
    });
};
const tasks = computed(() => taskStore.tasks);
</script>

<style scoped></style>
