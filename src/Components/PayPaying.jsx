import React from 'react'
import "./PayPaying.css"
import "./PaymentProcess.css"
import { useState } from 'react'
import { Link } from 'react-router-dom';

function PayPaying({ value, setValue }) {
  let [enteredName, setEnteredName] = useState(false);
  let [enteredNumber, setEnteredNumber] = useState(false);
  let [enteredDate, setEnteredDate] = useState(false);
  let [enteredCVC, setEnteredCVC] = useState(false);
  let [madeTransact, setMadeTransact] = useState(false)

  // const creditInfo={
  //   name:
  // }

  function tryToTransact() {
    if (enteredName == true && enteredNumber == true && enteredDate == true && enteredCVC == true) {
      alert("Transaction completed successfully")
      setMadeTransact(!madeTransact)
    } else {
      alert("please fill all fileds before proceeding")
    }
  }

  return (
    <div id='pay-paying-page'>
      <div id="payment-process">
        <div className="green-process-ball" id="process-first-ball">Choose</div>
        <div className="green-process-bar" id="process-first-bar"></div>
        <div className="green-process-ball" id="process-second-ball">Order</div>
        <div className="green-process-bar" id="process-second-bar"></div>
        <div className="half-process-ball" id="process-third-ball">Payment</div>
        <div className="grey-process-bar" id="process-third-bar"></div>
        <div className="grey-process-ball" id="process-fourth-ball">Receipt</div>
      </div>
      <div id='pay-paying-grid'>
        <div className='pay-paying-grid-item' id='paying-grid-name'>Name on the card: <input onChange={() => (event.target.value != null) ? (setEnteredName(true)) : (setEnteredName(false))} type="text" name="" id="" /></div>
        <div className='pay-paying-grid-item' id='paying-grid-number'>Card number: <input onChange={() => (event.target.value != null) ? (setEnteredNumber(true)) : (setEnteredNumber(false))} type="number" /></div>
        <div className='pay-paying-grid-item' id='paying-grid-expire'>Card expiriation date: <input onChange={() => (event.target.value != null) ? (setEnteredDate(true)) : (setEnteredDate(false))} type="month" /></div>
        <div className='pay-paying-grid-item' id='paying-grid-cvc'>CVC number (3 digits at the back)<input type="number" onChange={() => (event.target.value != null) ? (setEnteredCVC(true)) : (setEnteredCVC(false))} min="100" max="999" onKeyPress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" /></div>
        <div className='pay-paying-grid-item' id='paying-grid-mail'>Email: <input type="email" id="" /></div>
        <div className='pay-paying-grid-item' id='paying-grid-BTN'><button onClick={() => tryToTransact()}>Make transaction</button></div>
        <div className='pay-paying-grid-item' id='paying-grid-statment'>#site privacy secured by Lavi and David corp</div>
      </div>
      <div className='pay-buttons' >
        <Link to={"/PayOrder"}><button>Back</button></Link>
        {madeTransact === true ?
          <Link to={"/PayReceipt"}><button>Next</button></Link>
          :
          <button onClick={() => alert("Please make transaction")}>Next</button>
        }
      </div>

    </div>
  )
}

export default PayPaying
