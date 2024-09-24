<template>
    <div class="bottom-bar">
        <div class="repo">
            <div
                class="master"
                @click="navTo('master')"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                        d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 87.8c18.8-10.9 40.7-17.1 64-17.1l96 0c35.3 0 64-28.7 64-64l0-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 6.7c0 70.7-57.3 128-128 128l-96 0c-35.3 0-64 28.7-64 64l0 6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-6.7 0-198.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
                    />
                </svg>
                master
            </div>
        </div>
        <div class="links-misc">
            <div class="links">
                <div
                    class="home"
                    :class="{ active: view === 'home' }"
                    @click="switchView('home')"
                >home</div>
                <div
                    class="about"
                    :class="{ active: view === 'about' }"
                    @click="switchView('about')"
                >about</div>
                <div
                    class="projects"
                    :class="{ active: view === 'projects' }"
                    @click="switchView('projects')"
                >projects</div>
                <div
                    class="guest-book"
                    :class="{ active: view === 'guest-book' }"
                    @click="switchView('guest-book')"
                >guest-book</div>
                <div
                    class="articles"
                    :class="{ active: view === 'articles' }"
                    @click="switchView('articles')"
                >articles</div>
            </div>
            <div class="misc">
                <div
                    class="tools"
                    @mouseenter="openToolPopover()"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6 .9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"
                        />
                    </svg>
                </div>
                <div
                    class="notifications"
                    @mouseover="openNotificationPopover()"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            d="M224 512c35.3 0 64-28.7 64-64H160c0 35.4 28.7 64 64 64zm215.4-149.7c-19.3-20.8-55.5-52-55.5-154.3 0-77.7-54.5-139.9-127.9-155.2V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v20.8C118.6 68.1 64.1 130.3 64.1 208c0 102.3-36.2 133.5-55.5 154.3-6 6.5-8.7 14.2-8.6 21.7 .1 16.4 13 32 32.1 32h383.8c19.1 0 32-15.6 32.1-32 .1-7.6-2.6-15.3-8.6-21.7z"
                        />
                    </svg>
                </div>
            </div>
        </div>

        <!-- tools popover describing the use of javascript, php, laravel -->
        <div
            v-if="toolPopoverVisible"
            class="pop-over tool"
        >
            <div class="vue">Vue.js <span
                    class="more-info"
                    @click="navTo('vue')"
                >learn more</span></div>
            <div class="laravel">Laravel <span
                    class="more-info"
                    @click="navTo('laravel')"
                >learn more</span></div>
            <div class="php">PHP <span
                    class="more-info"
                    @click="navTo('php')"
                >learn more</span></div>
        </div>
        <!-- notification popover -->
        <div
            v-if="notificationPopoverVisible"
            class="pop-over notification"
        >
            <div class="notification">No new notifications</div>
        </div>

    </div>
</template>

<script>



export default {
    name: 'BottomBar',

    data() {
        return {
            view: 'home',
            toolPopoverVisible: false,
            notificationPopoverVisible: false,
        };
    },

    methods: {
        switchView(view) {
            this.view = view;
            this.$emit('switchView', view);
        },
        openToolPopover() {
            this.toolPopoverVisible = true;
            this.notificationPopoverVisible = false;

            setTimeout(() => {
                this.toolPopoverVisible = false;
            }, 4000);
        },
        openNotificationPopover() {
            this.notificationPopoverVisible = true;
            this.toolPopoverVisible = false;

            setTimeout(() => {
                this.notificationPopoverVisible = false;
            }, 4000);
        },
        navTo(toolName) {
            if (toolName === 'vue') {
                window.open('https://vuejs.org/', '_blank');
            } else if (toolName === 'laravel') {
                window.open('https://laravel.com/', '_blank');
            } else if (toolName === 'php') {
                window.open('https://www.php.net/', '_blank');
            } else if (toolName === 'master') {
                window.open('https://github.com/JorgeMarioFernandez91/terminal_portfolio', '_blank');
            }
        },
    }
}
</script>

<style
    lang="scss"
    scoped
>
.bottom-bar {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;
    padding: 10px 20px;

    .repo {
        margin-bottom: 5px;

        .master {
            cursor: pointer;
            padding: 0 10px;
            display: flex;
            width: 100px;

            svg {
                height: 20px;
                fill: white;
                margin-right: 5px;
            }

            &:hover {

                svg {
                    fill: #31664e
                }
            }
        }
    }

    .links-misc {
        display: flex;
        justify-content: space-between;

        .links {
            display: flex;
            justify-content: space-between;

            div {
                cursor: pointer;
                padding: 0 20px;
                border-radius: 2px;
            }

            .active {
                background-color: white;
                color: black;
            }
        }

        .misc {
            display: flex;
            flex-direction: row;

            svg {
                fill: white;
                height: 20px;
                cursor: pointer;
                padding: 0 10px;
                cursor: pointer;
            }
        }
    }

    .pop-over {
        background-color: #2d3142;
        position: absolute;
        width: 180px;
        right: 125px;
        bottom: 90px;
        border: 2px solid #31664e;
        border-radius: 5px;

        .vue,
        .laravel,
        .php,
        .notification {
            display: flex;
            justify-content: space-between;
            padding: 5px 10px;
            color: white;

            .more-info {
                color: #31664e;
                cursor: pointer;
                font-weight: bold;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        &.notification {
            right: 88px;
            width: auto;
        }
    }

}
</style>