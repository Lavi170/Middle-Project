import React from 'react'
import "./PayChoice.css"
import { useState, useEffect } from 'react'

function PayChoice({ value, setValue }) {
    let [stadiumStand, setStadiumStand] = useState("")
    let [ticketDeal, setTicketDeal] = useState("")
    let [ticketType, setTIcketType] = useState("")
    let [numberOfTickets, setNumberOfTickets] = useState(0)


    return (
        <div id='pay-choice-page'>
            <div id='pay-choice-grid'>
                <div id='pay-choice-grid-choose'>choose tickets
                    <div> choose stadium stand -
                        <select onClick={() => setStadiumStand(event.target.value)} id=""></select>
                        <option value="north">North</option>
                        <option value="east">East</option>
                        <option value="south">South</option>
                        <option value="west">West</option>
                    </div>
                    <div> choose ticket deal
                        <select onClick={() => setTicketDeal(event.target.value)} id=""></select>
                        <option value="single">One time</option>
                        <option value="subscription">Subscription</option>
                    </div>
                    <div> choose ticket type
                        <select onClick={() => setTIcketType(event.target.value)} id=""></select>
                        <option value="gold">Gold</option>
                        <option value="silver">Silver</option>
                        <option value="bronze">Bronze</option>
                    </div>
                    <input type='number' />
                </div>
                <div id='pay-choice-grid-stadium'>
                    <span>stadium seats</span>
                    <span>available seats</span>
                    <img src="./stadium-picture.jpg" alt="" />
                </div>
                <div id='pay-choice-grid-prices'>prices table
                    <table>
                        <thead>
                            <tr>
                                <th>Deal</th>
                                <th>type</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>bronze</td>
                                <td>price</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>silver</td>
                                <td>price</td>
                            </tr>
                            <tr>
                                <td>1</td>
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