// posledne hladania
export const searchCharacter = (state, value) => {
    state.name = value
    state.allSearches += value + ' '
}

// ulozenie charakteru (hrdinu)
export const characterPush = (state, value) => {
    state.character = []
    state.character.push(value)
}

// pridanie do oblubenych
export const addFavorite = (state, value) => {
    let favoriteHero = JSON.parse(JSON.stringify(value))
    let allFavorites = JSON.parse(JSON.stringify(state.favorites))

    let heroesId = []
    allFavorites.forEach( element => {
        heroesId.push(element.id)
    })

    if ( heroesId.indexOf(favoriteHero.id) == -1 ) {
        allFavorites.push(favoriteHero)
    }			
    state.favorites = allFavorites
    //alert('The hero has been added to favorites.')
}

// odstranenie z oblubenych
export const removeFavorite = (state, value) => {
    let favoriteHero = JSON.parse(JSON.stringify(state.favorites))

    favoriteHero.forEach( (element, index) => {
        if (element.id == value) favoriteHero.splice(index, 1)
    });
    state.favorites = favoriteHero
}

// odstranenie vsetkyvh oblubenych hrdinov
export const clearAll = state => {
    state.favorites = []
}