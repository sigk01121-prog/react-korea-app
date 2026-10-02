import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailPage from './pages/DetailPage'
import Header from './components/Header'

function App() {

  return (
    <div className="wrap">
      <Header />
      <main className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<DetailPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <small>&copy; {new Date().getFullYear()} korea culture archive </small>
      </footer>
    </div>
  )
}

export default App
