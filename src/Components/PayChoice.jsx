import React from 'react'
import "./PayChoice.css"
import { useState } from 'react'


function PayChoice({ value, setValue }) {
    let [stadiumStand, setStadiumStand] = useState("")
    let [ticketDeal, setTicketDeal] = useState("")
    let [ticketType, setTIcketType] = useState("")
    let [numberOfTickets, setNumberOfTickets] = useState(0)

    let orderObj = {
        "stand": stadiumStand,
        "deal": ticketDeal,
        "type": ticketType,
        "amount": numberOfTickets,
    }

    return (
        <div id='pay-choice-page'>
            <div id='pay-choice-grid'>
                <div id='pay-choice-grid-choose'>
                    <h1>Choose tickets</h1>

                    <div> Choose stadium stand -
                        <select className='pay-selectors' onChange={() => setStadiumStand(event.target.value)} id="">
                            <option value="select-stand">select</option>
                            <option value="north">North</option>
                            <option value="east">East</option>
                            <option value="south">South</option>
                            <option value="west">West</option>
                        </select>
                    </div>

                    <div> Choose ticket deal
                        <select className='pay-selectors' onChange={() => setTicketDeal(event.target.value)} id="">
                            <option value="select-deal">select</option>
                            <option value="single">One time</option>
                            <option value="subscription">Subscription</option>
                        </select>
                    </div>


                    <div> Choose ticket type
                        <select className='pay-selectors' onChange={() => setTIcketType(event.target.value)} id="">
                            <option value="select-type">select</option>
                            <option value="gold">Gold</option>
                            <option value="silver">Silver</option>
                            <option value="bronze">Bronze</option>
                        </select>

                    </div>

                    <div >
                        {(ticketDeal == "single" || ticketDeal == "select-deal") ?
                            (<div id='pay-choice-tickets-pick'> Choose number of tickets
                                <input onChange={() => (setNumberOfTickets(event.target.value))} type="number" min="0" max="15" onKeyPress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" />
                            </div>) : (null)}

                    </div>

                    <div> Send order for approval
                        <button onClick={() => sessionStorage.setItem('user', JSON.stringify(orderObj))}>Place order</button>
                    </div>
                </div>
                <img id='pay-choice-grid-stadium' src="http://www.tothe92.co.uk/groundguide/images/stadiumlayout/wembleystadia.jpg" alt="" />
                <div id='pay-choice-grid-prices'>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Prices</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>Deal</th>
                                <th>type</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>single ticket</td>
                                <td>bronze</td>
                                <td>price</td>
                            </tr>
                            <tr>
                                <td>single ticket</td>
                                <td>silver</td>
                                <td>price</td>
                            </tr>
                            <tr>
                                <td>single ticket</td>
                                <td>gold</td>
                                <td>price</td>
                            </tr>
                            <tr>
                                <td>subscription</td>
                                <td>bronze</td>
                                <td>price</td>
                            </tr>
                            <tr>
                                <td>subscription</td>
                                <td>silver</td>
                                <td>price</td>
                            </tr>
                            <tr>
                                <td>subscription</td>
                                <td>gold</td>
                                <td>price</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default PayChoice