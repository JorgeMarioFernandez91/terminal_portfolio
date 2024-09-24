<template>
    <div class="projects">
        <div
            v-for="project in projects"
            :key="project.title"
            class="project"
            @click="openModal(project)"
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
        <div
            class="project-modal"
            v-if="projectModalOpen"
        >
            <div class="modal-body">
                <div class="header">

                    <span
                        class="close"
                        @click="projectModalOpen = false"
                    >&times;</span>
                </div>

                <img
                    :src="modalImg"
                    alt="project image"
                />
                <div class="title">{{ modalTitle }}</div>
                <div class="content">
                    <div class="expanded-description">{{ expandedDesc }}</div>
                    <div
                        class="preview"
                        @click="openLink(link)"
                    >Preview</div>
                    <div class="
                        stack">Stack</div>
                    <div
                        v-for="(value, key) in stack"
                        :key="key"
                        class="item"
                    >
                        <div class="link">

                            <a
                                :href="value[1]"
                                target="_blank"
                            >{{ value[0] }}</a>
                        </div>
                        <div class="info"> - {{ value[2] }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import obcImg from './obc.png';
import cookieClicker from './cookie-clicker.png';
import coffeeRun from './coffee-run-website.png';
import freetts from './freetts.png';
export default {
    name: 'Projects',
    data() {
        return {
            projectModalOpen: false,
            modalTitle: '',
            modalDescription: '',
            modalImg: '',
            expandedDesc: '',
            stack: {},
            projects: [
                {
                    title: 'Olive Branch Commerce',
                    description: 'A website dedicated to hosting justice and equity conscious businesses. Developed in Vue, Laravel, and MySQL.',
                    image: obcImg,
                    expandedDesc: 'A website dedicated to hosting justice and equity conscious businesses. Developed in Vue, Laravel, and MySQL. The initial idea was to create something that would have a positive and lasting change, and I believe that I have helped to accomplish this and more!',
                    stack: {
                        Vue: ['Vue', 'https://vuejs.org/', 'Vue.js is a progressive JavaScript framework for building user interfaces.'],
                        Laravel: ['Laravel', 'https://laravel.com/', 'Laravel is a web application framework with expressive, elegant syntax.'],
                        MySQL: ['MySQL', 'https://www.mysql.com/', 'MySQL is an open-source relational database management system.'],
                        PrimeVue: ['PrimeVue', 'https://www.primefaces.org/primevue/', 'PrimeVue is a UI Component Library for Vue.js.'],
                    },
                    link: 'https://olivebranchcommerce.ca/',
                },
                {
                    title: 'Coffee Co',
                    description: 'A concept for a coffee show website. Developed in Vue, Laravel, and MySQL.',
                    image: coffeeRun,
                    expandedDesc: 'A concept for a coffee show website. Developed in Vue, Laravel, and MySQL. The initial idea was to create something that would have a positive and lasting change, and I believe that I have helped to accomplish this and more!',
                    stack: {
                        Vue: ['Vue', 'https://vuejs.org/', 'Vue.js is a progressive JavaScript framework for building user interfaces.'],
                        Laravel: ['Laravel', 'https://laravel.com/', 'Laravel is a web application framework with expressive, elegant syntax.'],
                        MySQL: ['MySQL', 'https://www.mysql.com/', 'MySQL is an open-source relational database management system.'],
                        PrimeVue: ['PrimeVue', 'https://www.primefaces.org/primevue/', 'PrimeVue is a UI Component Library for Vue.js.'],
                    },
                    link: '/coffeeco',
                },
                {
                    title: 'FreeTTS',
                    description: 'A free text-to-speech service. Developed in React and Netlify. The idea was to allow content creators a way to convert their poetic prose into spoken word. This could also benefit those who prefer to have AI voices over thie content.',
                    image: freetts,
                    expandedDesc: 'A free text-to-speech service. Developed in React and Netlify. The idea was to allow content creators a way to convert their poetic prose into spoken word. This could also benefit those who prefer to have AI voices over thie content.',
                    stack: {
                        React: ['React', 'https://reactjs.org/', 'React is a JavaScript library for building user interfaces.'],
                        Netlify: ['Netlify', 'https://www.netlify.com/', 'Netlify is a web developer platform that multiplies productivity.'],
                    },
                    link: 'https://freetts.com/',
                },
                {
                    title: 'Start Up Clicker',
                    description: 'A fun way to spend your time. Developed in React',
                    image: cookieClicker,
                    expandedDesc: 'A concept for a coffee show website. Developed in Vue, Laravel, and MySQL. The initial idea was to create something that would have a positive and lasting change, and I believe that I have helped to accomplish this and more!',
                    stack: {
                        React: ['React', 'https://reactjs.org/', 'React is a JavaScript library for building user interfaces.'],
                        Netlify: ['Netlify', 'https://www.netlify.com/', 'Netlify is a web developer platform that multiplies productivity.'],
                    },
                    link: 'https://startupclicker.com/',
                },
            ],
        };
    },
    methods: {
        openProject(title) {

        },
        openLink(title) {
            window.open(title, '_blank');
        },
        openModal(project) {
            this.projectModalOpen = true;
            this.modalTitle = project.title;
            this.modalDescription = project.description;
            this.modalImg = project.image;
            this.expandedDesc = project.expandedDesc;
            this.stack = project.stack;
            this.link = project.link;
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

            /* overflow ellipses */
            .project-description {
                /* height: 80px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis; */

                display: -webkit-box;
                max-width: 400px;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    .project-modal {
        position: absolute;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.63);
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .modal-body {
            border: 1px solid rgb(105, 105, 105);
            background-color: #2d3142;
            padding: 20px;
            border-radius: 5px;
            height: 500px;
            width: 500px;
            overflow-y: auto;
            height: 70%;
            width: 80%;
            max-width: 700px;
            max-height: 800px;
            padding-top: 0;

            .header {
                display: flex;
                justify-content: end;

                .close {
                    font-size: 30px;
                    cursor: pointer;
                }
            }

            .title {
                font-size: 25px;
                margin-bottom: 20px;
                font-weight: bold;
                margin-top: 20px;
            }

            .description {
                margin-top: 20px;
            }

            .preview {
                font-weight: bold;
                cursor: pointer;
                font-weight: bold;
                text-decoration: underline;
            }

            .stack {
                margin: 10px 0;
                font-weight: bold
            }

            .item {
                display: flex;
                margin-left: 15px;
                margin-bottom: 10px;

                .link {
                    margin-right: 10px;
                    text-decoration: underline;
                    font-weight: bold;
                }
            }

            img {
                width: 100%;
                height: 200px;
                border-radius: 5px;
                object-fit: cover;
            }

        }
    }

}
</style>