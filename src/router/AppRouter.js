import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Register from '../pages/Register'

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter