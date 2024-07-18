<template>
    <div class="terminal">

        <TopBar />

        <Home v-if="view === 'home'" />
        <About v-if="view === 'about'" />
        <Projects v-if="view === 'projects'" />
        <Guestbook v-if="view === 'guest-book'" />
        <Articles v-if="view === 'articles'" />

        <BottomBar @switchView="switchView" />
    </div>
</template>

<script>
import TopBar from './TopBar.vue';
import BottomBar from './BottomBar.vue';
import Home from './Content/Home.vue';
import About from './Content/About/About.vue';
import Projects from './Content/Projects.vue';
import Guestbook from './Content/GuestBook.vue';
import Articles from './Content/Articles.vue';

export default {
    name: 'Terminal',

    components: {
        TopBar,
        BottomBar,
        Home,
        About,
        Projects,
        Guestbook,
        Articles,
    },

    data() {
        return {
            view: 'about',
        };
    },
    methods: {
        switchView(view) {
            this.view = view;
        },
    },
    mounted() {
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

    background-color: #2d3142;
    border-radius: 10px;

    box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>