import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/Main'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login';
import Science from './pages/Science/Science';
import Institute from './pages/Institute/Institute'
import Tests from './pages/Tests/Tests'
import Result from './pages/Rezult/Rezult'
import Allresult from './pages/Allresult/Allresult'
import Oneresult from './pages/Oneresult/Oneresult'

function App() {

  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/science' element={<Science />} />
      <Route path='/institute' element={<Institute />} />
      <Route path='/tests' element={<Tests />} />
      <Route path='/result' element={<Result />} />
      <Route path='/allresult' element={<Allresult />} />
      <Route path='/oneresult' element={<Oneresult />} />
    </Routes>

  )
}

export default App
