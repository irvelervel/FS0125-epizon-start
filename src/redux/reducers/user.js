// qui dentro scriveremo il reducer principale (e unico) della nostra app!
// il reducer di Redux è una funzione pura che non manipola mai i suoi parametri
// e ritorna sempre il NUOVO STATO per l'applicativo

import { SET_USERNAME } from '../actions'

const initialState = {
  // qui inserisco lo stato iniziale dell'intera app!
  // poichè in questo stato condiviso tendono a finire tantissime proprietà
  // in progetti corposi, è meglio NON lanciare tutto alla rinfusa!
  // per questo motivo si tende a dividerlo in "fette" (slices)

  name: '', // valore falsy inizialmente
}

// '' -> falsy
// ' ' -> truthy

// il reducer si sveglia ogni qualvolta una action viene "dispatchata"
const userReducer = (state = initialState, action) => {
  // lo scopo del reducer è ritornare sempre il NUOVO stato dell'applicativo
  // il reducer si muove secondo dei BINARI prestabiliti
  switch (action.type) {
    case SET_USERNAME:
      // ritornare sempre il NUOVO stato dell'applicativo
      return {
        ...state, // questo per preservare le altre proprietà della slice
        name: action.payload,
      }
    default:
      // ritornare sempre il NUOVO stato dell'applicativo
      return state // se l'azione è sconosciuta, per NON FARE DANNI
    // il reducer non cambierà niente! crea una biglia identica all'ultima
  }
}

export default userReducer
