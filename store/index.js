import { db } from "../plugins/firebase";

export const state = () => ({
  tasks: [],
  task: ''
});

export const mutations = {
  setTasks(state, payload) {
    state.tasks = payload;
  },
  setTask(state, payload) {
    state.tasks.push(payload);
  },
  deleteTask(state, payload) {
    const index = state.tasks.findIndex(item => item.id === payload.id);
    state.tasks.splice(index, 1);
  },
  updateTask(state, payload) {
    const index = state.tasks.findIndex(item => item.id === payload.id);
    state.tasks[index].name = payload.name
  },
  setEditTask(state, payload) {
    state.task = payload;
  }
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    return db
      .collection("tasks")
      .get()
      .then(query => {
        const tasks = [];
        query.forEach(element => {
          let task = element.data();
          task.id = element.id;
          tasks.push(task);
        });
        return commit("setTasks", tasks);
      })
      .catch(err => console.log(err));
  },
  async addTask({ commit }, payload) {
    try {
      const doc = await db.collection("tasks").add({
        name: payload,
        date: new Date()
      });
      commit("setTask", { name: payload, id: doc.id });
    } catch (err) {
      console.log(err);
    }
  },
  deleteTask({ commit }, payload) {
    db.collection("tasks")
      .doc(payload.id)
      .delete()
      .then(() => commit("deleteTask", payload))
      .catch(err => console.log(err));
  },
  editTask({ commit }, payload) {
    db.collection("tasks")
      .doc(payload.id)
      .update({ name: payload.name })
      .then(() => {
          console.log("PAYLOAD: ", payload)
          commit("updateTask", payload)
          this.app.router.push('/vuex') 
        })
      .catch(err => console.log(err));
  }
};
