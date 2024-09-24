<template>
    <div class="project">
        <h1>{{ title }}</h1>
        <img
            :src="img"
            alt="project image"
        />
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props: {
        title: String,
        description: String,
        img: String
    },
    data() {
        return {
        };
    }
};
</script>

<style scoped>
.project {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

p {
    font-size: 16px;
}
</style></template>