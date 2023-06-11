import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Scorecard from './Scorecard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/scorecard" element={<Scorecard />} />
      </Routes>
    </Router>
  )
}

export default App
