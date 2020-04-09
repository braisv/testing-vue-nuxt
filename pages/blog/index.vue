<template>
    <div class="container mt-5">
        <h1>ARTICLES:</h1>
        <div class="row">
            <div class="col-md-2" v-for="n in articles" :key="n.id"><nuxt-link :to="`/blog/${n.id}`">{{ n.title }}</nuxt-link></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articles: [
                { id: 1, title: '#1 Title Random', content: 'Random article' },
                { id: 2, title: '#2 Title Awesome', content: 'Awesome article' },
                { id: 3, title: '#3 Title Boring', content: 'Boring article' },
                { id: 4, title: '#4 Title Radiactive', content: 'Radiactive article' },
                { id: 5, title: '#5 Title Silly', content: 'Silly article' }
            ]
        }
    }
}
</script>