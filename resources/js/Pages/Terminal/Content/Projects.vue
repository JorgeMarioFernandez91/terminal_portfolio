<template>
    <div class="projects">
        <div
            v-for="project in projects"
            :key="project.title"
            class="project"
            @click="openProject(project.title)"
        >
            <div class="top">
                <div class="image">
                    <div class="title">
                        {{ project.title }}
                    </div>
                    <img
                        :src="project.image"
                        alt="project image"
                    />
                </div>
            </div>
            <div class="bottom">
                <div class="project-description">{{ project.description }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import obcImg from './obc.png';
import cookieClicker from './cookie-clicker.png';
export default {
    name: 'Projects',
    data() {
        return {
            projects: [
                {
                    title: 'Olive Branch Commerce',
                    description: 'This is a description of project 1. This is a description of project 1.',
                    image: obcImg,
                },
                {
                    title: 'FreeTTS',
                    description: 'This is a description of project 2. This is a description of project 2. This is a description of project 2.',
                    image: 'https://via.placeholder.com/400',
                },
                {
                    title: 'Start Up Clicker',
                    description: 'This is a description of project 3. This is a description of project 3. ',
                    image: cookieClicker,
                },
                {
                    title: 'Coffee Co',
                    description: 'This is a description of project 4',
                    image: 'https://via.placeholder.com/400',
                },

            ],
        };
    },
    methods: {
        openProject(title) {
            if (title === 'Coffee Co') {
                this.$inertia.visit('/coffeeco');
            }

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
.projects {
    padding: 20px;
    height: 100%;
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .project {
        width: 400px;
        height: 300px;
        border: 1px solid #656b82;
        border-radius: 5px;
        margin: 0 10px;
        cursor: pointer;

        .top {
            .image {
                border-bottom: 1px solid #656b82;
                display: flex;
                justify-content: center;
                align-items: center;
                filter: grayscale(1);

                .title {
                    position: absolute;
                    font-weight: bold;
                    z-index: 10;
                    color: white;
                    font-size: 20px;
                }

                img {
                    width: 100%;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    object-fit: cover;
                    width: 400px;
                    height: 200px;
                    opacity: 0.3;
                }

                /* hover to animate and reset grayscale of .image */
                &:hover {
                    filter: grayscale(0);
                    transition: filter 0.5s;

                    img {
                        opacity: 1;
                        transition: opacity 0.5s;
                    }
                }

                /* hove to animate and hide title */
                &:hover .title {
                    display: none;
                }
            }
        }

        .bottom {
            padding: 10px;
        }
    }
}
</style>