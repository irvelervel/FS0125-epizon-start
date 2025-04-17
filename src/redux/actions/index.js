// questo file ci servirà ad ottimizzare la struttura del progetto
// e le casistiche dei reducers

// primo improvement: assegniamo a delle costanti i valori degli action type,
// in modo da non avere amibiguità quando dovremo riutilizzarli per gli switch
// cases nei reducers
// D R Y
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
