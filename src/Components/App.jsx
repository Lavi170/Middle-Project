import { Route , Routes ,  } from 'react-router-dom'
import { useEffect, useState } from "react";
import * as React from "react"
import './App.css'
import Layout from './Layout'
import HomePage from './HomePage'
import Notfound from './Notfound'
import Calender from './Calender'
import Teams from './Teams'
import About from './About'
import data from './data.json'
import Login from './Login';
import SignUp from './SignUp'
import UserPage from './UserPage'
import ContactUs from './ContactUs';
function App() {
  const [mainData, SetmainData] = useState([]);
  useEffect(() => {
    SetmainData(data.results)
  }, []);

  return (
    <div>
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage/>}></Route>
          <Route path='/Home' element={<HomePage  value={mainData} setValue={SetmainData}/>}></Route>
          <Route path='/Calender' element={<Calender  value={mainData} setValue={SetmainData}/>}></Route>
          <Route path="/Teams" element={<Teams value={mainData} setValue={SetmainData}/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='*' element={<Notfound />}></Route>
          <Route path='userpage' element={<UserPage/>}>
            <Route path='login' element={<Login/>}></Route>
            <Route path='signup' element={<SignUp/>}></Route>
          </Route>
        </Route>
        <Route path='*' element={<Notfound />} ></Route>
      </Routes>
    </div>
  )
}

export default App
