<template>
  <div class="container my-5">
    <div class="card">
      <div class="card-body">
        <h1>Article {{ article.id }} info</h1>
        <h2 class="my-3">{{ article.title }}</h2>
        <p class="small">{{ article.author }}</p>
        <p>{{ article.body }}</p>
        <nuxt-link to="/blog" class="btn btn-primary mt-4 float-right"
          >Go back</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
    };
  },
  async created() {},
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error
  }) {
    try {
      const res = await axios.get(
        `http://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      const article = res.data;
      const author = await axios.get(
        `http://jsonplaceholder.typicode.com/users/${article.userId}`
      );
      article.author = author.data.name;

      return { article };
    } catch (err) {
      console.log(err);
      return { error: err };
    }
  }
};
</script>
