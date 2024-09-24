<template>
    <div class="locations">
        <Navbar :isMobile="isMobile" />
        <div class="banner-container">
            <div class="header"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMobile: false,
        };
    },
    mounted() {
        // check if screen is mobile
        if (window.innerWidth < 1200) {
            this.isMobile = true;
        }
        // detect screen size change and set isMobile to true if screen size is less than 1200px
        window.addEventListener('resize', () => {
            if (window.innerWidth < 1200) {
                this.isMobile = true;
            } else {
                this.isMobile = false;
            }
        });
    },
};
</script>

<style
    lang="scss"
    scoped
>
.locations {
    .banner-container {
        .header {
            background-image: url('/images/coffee-co-banner.jpg');
            background-size: cover;
            background-position: center;
            height: 400px;
            width: 100%;
        }
    }
}
</style>