<template>
    <div
        class="coffeeco"
        :class="productModalOpen ? 'obfuscate' : ''"
    >
        <div class="banner-container">
            <Navbar :isMobile="isMobile" />

            <div class="content-container">
                <div class="subtitle">For Those On The Go</div>
                <div class="title">Fresh Roasted Coffee</div>
                <div class="subtitle">Get A Head Start On The Day</div>
                <div class="button">SHOP NOW</div>
            </div>
        </div>
        <div class="featured">
            <div class="title">FEATURED COFFEE</div>
            <div class="content-container">
                <!-- v-for each product in products -->
                <div
                    class="product"
                    v-for="product in products"
                    :key="product.name"
                    @click="openProductModal(product)"
                >
                    <img
                        :src="product.image"
                        :alt="product.name"
                    />
                    <div class="name">{{ product.name }}</div>
                    <div class="price">${{ product.price.toFixed(2) }}</div>
                    <div class="name-fade-in">{{ product.name }}</div>
                    <div class="ingredients-fade-in">{{ product.ingredients }}</div>
                </div>
            </div>
        </div>
        <div class="info">
            <div class="content-container">
                <!-- vfor each item in items -->
                <div
                    class="item"
                    v-for="item in items"
                    :key="item.title"
                >
                    <div class="left"><img
                            :src="item.image"
                            :alt="item.title"
                        /></div>
                    <div class="right">
                        <div class="title">{{ item.title }}</div>
                        <div class="description">
                            <div v-html="item.description" />
                        </div>
                        <div class="button">
                            {{ item.button }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="offerings">
            <div class="content-container">
                <div
                    class="offering"
                    v-for="offering in offerings"
                    :key="offering.label"
                >
                    <img
                        :src="offering.image"
                        :alt="offering.label"
                    />
                    <div class="label">{{ offering.label }}</div>
                    <div class="hover-label">{{ offering.hoverLabel }}</div>
                </div>
            </div>
        </div>
        <hr class="first">
        <div class="footer">
            <div class="top-container">
                <div class="left">
                    <div class="company">
                        <p class="title">Company</p>
                        <ul>
                            <li>OUR BRAND</li>
                            <li>DIRECT TRADE</li>
                            <li>CAREERS</li>
                        </ul>
                    </div>
                    <div class="more">
                        <p class="title">More</p>
                        <ul>
                            <li>GIFT CARDS</li>
                            <li>CONTACT</li>
                            <li>SITE MAP</li>
                        </ul>
                    </div>
                    <div class="learn">
                        <p class="title">Learn</p>
                        <ul>
                            <li>LOCATIONS</li>
                            <li>BREW GUIDES</li>
                            <li>HELP CENTER</li>
                        </ul>
                    </div>
                    <div class="whole-sale">
                        <p class="title">Wholesale</p>
                        <ul>
                            <li>PARTNER WITH US</li>
                            <li>PARTNER WEBSITE</li>
                            <li>CORPORATE GIFTING</li>
                        </ul>
                    </div>
                </div>
                <div class="right">
                    <div class="content-container">
                        <div class="desc">Get the latest from Coffee Run Roasters. Subscribe to our newsletter below.
                        </div>
                        <div class="input-container">
                            <input
                                type="text"
                                placeholder="Email Address"
                            />
                            <div class="button">JOIN</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bottom-container">
                <hr class="second">
                <div class="content-container">
                    <div class="left">&copy;2024 COFFEE RUN ROASTERS</div>
                    <div class="right">
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    </div>
    <div
        class="product-modal"
        v-if="productModalOpen"
        @mouseleave="mouseOutsideModal = true"
        @mouseenter="mouseOutsideModal = false"
    >
        <div class="left">
            <div class="image">
                <img
                    :src="productSelected.image"
                    :alt="productSelected.name"
                />
            </div>
        </div>
        <div class="right">
            <div class="header">
                <div class="name">{{ productSelected.name }}</div>
                <!-- <div class="price">${{ productSelected.price.toFixed(2) }}</div> -->
            </div>
            <div class="content">
                <div>{{ productSelected.ingredients }}</div>
            </div>
            <div class="bottom">
                <div class="quantity-select">
                    <div class="quantity">{{ productSelected.quantity ? productSelected.quantity : 0 }}</div>
                    <div class="amount-buttons">
                        <div
                            class="plus"
                            @click="addToSelectedProduct"
                        >+</div>
                        <div
                            class="minus"
                            @click="subtractFromSelectedProduct"
                        >-</div>
                    </div>
                </div>
                <div
                    class="add-to-card"
                    @click="addToCart(productSelected)"
                >ADD TO CARD</div>
            </div>
        </div>
    </div>
</template>

<script>
import chaimberlain from './chaimberlain.png';
import uzina from './uzina.png';
import anglers from './anglers.png';
import bag from './bag.jpg';
import pourCups from './pour-cups.jpg';
import grounds from './grounds.jpg';
import Navbar from './Navbar.vue';
export default {
    name: 'CoffeeCo',

    components: {
        Navbar
    },

    data() {
        return {
            isMobile: false,
            productModalOpen: false,
            productSelected: {},
            mouseOutsideModal: false,
            products: [
                {
                    name: 'Anglers',
                    image: anglers,
                    price: 22.50,
                    ingredients: 'Rasberyy Lemonade, Black Cherry, Juice'
                },
                {
                    name: 'Chaimberlain',
                    image: chaimberlain,
                    price: 22.50,
                    ingredients: 'Macadamia, Molases, Creamy',
                },
                {
                    name: 'Uzina',
                    image: uzina,
                    price: 23.00,
                    ingredients: 'Strawberry, Grapes, Creamy',
                },
            ],
            items: [
                {
                    title: 'COFFEE SUBSCRIPTIONS',
                    image: bag,
                    description: `Our PREPAID and PAY-AS-YOU-GO  subscriptions are easy to create and flexible to fit your coffee  routine. Select your favourite coffees, bag quantity, delivery frequency  and we will take care of the rest! <br><br>Each subscription lets you choose from our  year-round signature blends, seasonal single origins or the roaster can  decide for you. We will deliver right to your door when you need it. <br><br>Never run out of great coffee again!`,
                    button: 'CREATE YOUR SUBSCRIPTION'
                },
                {
                    title: 'JOIN A TASTING EVENT',
                    image: pourCups,
                    description: `Want to develop your coffee appreciation? Join us for Coffee Tasting  & Palate Development – a fun and casual event that will take you on a  multi-sensory journey.`,
                    button: 'RSVP TODAY'
                },
                {
                    title: 'OUR MISSION',
                    image: grounds,
                    description: `More than just ‘great coffee’... every bag of Pilot Coffee Roasters  beans represents a global community of dedicated professionals,  specialized skill and a lot of hard work. What drives us is our passion.  What guides us is our commitment to quality, relationships and  innovation.`,
                    button: 'LEARN MORE'
                }
            ],
            offerings: [
                {
                    image: bag,
                    label: 'LOCATIONS',
                    hoverLabel: 'FIND US'
                },
                {
                    image: pourCups,
                    label: 'BREW GUIDES',
                    hoverLabel: 'LEARN HOW'
                },
                {
                    image: grounds,
                    label: 'WHOLE SALE',
                    hoverLabel: 'PARTNER WITH US'
                },
                {
                    image: bag,
                    label: 'TECH SERVICES',
                    hoverLabel: 'REPAIRS'
                }
            ]
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

        // retrieve cached items from local storage
        const items = JSON.parse(localStorage.getItem('basketItems'));
        if (items) {
            this.$store.commit('setBasketItems', items);
        }

        // detect mouse click, if mouseoutsideModal is true, close modal
        window.addEventListener('click', (event) => {
            if (this.mouseOutsideModal) {
                this.mouseOutsideModal = false;
                this.productModalOpen = false;
            }
        });
    },
    methods: {
        addToCart(product) {

            // close modal
            this.productModalOpen = false;

            this.productSelected = {};

            if (!product.quantity || product.quantity === 0) return;

            // get store items
            const items = this.$store.getters.basketItems;

            // check if product is already in store
            const productInStore = items.find(item => item.name === product.name);

            if (productInStore) {
                // increment quantity
                this.$store.commit('incrementQuantity', product);
                return;
            }

            // add to store card
            this.$store.commit('addToBasket', { name: product.name, price: product.price, image: product.image, quantity: product.quantity });
        },
        openProductModal(product) {
            this.productSelected = product;
            this.productModalOpen = true;
        },
        addToSelectedProduct() {
            // add new quantity object field to selected product
            if (!this.productSelected.quantity) {
                this.productSelected.quantity = 1;
                this.$forceUpdate();
                return;
            }

            this.productSelected.quantity += 1;
            this.$forceUpdate();
        },
        subtractFromSelectedProduct() {
            // if there is not quantity then there are not items to subtract so return
            if (!this.productSelected.quantity) return;
            if (this.productSelected.quantity === 1) return;
            this.productSelected.quantity -= 1;
            this.$forceUpdate();
        }
    },

};
</script>

<style
    lang="scss"
    scoped
>
.coffeeco {
    background-color: #FAF6EF;

    &.obfuscate {
        filter: blur(3px);
    }

    .banner-container {
        /* background image using  ben-stern-wQNHTxEhIr8-unsplash.jp*/
        background-image: url('ben-stern-wQNHTxEhIr8-unsplash-darker.jpg');
        background-size: cover;
        background-position: center;
        /* darken background image */
        background-color: rgba(0, 0, 0, 0.5);

        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        color: white;

        background-repeat: no-repeat;
        height: 100vh;

        justify-content: space-between;



        .content-container {
            margin: auto;
            margin-right: 40px;
            text-align: right;

            .title {
                font-size: 54px;
                font-weight: bold;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            }

            .subtitle {
                font-size: 24px;
                font-weight: bold;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            }

            .button {
                border: 2px solid white;
                padding: 10px 20px;
                margin-left: auto;
                font-weight: bold;
                background-color: #0000004d;
                color: white;
                text-align: center;
                margin-top: 50px;
                width: fit-content;
                font-size: 22px;
                cursor: pointer;

                &:hover {
                    background-color: #8d8d8d;
                    transition: background-color 0.5s;
                }
            }
        }
    }

    .featured {
        padding: 40px 20px;

        .title {
            font-size: 36px;
            text-align: center;
            margin-bottom: 20px;
            margin: auto;
            margin-bottom: 40px;
        }

        .content-container {
            display: flex;
            justify-content: space-between;
            margin: auto;
            width: 1300px;

            @media (max-width: 1200px) {
                width: auto;
                justify-content: center;
                flex-wrap: wrap;
            }

            @media (min-width: 1200px) and (max-width: 1700px) {
                width: 1100px;

            }

            @media (min-width: 1700px) {
                width: 1500px;
            }

            .product {
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                border: 1px solid #B1B1B1;
                width: 400px;

                img {
                    width: 230px;
                    height: 230px;
                    object-fit: cover;
                }

                .name,
                .price {
                    font-weight: bold;
                    margin-top: 10px;
                }

                .name {
                    font-size: 24px;
                }

                .price {
                    font-size: 20px;
                }

                .name-fade-in {
                    position: absolute;
                    font-size: 24px;
                    margin-top: 120px;
                    opacity: 0;
                }

                .ingredients-fade-in {
                    position: absolute;
                    font-size: 16px;
                    margin-top: 160px;
                    opacity: 0;
                }

                &:first-child,
                &:last-child,
                &:nth-child(2) {
                    padding: 10px;
                }

                /* first and last product background color: white */
                &:first-child,
                &:last-child {
                    background-color: white;
                }

                &:first-child {

                    &:hover {
                        background-color: #b81b57;
                        transition: background-color 2s;
                    }
                }

                /* second product color: #e2e2e2 */
                &:nth-child(2) {
                    background-color: #e2e2e2;

                    &:hover {

                        background-color: #17c5c5;
                        transition: background-color 2s;
                    }
                }

                &:last-child {

                    /* hover background color animate in */
                    &:hover {
                        background-color: #c2c517;
                        transition: background-color 2s;
                    }
                }

                opacity: 1;

                &:hover {

                    img,
                    .name,
                    .price {
                        transition: opacity 0.2s;
                        opacity: 0;
                    }

                    .name-fade-in,
                    .ingredients-fade-in {
                        transition: opacity 1s;
                        opacity: 1;
                    }

                }
            }
        }
    }

    .info {
        padding: 50px 20px;
        background-color: #faf6ef;

        .content-container {
            width: 1300px;
            margin: auto;

            .item {
                display: flex;
                justify-content: space-between;
                margin-bottom: 100px;

                /* flip 2nd child */
                &:nth-child(2) {
                    flex-direction: row-reverse;
                }

                /* last child margin-bottom: 0 */
                &:last-child {
                    margin-bottom: 0;
                }

                .left {
                    width: 50%;
                    padding-right: 20px;

                    img {
                        width: 100%;
                        height: 400px;
                        object-fit: cover;
                    }
                }

                .right {
                    width: 50%;
                    padding-left: 20px;

                    .title {
                        font-size: 24px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }

                    .description {
                        font-size: 20px;
                    }

                    .button {
                        margin-top: 20px;
                        border: 1px solid #B1B1B1;
                        color: #636363;
                        width: fit-content;
                        padding: 10px 20px;
                        text-align: center;
                        background-color: white;
                        cursor: pointer;

                        &:hover {
                            transition: background-color 0.5s;
                            background-color: #dfdfdf;
                        }
                    }
                }
            }

            @media (max-width: 1200px) {
                width: auto;

                .item {
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 50px;

                    &:nth-child(2) {
                        flex-direction: column;
                    }

                    .left {
                        margin-bottom: 20px;
                    }

                    .left,
                    .right {
                        padding: 0;
                        width: 100%;
                    }
                }
            }

            @media (min-width: 1200px) and (max-width: 1700px) {
                width: 1100px;

            }

            @media (min-width: 1700px) {
                width: 1500px;
            }
        }
    }

    .offerings {
        padding: 50px 20px;
        background-color: #faf6ef;

        .content-container {
            display: flex;
            justify-content: space-between;
            width: 1300px;
            margin: auto;

            .offering {
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                text-align: center;
                cursor: pointer;
                align-items: center;

                background-color: rgb(255, 227, 67);

                img {
                    width: 300px;
                    height: 350px;
                    object-fit: cover;
                }

                .label {
                    padding-top: 10px;
                    font-size: 22px;
                    background-color: #faf6ef;
                    width: 100%;
                }

                .hover-label {
                    margin-top: 160px;
                    color: black;
                    font-size: 24px;
                    font-weight: bold;
                    position: absolute;
                    opacity: 0;
                    /* background-color: #faf6ef; */
                }

                &:hover {
                    img {
                        transition: opacity 0.4s;
                        opacity: 0;
                    }

                    .hover-label {
                        /* transition background color to red */
                        transition: background-color 0.5s;
                        background-color: rgb(255, 227, 67);
                        transition: opacity 1.2s;
                        opacity: 1;

                    }
                }
            }

            @media (max-width: 1200px) {
                width: auto;
                flex-direction: column;

                .offering {
                    display: flex;
                    margin-bottom: 20px;

                    img {
                        width: 100%;
                    }
                }
            }

            @media (min-width: 1200px) and (max-width: 1700px) {
                width: 1100px;

                .offering {
                    img {
                        width: 250px;
                    }
                }

            }

            @media (min-width: 1700px) {
                width: 1500px;
            }
        }
    }

    hr {
        border: 1px solid #B1B1B1;
    }

    hr.second {
        width: 90%;
        margin: auto;
    }

    .footer {
        padding: 50px 20px;
        background-color: #faf6ef;
        text-align: center;

        .top-container {
            display: flex;
            width: 1300px;
            margin: auto;
            margin-bottom: 50px;

            .left {
                width: 50%;
                display: flex;
                text-align: left;
                flex-wrap: wrap;

                div {
                    width: 50%;
                    margin-bottom: 10px;

                    .title {
                        font-size: 24px;
                        margin-bottom: 5px;
                        color: gray;
                    }

                    ul {
                        font-weight: bold;
                        font-size: 24px;

                        li {
                            margin-bottom: 7px;
                            cursor: pointer;

                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }

            .right {
                display: flex;
                align-items: center;
                font-size: 22px;

                .desc {
                    margin-bottom: 20px;
                    text-align: left;
                }

                .input-container {
                    display: flex;

                    input {
                        font-size: 24px;
                        height: 80px;
                        padding: 10px 30px;
                    }

                    .button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 10px;
                        border: 1px solid gray;
                        border-left: none;
                        width: 130px;
                        cursor: pointer;

                        &:hover {
                            background-color: #dfdfdf;
                            transition: background-color 0.5s;
                        }
                    }
                }
            }

            @media (max-width: 800px) {
                flex-direction: column;
                width: auto;

                .left {
                    margin-bottom: 20px;
                    flex-direction: column;
                }

                .right {

                    input {
                        font-size: 16px;
                        height: 60px;
                        padding: 10px 10px;
                        width: 100%;
                    }
                }
            }

            @media (max-width: 1200px) {
                flex-direction: column;
                width: auto;

                .left {
                    margin-bottom: 20px;
                }
            }

            @media (min-width: 1200px) and (max-width: 1500px) {
                width: 1100px;

            }

            @media (min-width: 1500px) {
                width: 1500px;
            }
        }

        .bottom-container {

            .content-container {
                display: flex;
                padding: 20px 5%;
                justify-content: space-between;
                font-size: 22px;

                ul {
                    display: flex;

                    li {
                        margin-left: 20px;
                        cursor: pointer;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }

            @media (max-width: 400px) {

                .content-container {
                    flex-direction: column;
                    font-size: 16px;

                    ul {
                        flex-direction: column;

                        li {
                            margin: 10px 0 0 0;
                        }
                    }
                }
            }
        }

    }
}

.product-modal {
    filter: brightness(100%);
    background-color: white;
    border: 1px solid #cbcbcb;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 5px;
    display: flex;

    .left {
        width: 50%;
        padding-right: 20px;

        .image {
            img {
                width: 100%;
                height: 400px;
                object-fit: cover;
            }
        }
    }

    .right {
        width: 50%;
        padding-left: 20px;

        .header {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 20px;

            .name {
                font-size: 24px;
                font-weight: bold;
            }

            .price {
                font-size: 20px;
                color: gray;
            }
        }

        .content {
            font-size: 20px;
            margin-bottom: 20px;
        }

        .bottom {
            display: flex;
            justify-content: space-between;
            position: fixed;
            bottom: 20px;
            width: 270px;

            .quantity-select {
                display: flex;
                align-items: center;

                .quantity {
                    font-size: 20px;
                    font-weight: bold;
                    margin-right: 10px;

                    padding: 15px;
                    background-color: rgb(214, 214, 214);
                    width: 70px;
                    height: 70px;
                    height: 70px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .amount-buttons {
                    display: flex;
                    flex-direction: column;
                    text-align: center;

                    div {
                        font-size: 20px;
                        font-weight: bold;
                        cursor: pointer;
                        width: 30px;
                        background-color: rgb(204, 204, 204);

                        &:hover {
                            background-color: #ffcc00;
                        }
                    }

                    .plus {
                        margin-bottom: 10px;
                    }

                }
            }

            .add-to-card {
                padding: 10px 20px;
                background-color: #ffcc00;
                cursor: pointer;

                display: flex;
                align-items: center;

                &:hover {
                    background-color: #ffdb4a;
                    transition: background-color 0.5s;
                }
            }
        }
    }
}
</style>