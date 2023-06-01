import React from 'react'
import "./PayPaying.css"
import { useState } from 'react'

function PayPaying({ value, setValue }) {
  let [enteredName , setEnteredName]=useState(false);
  let [enteredNumber , setEnteredNumber]=useState(false);
  let [enteredDate , setEnteredDate]=useState(false);
  let [enteredCVC , setEnteredCVC]=useState(false);
  return (
    <div id='pay-paying-page'>
        <div id='pay-paying-grid'>
            <div className='pay-paying-grid-item' id='paying-grid-name'>Name on the card: <input onChange={()=>(event.target.value!=null)?(setEnteredName(true)):(setEnteredName(false))} type="text" name="" id="" /></div>
            <div className='pay-paying-grid-item' id='paying-grid-number'>Card number: <input onChange={()=>(event.target.value!=null)?(setEnteredNumber(true)):(setEnteredNumber(false))} type="number" /></div>
            <div className='pay-paying-grid-item' id='paying-grid-expire'>Card expiriation date: <input onChange={()=>(event.target.value!=null)?(setEnteredDate(true)):(setEnteredDate(false))} type="month"/></div>
            <div className='pay-paying-grid-item' id='paying-grid-cvc'>CVC number (3 digits at the back)<input type="number"onChange={()=>(event.target.value!=null)?(setEnteredCVC(true)):(setEnteredCVC(false))} min="100" max="999" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" /></div>
            <div className='pay-paying-grid-item' id='paying-grid-BTN'><button onClick={()=>(enteredName==true&&enteredNumber==true&&enteredDate==true&&enteredCVC==true)?(alert("Transaction completed successfully")):(alert("please fill all fileds before proceeding"))}>Make transaction</button></div>
        </div>
        #site priavecy secured by Lavi and David cop
    </div>
  )
}

export default PayPaying
