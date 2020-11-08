import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		apikey: 'b178f279430e6d65ffdf1b6648c3194c',
		hash: '9f852aa8e766aebcc2f744ceb47d10f0',

		name: '',							// hladany vyraz
		character: [],						// vyhladany hrdina
		imageSize: '/standard_amazing.',	// velkost obrazka
		allSearches: '',					// posledne hladania
		favorites: [],						// oblubeni hrdinovia
	},
	mutations: {
		// ulozenie charakteru (hrdinu)
		characterPush(state, value) {
			state.character = []
			state.character.push(value)
		},
		// TheSearchForm
		// posledne hladania
		searchCharacter (state, value) {
			state.name = value
			state.allSearches += value + ' '
		},
		// SearchHeroCard
		// pridanie hrdinu do oblubenych
		addFavorite(state, value) {
			const favoriteHero = JSON.parse(JSON.stringify(value))
			let allFavorites = JSON.parse(JSON.stringify(state.favorites))
			// kontrolovanie rovnakych hrdinov podla id
			let heroesId = []
			allFavorites.forEach( element => {
				heroesId.push(element.id)
			})
			if (heroesId.indexOf(favoriteHero.id) == -1 ) {
				allFavorites.push(favoriteHero)
			}			
			state.favorites = allFavorites
			//alert('The hero has been added to favorites.')
		},
		// FavoritesCard
		// odstranenie hrdinu z oblubenych
		removeFavorite(state, value) {
			const favoriteHero = JSON.parse(JSON.stringify(state.favorites))
			favoriteHero.forEach( (element, index) => {
				if (element.id == value) favoriteHero.splice(index, 1)
			});
			state.favorites = favoriteHero
		},
		// odstranenie vsetkyvh oblubenych hrdinov
		clearAll(state) {
			state.favorites = []
		}
	},
	actions: {
		// TheSearchForm
		// request / response + vytvorenie noveho objektu hrdinu
		getCharacter(context) {
			const nameHero = context.state.name
			axios
			.get(`
				https://gateway.marvel.com:443/v1/public/characters
				?name=${encodeURI(nameHero)}
				&ts=1&apikey=${context.state.apikey}
				&hash=${context.state.hash}
			`)
			.then(response => {
				const searchCharacter = response.data.data.results[0]
				// destructuring object
				const { id, name, description, thumbnail: { path }, thumbnail: { extension } } = searchCharacter
				const hero = {
					id: id,
					name: name,
					description: description,
					path: path + `${context.state.imageSize}` + extension,
				}
				context.commit('characterPush', hero)
			})
			.catch( error => {
				alert('This is not a hero!', error)
			})
		},
	},
})
