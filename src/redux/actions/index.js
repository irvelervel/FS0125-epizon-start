// questo file ci servirà ad ottimizzare la struttura del progetto
// e le casistiche dei reducers

// primo improvement: assegniamo a delle costanti i valori degli action type,
// in modo da non avere amibiguità quando dovremo riutilizzarli per gli switch
// cases nei reducers
// D R Y
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'

// ci inserisco anche le actions
// inserisco ora anche una FUNZIONE che RITORNA una action
// in gergo, queste funzioni vengono chiamate ACTION CREATORS
export const addToCartAction = (bookSelected) => {
  return {
    type: ADD_TO_CART, // obbligatoria
    payload: bookSelected, // non obbligatoria, ma quasi sempre necessaria
  }
}

export const removeFromCartAction = (i) => {
  return {
    type: REMOVE_FROM_CART,
    payload: i,
  }
}

export const setUsernameAction = (username) => {
  return {
    type: SET_USERNAME,
    payload: username,
  }
}
