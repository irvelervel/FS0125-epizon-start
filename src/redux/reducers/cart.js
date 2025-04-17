// qui dentro scriveremo il reducer principale (e unico) della nostra app!
// il reducer di Redux è una funzione pura che non manipola mai i suoi parametri
// e ritorna sempre il NUOVO STATO per l'applicativo

import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions'

const initialState = {
  // qui inserisco lo stato iniziale dell'intera app!
  // poichè in questo stato condiviso tendono a finire tantissime proprietà
  // in progetti corposi, è meglio NON lanciare tutto alla rinfusa!
  // per questo motivo si tende a dividerlo in "fette" (slices)
  content: [],
}

// '' -> falsy
// ' ' -> truthy

// il reducer si sveglia ogni qualvolta una action viene "dispatchata"
const cartReducer = (state = initialState, action) => {
  // lo scopo del reducer è ritornare sempre il NUOVO stato dell'applicativo
  // il reducer si muove secondo dei BINARI prestabiliti
  switch (action.type) {
    case ADD_TO_CART:
      // ritornare sempre il NUOVO stato dell'applicativo
      // action.payload
      return {
        // qui cosa faccio? NON POSSO UTILIZZARE PUSH, SPLICE, POP e TUTTI
        // i metodi MUTATIVI degli array!
        ...state,
        content: state.content.concat(action.payload),
        // content: [...state.content, action.payload]
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        // METODO DELLE FETTE
        // content: [
        //   ...state.content.slice(0, action.payload),
        //   ...state.content.slice(
        //     action.payload + 1,
        //     state.content.length
        //   ),
        // ],
        // METODO DEL FILTER
        content: state.content.filter((book, i) => {
          if (i !== action.payload) {
            return true
          } else {
            return false
          }
        }),
      }

    default:
      // ritornare sempre il NUOVO stato dell'applicativo
      return state // se l'azione è sconosciuta, per NON FARE DANNI
    // il reducer non cambierà niente! crea una biglia identica all'ultima
  }
}

export default cartReducer
