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
    // case:
    // ritornare sempre il NUOVO stato dell'applicativo
    // case:
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
