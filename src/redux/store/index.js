// questo file da il via alla configurazione di Redux nel nostro progetto
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../reducers/cart'
import userReducer from '../reducers/user'
import shopReducer from '../reducers/shop'

// ri-combiniamo le fette per ri-creare la torta!
// all'inizio, l'initialState era fatto da due sotto-oggetti: cart e user
// ora li ricreo nella torta, assegnando a ciascuno di essi il proprio mini-reducer
const uniqueReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  shop: shopReducer,
})

const store = configureStore({
  reducer: uniqueReducer, // qui vado a mettere il principale reducer dell'app
})

export default store
// store è il "cuore" della nostra implementazione di Redux
