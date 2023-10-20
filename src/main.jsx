import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Prod, Saludo } from './Prod'
import {Card} from './Card'
import './assets/Prod.css'
import './Card.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Prod />
    <Saludo />
	<Card />
  </>
)
