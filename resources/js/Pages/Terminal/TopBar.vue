<template>
    <div class="top-bar">
        <div class="left">
        </div>
        <div class="center"></div>
        <div class="right">
            <div class="minimize-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-dash-lg"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M0 8a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1z"
                    />
                </svg>
            </div>
            <div class="maximize-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-square-lg"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M0 0h16v16H0V0z"
                    />
                </svg>
            </div>
            <div class="close-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707 5.354 11.354a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    // Your component logic goes here
}
</script>

<style scoped>
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;

    .left,
    .center,
    .right {
        width: 33%;
    }

    .right {
        display: flex;
        justify-content: space-between;
        max-width: 100px;
    }

    svg {
        fill: #bbb;
    }

    .minimize-icon {
        cursor: pointer;
        display: flex;
        align-items: center;

        svg {
            height: 15px;
            width: 15px;
        }
    }

    .maximize-icon {
        cursor: pointer;
        display: flex;
        align-items: center;

        svg {
            height: 15px;
            width: 15px;
        }
    }

    .close-icon {
        cursor: pointer;
        display: flex;
        align-items: center;

        background-color: #bd7324;
        border-radius: 25px;

        svg {
            height: 35px;
            width: 35px;
        }
    }


}
</style>