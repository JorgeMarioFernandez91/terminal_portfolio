import { createStore } from 'vuex'
// import axios from 'axios';

export const store = createStore({
    state: {
        basketItems: [],
       
    },
    mutations: {
        addToBasket(state, item) {
            state.basketItems.push(item);
            // save in cache
            localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
        },
        removeFromBasket(state, item) {
            state.basketItems = state.basketItems.filter(i => i.name !== item.name);
            localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
        },
        clearBasket(state) {
            state.basketItems = [];
            localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
        },
        incrementQuantity(state, item) {
            const basketItem = state.basketItems.find(i => i.name === item.name);
            basketItem.quantity += item.quantity;
            localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
        },
        setBasketItems(state, items) {
            state.basketItems = items;
        },
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