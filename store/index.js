import { db } from "../plugins/firebase";

export const state = () => ({
  tasks: []
});

export const mutations = {
  setTasks(state, payload) {
    state.tasks = payload;
  },
  setTask(state, payload) {
    state.tasks.push(payload);
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
      })
      commit("setTask", { name: payload, id: doc.id })
    
    } catch (err) {
      console.log(err);
    }
  }
};
