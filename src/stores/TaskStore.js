import { defineStore } from "pinia";
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    user: {
      id: null,
      // email:'',
      tasks: [],
    },
    loading: false,
  }),
  getters: {
    tasks() {
      console.log(this.user.tasks[0]);
      return this.user.tasks[0];
    },
    favs() {
      console.log("favesssss:  ", JSON.parse(JSON.stringify(this.user.tasks)));
      return this.user.tasks.filter((task) => task.isFav);
    },
    favCount() {
      return this.favs.length;
    },
    totalCount() {
      // return [...this.user.tasks].length;
    },
  },
  actions: {
    addId(id) {
      this.user.id = id;
      console.log("this is user id:", this.user.id);
    },
    async getTasks() {
      const userRef = doc(db, "users", this.user.id);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        this.user.tasks.push(...Object.values(docSnap.data()));
      } else {
        console.log("Error in getting the tasks!");
      }

      // }
    },
    async addTask(task) {
      this.user.tasks.push(task);
      const userRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        await updateDoc(userRef, {
          tasks: arrayUnion(task),
        });
      } else {
        await setDoc(userRef, { tasks: [task] });
      }
    },
    async deleteTask(id) {
      // this.tasks = this.tasks.filter((t) => t.id !== id);
      // const res = await fetch("http://localhost:3000/task/" + id, {
      //   method: "DELETE",
      // });
      // if (res.error) {
      //   console.log(res.error);
      // }
    },
    async toggleFav(id) {
      // const task = this.tasks.find((t) => t.id === id);
      // task.isFav = !task.isFav;
      // const res = await fetch("http://localhost:3000/tasks/" + id, {
      //   method: "PATCH",
      //   body: JSON.stringify({ isFav: task.isFav }),
      //   headers: { "Content-Type": "application/json" },
      // });
      // if (res.error) {
      //   console.log(res.error);
      // }
    },
  },
});
