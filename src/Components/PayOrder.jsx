import React from 'react'
import "./PayOrder.css"

function PayOrder({ value, setValue }) {
  const orderObj = sessionStorage.getItem("user");
  const theOrder=JSON.parse(orderObj)
  return (
    <div id='pay-order'>
      The order you placed-
      <div id='pay-order-conclution' >
        {(theOrder.deal=="single")?(`${theOrder.amount} tickets `):(null)}
        {(theOrder.deal=="subscription")?(`${theOrder.deal} `):(null)}
         of {theOrder.type} type in the {theOrder.stand} stand <br />
        for the price of-
      </div>
      <div>
        <input type="checkbox" id="" /> I consent to costumer terms of use. <br />
      </div>

    </div>
  )
}

export default PayOrder