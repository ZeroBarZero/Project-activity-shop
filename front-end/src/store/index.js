/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
  added: [],
  all: [
    {
      id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c',
      name: 'COBOL 101 vintage',
      description: 'Learn COBOL with this vintage programming book',
			price: 399,
			category: 'a'
    },
    {
      id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f',
      name: 'Sharp C2719 curved TV',
      description: 'Watch TV like never before with the brand new curved screen technology',
			price: 1995, 
			category: 'a'
    },
    {
      id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e',
      name: 'Remmington X mechanical keyboard',
      description: 'Excellent for gaming and typing, this Remmington X keyboard ',
			price: 595,
			category: 'a'
		},
		{
      id: '727026b7-7f2f-c5a0-ace9-cc998e686b8e',
      name: 'Running Session',
      description: 'Excellent for your health. You become calm and fresh. ',
			price: 595,
			category: 'b'
    },
		{
      id: '727026b7-7f2f-c5a0-ace9-cc998e686b789',
      name: 'Running Session2',
      description: 'Talk about running. What is running thou',
			price: 5005,
			category: 'b'
		},
		{
      id: '602026b7-7f2f-c5a0-ace9-cc998e686b789',
      name: 'Running Session3',
      description: 'Talk about running. What is running thou',
			price: 3005,
			category: 'b'
    },
		{
      id: '727026b7-7f23-c5a1-ace9-cc998e686b789',
      name: 'Early Bird Yoga',
      description: 'every Sunday morning 10am we will start + Watch TV like never',
			price: 5005,
			category: 'c'
    },
		{
      id: '727026b7-7f2f-c5a1-ace9-cc998e686b789',
      name: 'owl Yoga',
      description: 'every Frinday night 10pm we will start + Watch TV like never',
			price: 5005,
			category: 'c'
		},
		{
      id: '734026b7-7f2f-c5a1-ace9-cc998e686b789',
      name: 'owl Yoga2',
      description: 'every Frinday night 8pm we will start + Watch TV like never',
			price: 5005,
			category: 'c'
    }
  ]
}

// getters
const getters = {
	allProducts: state => state.all, // would need action/mutation if data fetched async
	getNumberOfProducts: state => (state.all) ? state.all.length : 0,
	cartProducts: state => {
		return state.added.map(({ id, quantity }) => {
			const product = state.all.find(p => p.id === id)

			return {
				name: product.name,
				price: product.price,
				quantity
			}
		})
	}
}

// actions
const actions = {
	addToCart({ commit }, product){
		commit(types.ADD_TO_CART, {
			id: product.id
		})
	}
}

// mutations
const mutations = {

	[types.ADD_TO_CART] (state, { id }) {
	    const record = state.added.find(p => p.id === id)

	    if (!record) {
	      state.added.push({
	        id,
	        quantity: 1
	      })
	    } else {
	      record.quantity++
	    }
	  }
}

// one store for entire application
export default new Vuex.Store({
	state,
	strict: debug,
	getters,
	actions,
	mutations
})