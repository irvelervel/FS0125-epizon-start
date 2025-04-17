import { FETCH_BOOKS, FETCH_BOOKS_ERROR } from '../actions'

const initialState = {
  available: [], // qui dentro devono finirci i 6 libri disponibili (fetch)
  isError: false,
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        available: action.payload, // l'array di 6 libri arrivato dalla fetch
      }

    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        isError: true,
      }

    default:
      return state
  }
}

export default shopReducer
