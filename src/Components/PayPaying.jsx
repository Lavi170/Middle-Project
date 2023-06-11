import React, { useState, useContext, useEffect } from 'react';
import Cards from 'react-credit-cards-2';
import { Link } from 'react-router-dom'
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import "./PayPaying.css"
import "./PaymentProcess.css"
import { emailContext } from "./App"

const PaymentForm = () => {
  const { setMailAddress } = useContext(emailContext)
  const [currentlyEnteredMail , setCurrentlyEnteredMail]=useState("")
  const [canMoveOn , setCanMoveOn]=useState(false)
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  useEffect(()=>{
    if (state.number!=''&&state.expiry!=''&&state.cvc!=''&&state.name!=''&&state.number!='') {
      setCanMoveOn(true)
    }
  },[state])

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
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
      <div id='pay-paying-card-container'>
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <form>
          <div id='pay-paying-card-number'> Please enter card number-
            <input
              type="number"
              name="number"
              placeholder="Card Number"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div id='pay-paying-card-name'> Please enter name on card-
            <input
              type="text"
              name="name"
              placeholder="Name on card"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div id='pay-paying-card-expire'> Please enter card`s expiry date-
            <input
              type="month"
              name="expiry"
              placeholder="Expretion date"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div id='pay-paying-card-expire'>Please enter card`s cvc number-
            <input
              type="number"
              name="cvc"
              placeholder="cvc number"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </form>
        <div id=''>
          <label for="email">*Optional: Enter your email:</label>
          <input onChange={()=>setCurrentlyEnteredMail(event.target.value)} type="email" id="email" name="email"/>
        </div>
      </div>
      <div className='pay-buttons' >
        <Link to={"/PayOrder"}><button>Back</button></Link>
        {canMoveOn===true?
        <Link to={"/PayReceipt"}><button onClick={()=>setMailAddress(currentlyEnteredMail)}>Next</button></Link>  
      :
          <button onClick={()=>alert("Please fill al the fields before moving on")}>Next</button>
      }
      </div>
    </div>
  );
}

export default PaymentForm;



