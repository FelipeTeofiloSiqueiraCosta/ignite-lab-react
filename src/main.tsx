import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render( //carregando a aplicação dentro do index.html
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
