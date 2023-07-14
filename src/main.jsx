import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { WeatherApp } from './WeatherApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
     <WeatherApp />
    </BrowserRouter>
  </React.StrictMode>
  
)
