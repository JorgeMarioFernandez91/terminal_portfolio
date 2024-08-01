<template>

    <div class="products">
        <Navbar :isMobile="isMobile" />
        <div class="banner-container">
            <div class="header">
                On Your Marks | Coffee, Clothing & More
            </div>
        </div>
        <div class="content">
            <div class="products-container">

                <template
                    v-for="product in products"
                    :key="product.name"
                >
                    <div
                        class="product"
                        @click="openProductModal(product)"
                    >
                        <img
                            :src="product.image"
                            alt="product image"
                        />
                        <div class="product-info">
                            <div class="product-name">
                                {{ product.name }}
                            </div>
                            <div class="product-price">
                                ${{ product.price }}
                            </div>
                            <!-- <div class="product-ingredients">
                            {{ product.ingredients }}
                        </div> -->
                        </div>
                    </div>

                </template>

            </div>

        </div>
        <div class="footer"></div>
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
import Navbar from './Navbar.vue';
import chaimberlain from './chaimberlain.png';
import uzina from './uzina.png';
import anglers from './anglers.png';
import catMug from './cat-mug.png';
import espressoMaker from './espresso-maker.png';
import hoodieBlack from './hoodie-black.png';
import hoodieGreen from './hoodie-green.png';
import hoodiePink from './hoodie-pink.png';
import strainerPot from './strainer-pot.png';
export default {
    name: 'Products',
    components: {
        Navbar,
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
                {
                    name: 'Hoodie Black',
                    image: hoodieBlack,
                    price: 35.00,
                    ingredients: 'Cotton, Polyester, Spandex',
                },
                {
                    name: 'Hoodie Green',
                    image: hoodieGreen,
                    price: 35.00,
                    ingredients: 'Cotton, Polyester, Spandex',
                },
                {
                    name: 'Hoodie Pink',
                    image: hoodiePink,
                    price: 35.00,
                    ingredients: 'Cotton, Polyester, Spandex',
                },
                {
                    name: 'Cat Mug',
                    image: catMug,
                    price: 12.00,
                    ingredients: 'Naturally sourced materials',
                },
                {
                    name: 'Espresso Maker',
                    image: espressoMaker,
                    price: 45.00,
                    ingredients: 'Good as it sounds',
                },

                {
                    name: 'Strainer Pot',
                    image: strainerPot,
                    price: 25.00,
                    ingredients: 'Stainless Steel, Plastic, Rubber',
                },

            ],
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
.products {
    background-color: #FAF6EF;

    .banner-container {
        background-image: url('sprinting.png');
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
        height: 400px;


        .header {
            text-align: center;
            font-size: 60px;
        }
    }

    .content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .products-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 20px;

            .product {
                background-color: white;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                width: 300px;
                margin: 10px;
                overflow: hidden;
                cursor: pointer;

                /* on hover increase size of card  slightly */
                &:hover {
                    transform: scale(1.04);
                    transition: transform 0.5s;
                }

                img {
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                }

                .product-info {
                    padding: 10px;

                    .product-name {
                        font-size: 20px;
                        font-weight: bold;
                        text-align: center;
                    }

                    .product-price {
                        font-size: 16px;
                        color: #656b82;
                        text-align: center;
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