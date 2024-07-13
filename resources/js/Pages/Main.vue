<template>
    <div class="main">
        <!-- main is everything, background and fore-ground -->


        <!-- terminal -->
        <Terminal />
    </div>
</template>

<script>
import Terminal from './Terminal/Terminal.vue';


export default {
    name: 'Main',

    components: {
        Terminal,
    },



    data() {
        return {
            // Your data properties go here
        };
    },
    methods: {
        // Your methods go here
    },
    mounted() {
        // Code to run when the component is mounted
    },
};
</script>

<style
    lang="scss"
    scoped
>
.main {
    background-color: rgb(241, 241, 241);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>