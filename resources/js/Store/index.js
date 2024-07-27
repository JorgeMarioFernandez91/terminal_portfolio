import { createStore } from 'vuex'
// import axios from 'axios';

export const store = createStore({
    state: {
        basketItems: [],
       
    },
    mutations: {
        addToBasket(state, item) {
            state.basketItems.push(item);
        },
        removeFromBasket(state, item) {
            state.basketItems = state.basketItems.filter(i => i.name !== item.name);
        },
        clearBasket(state) {
            state.basketItems = [];
        },
        incrementQuantity(state, item) {
            const basketItem = state.basketItems.find(i => i.name === item.name);
            basketItem.quantity++;
        }
    },
    actions: {
        addToBasket(context, item) {
            context.commit('addToBasket', item);
        },
        removeFromBasket(context, item) {
            context.commit('removeFromBasket', item);
        },
        clearBasket(context) {
            context.commit('clearBasket');
        },
        
    },
    getters: {
        basketItems: state => state.basketItems,
        basketTotalPrice: state => state.basketItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
        basketItemCount: state => state.basketItems.reduce((acc, item) => acc + item.quantity, 0),
    },
});