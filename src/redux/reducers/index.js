// qui dentro scriveremo il reducer principale (e unico) della nostra app!
// il reducer di Redux è una funzione pura che non manipola mai i suoi parametri
// e ritorna sempre il NUOVO STATO per l'applicativo

const initialState = {
  // qui inserisco lo stato iniziale dell'intera app!
  // poichè in questo stato condiviso tendono a finire tantissime proprietà
  // in progetti corposi, è meglio NON lanciare tutto alla rinfusa!
  // per questo motivo si tende a dividerlo in "fette" (slices)
  cart: {
    content: [],
  },
}

const mainReducer = (state = initialState, action) => {
  // lo scopo del reducer è ritornare sempre il NUOVO stato dell'applicativo
  // il reducer si muove secondo dei BINARI prestabiliti
  switch (action.type) {
    case 'ADD_TO_CART':
      // ritornare sempre il NUOVO stato dell'applicativo
      // action.payload
      return {
        // qui cosa faccio? NON POSSO UTILIZZARE PUSH, SPLICE, POP e TUTTI
        // i metodi MUTATIVI degli array!
        ...state,
        cart: {
          ...state.cart,
          content: state.cart.content.concat(action.payload),
          // content: [...state.cart.content, action.payload]
        },
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          // METODO DELLE FETTE
          // content: [
          //   ...state.cart.content.slice(0, action.payload),
          //   ...state.cart.content.slice(
          //     action.payload + 1,
          //     state.cart.content.length
          //   ),
          // METODO DEL FILTER
          content: state.cart.content.filter((book, i) => {
            if (i !== action.payload) {
              return true
            } else {
              return false
            }
          }),
        },
      }
    // ritornare sempre il NUOVO stato dell'applicativo
    // case:
    // ritornare sempre il NUOVO stato dell'applicativo
    default:
      // ritornare sempre il NUOVO stato dell'applicativo
      return state // se l'azione è sconosciuta, per NON FARE DANNI
    // il reducer non cambierà niente! crea una biglia identica all'ultima
  }
}

export default mainReducer
