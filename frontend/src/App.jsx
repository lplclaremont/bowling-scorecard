import { useState } from 'react'
import Scorecard from './components/Scorecard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Scorecard />} />
      </Routes>
    </Router>
  )
}

export default App
