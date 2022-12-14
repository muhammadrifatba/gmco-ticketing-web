import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../style/SeatInvoice.css'

function Invoice() {
  const[seatsInvoice, setSeatsInvoice] = useState([])
  const[seatName, setSeatName] = useState([])
  const[seatPrice, setSeatPrice] = useState([])
  const navigate = useNavigate();

  const URL = "https://dev.bekisar.net/api/v1/ticketing/order"

  useEffect(() => { 
    axios
      .get(URL, {withCredentials:true})
      .then(res => {
        setSeatsInvoice(res.data)
        console.log(res.data)
        setSeatName(res.data.name)
        setSeatPrice(res.data.price)

        if(res.data === 'anda belum melakukan pemilihan kursi'){
          navigate("/error")
        }
      })
      .catch(err => {
      })
  }, [])

  // console.log(seatsInvoice)
  // console.log(Object.values(seatsInvoice))

    return (
      <div className='SeatInvoice-cont'>
        <div className='SeatInvoice-body'>
          <h1 className='SeatInvoice-title'>Pilihan Kursi</h1>
          <div className='container'>
            <table className='SeatInvoice-table'>
              <tbody>
                <tr>
                  <th className='SeatInvoice-item'>Total Seats</th>
                  <th className='SeatInvoice-item'>Total Price</th>
                </tr>
                <tr>
                  <td>
                    {seatName.map(name => (
                      <li className='SeatInvoice-item'>{name}</li>
                    ))}
                  </td>
                  <td>
                    {seatPrice.map(price => (
                      <li className='SeatInvoice-item'>{price}</li>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

export default Invoice