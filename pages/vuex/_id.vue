<template>
  <div class="container my-5">
    <h2>Edit Task</h2>
    <p>{{task}}</p>
    <form @submit.prevent="editTask(task)">
      <input type="text" class="form-control mb-2" v-model="task.name" />
      <b-button class="btn-warning"  type="submit">Edit</b-button>
    </form>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase.js";
import { mapState, mapActions } from "vuex";

export default {
  fetch({ store, params }) {
    return db
      .collection("tasks")
      .doc(params.id)
      .get()
      .then(doc => {
        let task = doc.data();
        task.id = doc.id;
        return store.commit("setEditTask", task);
      })
      .catch(err => console.log(err));
  },
  computed: {
    task: {
        get() {
            return {
                name: this.$store.state.task.name,
                id: this.$store.state.task.id
            }
        }
    }
  },
  methods: {
    ...mapActions(["editTask"])
  }
};
</script>
