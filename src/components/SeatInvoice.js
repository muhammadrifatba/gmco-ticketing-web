import React, { Component, useState,useEffect } from 'react'
import axios from 'axios'

function Invoice() {
  const[seatsInvoice, setSeatsInvoice] = useState([])
  const[pricesInvoice, setpricesInvoice] = useState([])
  

  useEffect(() => {    
    axios
      .get('https://dev.bekisar.net/api/v1/ticketing/order',{withCredentials:true})
      .then(res => {
        setSeatsInvoice(res.data)
        console.log(res)
        
        
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
                      <th>Total Seats</th>
                      <th>Total Price</th>
                    </tr>
                    {/* <tr>
                           <td>
                           <h6>{
                                seatsInvoice.map(data => (
                               <span key={data}>{data}, </span>
                             ))
                           }
                           </h6>
                         </td>
                         <td>
                           <h6>{
                                pricesInvoice.map(data => (
                               <span key={data}>{data}, </span>
                             ))
                           }
                           </h6>
                         </td>
                    </tr> */}
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


export default Invoice