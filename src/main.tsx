import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/app.scss'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <App />
    <Footer />
  </React.StrictMode>,
)
