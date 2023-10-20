import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Prod, Saludo } from './Prod'
import './assets/Prod.css'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Prod />
    <Saludo />
  </>
)
