<template>
    <div class="bottom-bar">
        <div class="home">home</div>
        <div class="about">about</div>
        <div class="projects">projects</div>
        <div class="guest-book">guest-book</div>
        <div class="articles">articles</div>
    </div>
</template>

<script>
export default {
    name: 'BottomBar',
    // Your component logic goes here
}
</script>

<style
    lang="scss"
    scoped
>
.bottom-bar {
    display: flex;
    justify-content: space-between;
    width: 40%;
    color: white;
    padding: 10px 20px;
}
</style>