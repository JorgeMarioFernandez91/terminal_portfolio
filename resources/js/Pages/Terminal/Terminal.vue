<template>
    <div class="terminal">

        <TopBar />


        <BottomBar />
    </div>
</template>

<script>
import TopBar from './TopBar.vue';
import BottomBar from './BottomBar.vue';
export default {
    name: 'Terminal',

    components: {
        TopBar,
        BottomBar,
    },

    data() {
        return {
            // Your data properties here
        };
    },
    methods: {
        // Your methods here
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
.terminal {
    height: 800px;
    width: 1200px;

    background-color: rgb(85, 85, 85);
    border-radius: 10px;

    box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>