import { defineStore } from "pinia";
import { doc, updateDoc, arrayUnion, getDoc, setDoc } from "firebase/firestore";

import { db, auth } from "../firebase";
export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    user: {},
    loading: false,
  }),
  getters: {
    tasks() {
      return this.user.tasks;
    },
    favs() {
      return this.user.tasks.filter((task) => task.isFav);
    },
    favCount() {
      return this.favs.length;
    },
    totalCount() {
      return this.user?.tasks?.length;
    },
  },
  actions: {
    addId(id) {
      this.user.id = id;
    },
    async addUser() {
      const userRef = doc(db, "users", auth.currentUser.uid);
      setDoc(userRef, { tasks: [] }, { merge: true });
    },
    async getUser() {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(userRef);
      this.user = {
        id: auth.currentUser.uid,
        tasks: docSnap?.data()?.tasks,
      };
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
        console.log("Error: getDoc(userRef)");
      }
    },
    async deleteTask(task) {
      const userRef = doc(db, "users", auth.currentUser.uid);
      this.user.tasks = this.user.tasks.filter(
        (t) => JSON.stringify(t) !== JSON.stringify(task)
      );
      console.log("after delete:", this.user);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        await updateDoc(userRef, {
          tasks: this.user.tasks,
        });
      } else {
        console.log("Error: deleteTask(userRef)");
      }
    },
    async toggleFav(task) {
      const selected = this.user.tasks.find(
        (t) => JSON.stringify(t) === JSON.stringify(task)
      );
      selected.isFav = !selected.isFav;
      const userRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        await updateDoc(userRef, {
          tasks: this.user.tasks,
        });
      } else {
        console.log("Error: deleteTask(userRef)");
      }
    },
  },
});
