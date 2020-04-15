import { db } from "../plugins/firebase";

export const state = () => ({
  tasks: []
});

export const mutations = {
  setTasks(state, payload) {
    state.tasks = payload;
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
      });
  }
};
