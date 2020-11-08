import axios from 'axios'

export const getCharacter = ({ commit, state }) => {
    let nameHero = state.name
    axios
    .get(`
        https://gateway.marvel.com:443/v1/public/characters
        ?name=${encodeURI(nameHero)}
        &ts=1&apikey=${state.apikey}
        &hash=${state.hash}
    `)
    .then(response => {
        let searchCharacter = response.data.data.results[0]
        // destructuring object
        const { id, name, description, thumbnail: { path }, thumbnail: { extension } } = searchCharacter
        const hero = {
            id: id,
            name: name,
            description: description,
            path: path + `${state.imageSize}` + extension,
        }
        commit('characterPush', hero)
    })
    .catch( error => {
        alert('This is not a hero!', error)
    })       
}