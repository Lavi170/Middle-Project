import React from 'react'
import "./PayReceipt.css"
import "./PaymentProcess.css"
import { Link } from 'react-router-dom';
import { emailContext } from "./App"
import { useContext } from 'react';
import emailjs from 'emailjs-com';

function PayReceipt() {
  const { mailAddress } = useContext(emailContext)
  const orderObj = sessionStorage.getItem("user");
  const theOrder = JSON.parse(orderObj)
  
  function sendReceiptInMail() {
    const serviceID = 'service_kcp3w8o';
    const templateID = 'template_71stc71';
    const userID = 'WRhTVTI9Y2pci4vhX';
    const params = {
      to_email: `${mailAddress}`,
      from_name: 'Goal Ticket',
      message: '',
    }
    if (theOrder.deal == "single") {
      params.message = `This is the receipt for a transaction you made on Goal Ticket site. You bought ${theOrder.amount} tickets of ${theOrder.type} type in the ${theOrder.stand} stand 
      for a total of ${theOrder.price} shekels `
    } else if (theOrder.deal == "subscription") {
      params.message = `This is the receipt for a transaction you made on Goal Ticket site. You bought a subscription of ${theOrder.type} type in the ${theOrder.stand} stand 
      for a total of ${theOrder.price} shekels `
  
    emailjs.send(serviceID, templateID, params, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
    }
  }


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
          Purchased {(theOrder.deal == "single") ? (`${theOrder.amount} tickets `) : (null)}
          {(theOrder.deal == "subscription") ? (`${theOrder.deal} `) : (null)}
          of {theOrder.type} type in the {theOrder.stand} stand <br />
          for a total of {theOrder.price} shekels!
        </div>
        <div>
          <h3>Please send me a receipt to my E-mail</h3>
          <button onClick={() => sendReceiptInMail()}>Send</button>
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