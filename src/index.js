import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Kartice from './Components/Kartice'
import Kartica from './Components/Kartica'
import NoPageFound from './Components/NoPageFound'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Kartice />} />
        <Route path='/kartica/:ID' element={<Kartica />} />
        <Route path='*' element={<NoPageFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
