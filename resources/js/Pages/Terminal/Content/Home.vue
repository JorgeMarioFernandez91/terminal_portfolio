<template>
    <div class="home">
        <h1 class="name">Jorge "Mario" Fernandez</h1>
        <div class="desc">I provide individuals, businesses, and everyone in between a digital platform to showcase
            their products and services!</div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
        };
    },
    methods: {
    },
    mounted() {
    },
};
</script>

<style
    lang="scss"
    scoped
>
.home {
    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;

    }

    .desc {
        font-size: 1.5rem;
        padding: 0 100px;
    }

    h1,
    .desc {
        text-align: center;
        color: white;

    }
}
</style>