<template>
    <div class="main">
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
.main {
    background-color: rgb(241, 241, 241);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>