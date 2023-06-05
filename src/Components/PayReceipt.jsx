import React from 'react'
import "./PayReceipt.css"
import "./PaymentProcess.css"
import { Link } from 'react-router-dom';

function PayReceipt({ value, setValue }) {
  const orderObj = sessionStorage.getItem("user");
  const theOrder = JSON.parse(orderObj)
  return (
    <div id='pay-receipt-page'>
      <div id="payment-process">
        <div className="green-process-ball" id="process-first-ball">Choose</div>
        <div className="green-process-bar" id="process-first-bar"></div>
        <div className="green-process-ball" id="process-second-ball">Order</div>
        <div className="green-process-bar" id="process-second-bar"></div>
        <div className="green-process-ball" id="process-third-ball">Payment</div>
        <div className="green-process-bar" id="process-third-bar"></div>
        <div className="green-process-ball" id="process-fourth-ball">Receipt</div>
      </div>
      <div id='pay-order-receipt'>
        <h1>THNK YOU FOR YOUR PURCHASE!</h1>
        <h3>we are waiting to see you in the match!</h3>
        <div id='pay-transaction-summary'>
          Purchesed {(theOrder.deal == "single") ? (`${theOrder.amount} tickets `) : (null)}
          {(theOrder.deal == "subscription") ? (`${theOrder.deal} `) : (null)}
          of {theOrder.type} type in the {theOrder.stand} stand <br />
          for a total of money!
        </div>
      </div>
      <div className='pay-buttons'>
        <Link to={"/PayPaying"}> <button>Back</button></Link>
        <Link to={"/"}> <button>Home</button></Link>
      </div>
    </div>
  )
}

export default PayReceipt