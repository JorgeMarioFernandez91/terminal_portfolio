<template>
    <div class="about">
        <div class="tab-container">
            <div
                class="tab personal"
                :class="{ active: activeTab === 'personal' }"
                @click="selectActiveTab('personal')"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                        d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"
                    />
                </svg>
                <span>Personal.vue</span>
            </div>

            <div
                class="tab"
                :class="{ active: activeTab === 'work' }"
                @click="selectActiveTab('work')"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                        d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"
                    />
                </svg>
                <span>Work.vue</span>
            </div>

            <div
                class="tab"
                :class="{ active: activeTab === 'gear' }"
                @click="selectActiveTab('gear')"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                        d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"
                    />
                </svg>
                <span>Gear.vue</span>
            </div>
        </div>

        <Personal v-if="activeTab === 'personal'" />
        <Work v-if="activeTab === 'work'" />
        <Gear v-if="activeTab === 'gear'" />
    </div>
</template>

<script>
import Personal from './Personal.vue';
import Work from './Work.vue';
import Gear from './Gear.vue';
export default {
    name: 'About',

    components: {
        Personal,
        Work,
        Gear,
    },

    data() {
        return {
            activeTab: 'personal',
        };
    },
    methods: {
        selectActiveTab(tab) {
            this.activeTab = tab;
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
.about {
    height: 100%;
    padding: 20px;

    .tab-container {
        display: flex;
        background-color: #383838;

        .tab {
            color: white;
            padding: 11px;
            width: 130px;
            border-right: 1px solid black;
            display: flex;
            align-items: center;
            cursor: pointer;

            svg {
                height: 30px;
                margin-right: 5px;
                fill: #3eaf7c;
            }

            &.personal {
                width: 145px;
            }

            &.active {
                background-color: #31664e;
            }
        }
    }
}
</style>