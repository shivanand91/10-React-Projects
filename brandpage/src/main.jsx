import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/nav'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Header />
  </React.StrictMode>,
)
