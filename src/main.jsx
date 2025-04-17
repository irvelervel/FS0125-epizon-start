import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './redux/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

// Provider è un componente React fornito dalla libreria "di collegamento"
// di Redux che dovrebbe abbracciare TUTTA la vostra applicazione, in modo
// da fornire a TUTTI i componenti la capacità di accedere allo Store
