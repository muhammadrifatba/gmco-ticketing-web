import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

function Invoice () {
  const[seats, setSeats] = useState('')
  

  useEffect(() => {    
    axios
      .get('dev.bekisar.net/api/v1/ticketing/order')
      .then(res => {
        const seat = res.data
        setSeats(seat)
        console.log(seat)
      })
      .catch(err => {
      })
  }, [])

  
    return (
      <div>
        <div>
          <h1>Movie Seat Selection</h1>
          <div className='container'>

            <div className='w3ls-reg' style={{ display: 'unset', flexWrap: 'unset', paddingTop: '0px' }}>

              <div className='displayerBoxes txt-center' style={{ overflowX: 'auto' }}>
                <table className='Displaytable w3ls-table' width='100%'>
                  <tbody>
                    <tr>
                      <th>Seats</th>
                      <th>Total Seats</th>
                      <th>Total Price</th>
                    </tr>
                    <tr>
                      <td>
                        <h6>{
                          this.state.name.map(data => (
                            <span key={data}>{data}, </span>
                          ))
                        }
                        </h6>
                      </td>
                      <td>
                        <h6>{this.state.price}</h6>
                      </td>
                      <td>
                        <h6>£{parseFloat(this.state.TotalPrice).toFixed(2)}</h6>
                        <textarea style={{ visibility: 'hidden', height: '1px' }} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <br />
                <button onClick={() => { this.props.history.push('/') }}>Book More Seats</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


export default Invoice;