<template>
    <div class="home">
        <h1 class="name">Jorge Mario Fernandez</h1>
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
    .name {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        opacity: 0;
    }

    .desc {
        font-size: 1.5rem;
        padding: 0 100px;
        opacity: 0;
    }

    .name,
    .desc {
        text-align: center;
        color: white;
    }

    /* animate .name and .desc to fade in and move up */
    /*  ensure animation stays in final state */
    .name {
        animation: fadeInUp 1s ease-out forwards;
    }

    .desc {
        animation: fadeInUp 1s ease-out forwards 0.5s;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
            opacity: 0;
        }

        to {
            opacity: 1;
            transform: translateY(0);
            opacity: 1;
        }
    }
}
</style>