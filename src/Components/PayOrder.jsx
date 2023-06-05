import React from 'react'
import "./PayOrder.css"
import "./PaymentProcess.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';

function PayOrder({ value, setValue }) {
  const orderObj = sessionStorage.getItem("user");
  const [termsOfUse, setTermsOfUse] = useState(false)
  const theOrder = JSON.parse(orderObj)
  return (
    <div id='pay-order-page'>
      <div id="payment-process">
        <div className="green-process-ball" id="process-first-ball">Choose</div>
        <div className="green-process-bar" id="process-first-bar"></div>
        <div className="half-process-ball" id="process-second-ball">Order</div>
        <div className="grey-process-bar" id="process-second-bar"></div>
        <div className="grey-process-ball" id="process-third-ball">Payment</div>
        <div className="grey-process-bar" id="process-third-bar"></div>
        <div className="grey-process-ball" id="process-fourth-ball">Receipt</div>
      </div>

      <div id='pay-order-window'>
        The order you placed-
        <div id='pay-order-conclution' >
          {(theOrder.deal == "single") ? (`${theOrder.amount} tickets `) : (null)}
          {(theOrder.deal == "subscription") ? (`${theOrder.deal} `) : (null)}
          of {theOrder.type} type in the {theOrder.stand} stand <br />
          for the price of-
        </div>
        <div>
          <input onChange={() => setTermsOfUse(!termsOfUse) + console.log(termsOfUse)} type="checkbox" id="" /> I consent to costumer terms of use. <br />
        </div>
      </div>
        <div className='pay-buttons'>
          <Link to={"/PayChoice"}><button>Back</button></Link>
          {termsOfUse === true ?
            <Link to={"/PayPaying"}><button>Next</button></Link>
            :
            <button onClick={() => alert("Please confirm terms of use!")}>Next</button>
          }
        </div>
    </div>
  )
}

export default PayOrder