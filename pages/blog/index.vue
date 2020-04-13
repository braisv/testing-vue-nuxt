<template>
    <div class="container mt-5">
        <h1>ARTICLES:</h1>
        <!-- <div class="row">
            <div class="col-md-2" v-for="n in articles" :key="n.id"><nuxt-link :to="`/blog/${n.id}`">{{ n.title }}</nuxt-link></div>
        </div> -->
        <div class="card my-5" v-for="n in articles" :key="n.id">
            <div class="card-body">
                <nuxt-link :to="`/blog/${n.id}`"><h2>{{n.title}}</h2></nuxt-link>
                <p>{{n.body}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            articles: [
                // { id: 1, title: '#1 Title Random', content: 'Random article' },
                // { id: 2, title: '#2 Title Awesome', content: 'Awesome article' },
                // { id: 3, title: '#3 Title Boring', content: 'Boring article' },
                // { id: 4, title: '#4 Title Radiactive', content: 'Radiactive article' },
                // { id: 5, title: '#5 Title Silly', content: 'Silly article' }
            ]
        }
    },
    async created() {
        try {
            const res = await axios.get('http://jsonplaceholder.typicode.com/posts?_limit=10')
            this.articles = res.data
        } catch (err) {
            console.log(err)
        }
    }
}
</script>