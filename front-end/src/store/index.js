/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        cart: [],
        cartCount: 0
    },

    getters: {
        getCheckarray: function (state)
        {
            return state.cart;
        }
    },
    
    mutations:{
        addtocart(item)
        {
            console.log(item.title)
        }
    }

});

