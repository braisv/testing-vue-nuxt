<template>
  <div class="container my-5">
    <h1>Vuex</h1>
            <div class="card my-5" v-for="n in tasks" :key="n.id">
            <div class="card-body">
                <nuxt-link :to="`/task/${n.id}`"><h2>{{n.name}}</h2></nuxt-link>
                <p>This is the task number {{tasks.indexOf(n)+1}}</p>
            </div>
        </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(['tasks'])
    }
};
</script>
