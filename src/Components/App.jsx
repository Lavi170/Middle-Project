import { Route, Routes, } from 'react-router-dom'
import { useEffect, useState, createContext } from "react";
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
import PayChoice from './PayChoice';
import PayOrder from './PayOrder';
import PayPaying from './PayPaying';
import PayReceipt from './PayReceipt';
import News from './News';
import Match from './Match';
import RunningNews from './RunningNews'

export const emailContext = createContext()

function App() {
  const [mailAddress, setMailAddress] = useState("hello world, im context")
  const [currentTeam, setcurrentTeam] = useState();
  localStorage.setItem("logged-user", null)

  const [mainData, SetmainData] = useState([]);
  useEffect(() => {
    SetmainData(data && data?.results);
  }, []);

  return (
    <div>
      <emailContext.Provider value={{ mailAddress, setMailAddress }}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage value={mainData} setValue={SetmainData} />}></Route>
            <Route path='Teams/:teamname/:currentdate' element={<Match currentTeam={currentTeam} value={mainData} setValue={SetmainData} />}></Route>
            {/* <Route path='paychoice' element={<PayChoice setcurrentTeam={setcurrentTeam} currentTeam={currentTeam} value={mainData} setValue={SetmainData} />} /> */}
            <Route path='/CalendarComponent' element={<CalendarComponent value={mainData} setValue={SetmainData} />}></Route>
            <Route path="/Teams" element={<Teams value={mainData} setValue={SetmainData} />}></Route>
            <Route
              path="Teams/:teamname"
              element={<TeamPage setcurrentTeam={setcurrentTeam} currentTeam={currentTeam} value={mainData} setValue={SetmainData} />}
            ></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/news' element={<News />}></Route>
            <Route path="/contactus" element={<ContactUs />}></Route>
            <Route element={<RunningNews></RunningNews>}></Route>
            <Route path='PayChoice' element={<PayChoice />}></Route>
            <Route path='PayOrder' element={<PayOrder />}></Route>
            <Route path='PayPaying' element={<PayPaying />}></Route>
            <Route path='PayReceipt' element={<PayReceipt />}></Route>
            <Route path='*' element={<Notfound />}></Route>
            <Route path='userpage' element={<UserPage />}>
              <Route path="" element={<Login />}></Route>
              <Route path='signup' element={<SignUp />}></Route>
            </Route>
          </Route>
          <Route path='*' element={<Notfound />} ></Route>
        </Routes>
      </emailContext.Provider>
    </div>
  );
}

export default App;
