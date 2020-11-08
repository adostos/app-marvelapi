import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
	apikey: 'b178f279430e6d65ffdf1b6648c3194c',
	hash: '9f852aa8e766aebcc2f744ceb47d10f0',

	name: '',							// hladany vyraz
	character: [],						// vyhladany hrdina
	imageSize: '/standard_amazing.',	// velkost obrazka
	allSearches: '',					// posledne hladania
	favorites: [],						// oblubeni hrdinovia
}

const store = new Vuex.Store({
	state,
	actions,
	mutations
})

if (module.hot) {
	module.hot.accept([
		'./actions',
		'./mutations'
	], () => {
		store.hotUpdate({
			actions: require('./actions'),
			mutations: require('./mutations')
		})
	})
}

export default store