import { Route , Routes ,  } from 'react-router-dom'
import * as React from "react"
import './App.css'
import Layout from './Layout'
import HomePage from './HomePage'
import Notfound from './Notfound'
import Calender from './Calender'
import Teams from './Teams'
import About from './About'



function App() {
  
  return (
    <div>
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path='/Home' element={<HomePage/>}></Route>
          <Route path='/Calender' element={<Calender/>}></Route>
          <Route path="/Teams" element={<Teams/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='*' element={<Notfound />}></Route>
        </Route>
        <Route path='*' element={<Notfound />} ></Route>
      </Routes>
    </div>
  )
}

export default App
