// questo file ci servirà ad ottimizzare la struttura del progetto
// e le casistiche dei reducers

// primo improvement: assegniamo a delle costanti i valori degli action type,
// in modo da non avere amibiguità quando dovremo riutilizzarli per gli switch
// cases nei reducers
// D R Y
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'
export const FETCH_BOOKS = 'FETCH_BOOKS'
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR'

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

// come ultimo task dovremo creare un action creator che si occuperò di
// fare la fetch verso /food-books, recuperare eventualmente la lista
// di libri e memorizzarla nella proprietà "available" della slice "shop"
export const fetchBooksAction = () => {
  // Redux ha internamente predisposto della logica per poter utilizzare
  // degli action creator "particolari", oltre a quelli standard (quindi
  // quelli che semplicemente ritornano una action)
  // questi action creator "speciali" potranno eseguire della logica
  // prima di ritornare la action, e questa logica potrà anche essere ASINCRONA
  // mettiamo PRIMA la logica "incerta" (fetch, promises, operazioni async etc.)
  // e il reducer viene svegliato DOPO, una volta che il dato è arrivato
  // la particolarità dell'action creator che stiamo per andare a scrivere, è che
  // non ritornerà una action... ma ritornerà UNA FUNZIONE
  // dispatcheremo una funzione, non un'azione!
  return async (
    dispatch
    // getState
  ) => {
    // quando il dispatch incontra una funzione, Redux esegue la funzione!
    // dispatch è il metodo classico per dispatchare
    // getState è una funzione che si invoca senza parametri -> getState()
    // che ritorna l'intero stato attuale di Redux
    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (resp.ok) {
        let fetchedBooks = await resp.json() // array di 6 libri
        //   ora che ho recuperato i libri, li devo mandare al reducer
        dispatch({
          type: FETCH_BOOKS,
          payload: fetchedBooks, // l'array dei libri!
        })
      } else {
        throw new Error('Errore nella fetch')
      }
    } catch (error) {
      console.log(error)
      // in caso di errore, NON dispatchiamo GET_BOOKS,
      // ma dispatchiamo una action dedicata all'errore!
      dispatch({
        type: FETCH_BOOKS_ERROR, // salvare gli errori in Redux!
      })
    }
  }
}
