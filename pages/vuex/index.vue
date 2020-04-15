<template>
  <div class="container my-5">
    <h1>Vuex</h1>
    <form @submit.prevent="addTask(task)">
        <input type="text" v-model="task" class="form-control mb-2">
        <b-button type="submit">+</b-button>
    </form>
            <div class="card my-5" v-for="n in tasks" :key="n.id">
            <div class="card-body">
                <nuxt-link :to="`/task/${n.id}`"><h2>{{n.name}}</h2></nuxt-link>
                <p>This is the task number {{tasks.indexOf(n)+1}}</p>
                <b-button class="btn-sm btn-success pl-5 pr-5">Add</b-button>
                <b-button class="btn-sm btn-danger float-right pl-5 pr-5">Delete</b-button>
            </div>
        </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    data() {
        return {
            task: ''
        }
    },
    computed: {
        ...mapState(['tasks'])
    },
    methods: {
        ...mapActions(['addTask'])
    }
};
</script>
