import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { fetchStore } from './utilis/redux/store.js'
import {Provider} from 'react-redux'
// import { Store } from './utilis/redux/Store.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={fetchStore}>
    <App />
  </Provider>
  )
  