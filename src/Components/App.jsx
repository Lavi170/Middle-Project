import { Route, Routes, } from 'react-router-dom'
import { useEffect, useState } from "react";
import * as React from "react"
import './App.css'
import Layout from './Layout'
import HomePage from './HomePage'
import Notfound from './Notfound'
import CalendarComponent from './CalendarComponent';
import Teams from './Teams'
import About from './About'
import data from './data.json'
import Login from './Login';
import SignUp from './SignUp'
import UserPage from './UserPage'
import ContactUs from "./ContactUs";
import TeamPage from "./TeamPage";
import Payment from './Payment';
import PayChoice from './PayChoice';
import PayOrder from './PayOrder';
import PayPaying from './PayPaying';
import PayReceipt from './PayReceipt';
import News from './News';
import Match from './Match';

import RunningNews from './RunningNews'


function App() {
  localStorage.setItem("logged-user" , null)

  const [mainData, SetmainData] = useState([]);
  useEffect(() => {
    SetmainData(data && data?.results);
  }, []);

  return (
    <div>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgmlgJNh3bbFMxC9tBsX9XgVMVqM1dpis"></script>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage HomePage value={mainData} setValue={SetmainData} />}></Route>
          <Route path='Match' element={<Match />}></Route>
          <Route path='/CalendarComponent' element={<CalendarComponent value={mainData} setValue={SetmainData} />}></Route>
          <Route path="/Teams" element={<Teams value={mainData} setValue={SetmainData} />}></Route>
          <Route
            path="Teams/:teamname"
            element={<TeamPage value={mainData} setValue={SetmainData} />}
          ></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/news' element={<News />}></Route>
            <Route path="/contactus" element={<ContactUs />}></Route>
            <Route element={<RunningNews></RunningNews>}></Route>
            <Route path='/Payment' element={<Payment />}>
              <Route index element={<PayChoice />}></Route>
              <Route path='PayChoice' element={<PayChoice />}></Route>
              <Route path='PayOrder' element={<PayOrder />}></Route>
              <Route path='PayPaying' element={<PayPaying />}></Route>
              <Route path='PayReceipt' element={<PayReceipt />}></Route>
            </Route>
            <Route path='*' element={<Notfound />}></Route>
            <Route path='userpage' element={<UserPage />}>
            <Route path="" element={<Login />}></Route>
            <Route path='signup' element={<SignUp />}></Route>
          </Route>
        </Route>
        <Route path='*' element={<Notfound />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
