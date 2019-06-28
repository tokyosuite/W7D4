import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON'; 
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON, 
  pokemon 
}); 

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const receivePokemon = payload => ({
  type: RECEIVE_POKEMON, 
  payload 
})

export const requestSinglePokemon = id => (dispatch) => (
  APIUtil.fetchPokemon(id).then(pokemon => dispatch(receivePokemon(pokemon)))
); 

window.receiveAllPokemon = receiveAllPokemon; 
window.requestAllPokemon = requestAllPokemon;