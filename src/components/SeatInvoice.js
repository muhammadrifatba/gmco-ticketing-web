import React, { Component, useState,useEffect } from 'react'
import axios from 'axios'
const URI = "http://192.168.88.142";
const bekisar = "https://dev.bekisar.net";

function Invoice() {
  const[seatsInvoice, setSeatsInvoice] = useState([])
  const[pricesInvoice, setpricesInvoice] = useState([])
  

  useEffect(() => {    
    axios
      .get(bekisar.concat('/api/v1/ticketing/order'),{withCredentials:true})
      .then(res => {
        setSeatsInvoice(res.data)
        console.log(res.data)
      })
      .catch(err => {
      })
  }, [])

  const seatName = seatsInvoice.name
  console.log(seatName)
  console.log(seatsInvoice)


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
                    <tr>
                      {/* <td>
                        {seatsInvoice.name}
                      </td>
                      <td>
                        {seatsInvoice.price}
                      </td> */}
                      <td>
                        {Object.keys(seatsInvoice).map((key, index) => {
                          return (
                            <div key={index}>
                              <h6>
                                {key}: {seatsInvoice[key]}
                              </h6>
                            </div>
                          );
                        })}
                      </td>
                      <td>
                        {Object.values(seatsInvoice).map((value, index) => {
                          return (
                            <div key={index}>
                              <h6>{value}</h6>
                            </div>
                          )
                        })}
                        </td>
                      {/* <td>
                      {
                              seatName.map((data) => (
                              <li>{data}</li>
                             ))
                           }
                      </td> */}
                         {/* <td>
                           <h6>{
                                pricesInvoice.map(data => (
                               <span key={data}>{data}, </span>
                             ))
                           }
                           </h6>
                         </td> */}
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


export default Invoice