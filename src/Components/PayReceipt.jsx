import React from 'react'

function PayReceipt ({ value, setValue }) {
  const orderObj = sessionStorage.getItem("user");
  const theOrder=JSON.parse(orderObj)
  return (
    <div id='pay-receipt'> 
    <h1>THNK YOU FOR YOUR PURCHASE!</h1>
    <h3>we are waiting to see you in the match!</h3>
    <div id='pay-transaction-summary'>
        Purchesed {(theOrder.deal=="single")?(`${theOrder.amount} tickets `):(null)}
        {(theOrder.deal=="subscription")?(`${theOrder.deal} `):(null)}
        of {theOrder.type} type in the {theOrder.stand} stand <br /> 
         for a total of money!
       
    </div>
    </div>
  )
}

export default PayReceipt