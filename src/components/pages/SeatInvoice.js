import React, { Component, useState,useEffect } from 'react'
import axios from 'axios'
import '../style/SeatInvoice.css'

function Invoice() {
  const[seatsInvoice, setSeatsInvoice] = useState([])
  const[seatName, setSeatName] = useState([])
  const[seatPrice, setSeatPrice] = useState([])

  const URL = (process.env.REACT_APP_URL).concat('/api/v1/ticketing/order')

  useEffect(() => {    
    axios
      .get(URL, {withCredentials:true})
      .then(res => {
        setSeatsInvoice(res.data)
        console.log(res.data)
        setSeatName(res.data.name)
        setSeatPrice(res.data.price)
      })
      .catch(err => {
      })
  }, [])

  console.log(seatsInvoice)
  console.log(Object.values(seatsInvoice))

    return (
      <div>
        <div>
          <h1>Pilihan Kursi</h1>
          <div className='container'>
            <div className='w3ls-reg' style={{ display: 'unset', flexWrap: 'unset', paddingTop: '0px' }}>
              <div className='displayerBoxes txt-center' style={{ overflowX: 'auto' }}>
                <table className='Displaytable w3ls-table' width='100%'>
                  <tbody>
                    <tr>
                      <th>Total Seats</th>
                      <th>Total Price</th>
                    </tr>
                    <tr>
                        <td>
                          {seatName.map(name => (
                            <li>{name}</li>
                          ))}
                        </td>
                        <td>
                          {seatPrice.map(price => (
                            <li>{price}</li>
                          ))}
                        </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  
  }



export default Invoice