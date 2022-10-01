import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './SeatDum.css'

function SeatDum() {
  const[seats, setSeats] = useState([])
  // const[choice, setChoice] = useState()
  // const[selectingSeats,setSelectingSeats] = useState([])
  // const[selectedSeats,setSelectedSeats]=useState([])

  //Get Data
  useEffect(() => {    
    axios
      // ini dummy api
      .get('https://mocki.io/v1/72872d70-2be4-42cf-9fbd-2b77b69af398')
      .then(res => {
        //console.log(res)
        setSeats(res.data)
      })
      .catch(err => {
        //console.log(err)
      })
  }, [])

  // console.log(seats)

  // useEffect(function(){
  //   axios.get('https://dev.bekisar.net/api/v1/ticketing/booking')
  //   .then(function(response) {
  //     const seats = response.data;
  //     for(let i=0;i<seats.length;i++){
  //       if(seats[i].is_reserved === 'available/green'){
  //         document.getElementById(seats[i].name).setAttribute("disabled", true)
  //         console.log(seats[i])
  //       }
  //     }
  //   })
  // },[])

  console.log(seats)

  for(let i=0;i<seats.length;i++){
    if(seats[i].is_reserved === 'available/green'){
      document.getElementById(seats[i].name).setAttribute("disabled", true)
    }
  }

  //console.log(seats)

  // const choiceSeat = (seat) => {
  //   const newBookedSeats = setSelectingSeats([...selectingSeats,(seat)])
  //   setSelectingSeats(newBookedSeats)
  // }

  // const SelectSeats = () => {
  //   const Selected = setSelectingSeats(selectingSeats)
  //   if(Selected.length !== 0)
  //   {
  //     axios.post('http://localhost:8080/bookSeat', {"seats": Selected}).then(res => {
  //       this.props.history.push('/invoice')
  //     })
  //   }
  //   else {
  //     alert('Please Select Seats')
  //   }
  // };

  const seatsColumnsr1=['','','','','','','','8','9', '','10', '11', '12', '13', '14', '15', '16','17','18','19','20','21','','22','23','','','','','','',''];
  const seatsColumnsr2=['', '', '3', '4', '5','6','7','8','9', '' , '10', '11', '12', '13', '14', '15', '16','17','18','19','20','21', '','22','23','24','25','26','27','28','',''];
  const seatsColumns = ['1', '2', '3', '4', '5','6','7','8','9', '' , '10', '11', '12', '13', '14', '15', '16','17','18','19','20','21', '','22','23','24','25','26','27','28','29','30'];
  const seatsColumns_2 = ['1', '2', '3', '4', '5','6','7','8','9', '', '10', '11', '12', '13', '14', '15', '','','','','','','','22','23','24','25','26','27','28','29','30'];
  const seatsColumns_1 = ['1', '2', '3', '4', '5','6','7','8','9', '', '10', '11', '12', '13', '14', '15', '16','','','','','','','','23','24','25','26','27','28','29','30'];
  const seatsRows = ['A', 'B','C', 'D', 'E','F','G', '', 'H', 'I', 'J', 'K', 'L','M','','O'];
  
  const seatsGenerator = () => {
    return (
      <table id="seatsBlock">
        <tbody>
          <tr>
            <td/>
            {seatsColumns.map((column, index) => <td key={index}>{column}</td>)}
          </tr>
          {
            seatsRows.map((row, index) =>
              row === '' 
              ?
                <tr key={index} type="checkbox" className="seatVGap"></tr> 

              // Row A
              :
              row === 'A' 
              ?
              <tr key={index}>
              <td>
                {row}
              </td>
              {seatsColumnsr1.map((column, index) => {
                return (
                  column === ''
                    ?
                    <td key={index} className="seatGap"></td>
                    :
                    <td key={index}>
                      <input type="checkbox" className="seats" id={`${row}${column}`} value={`${row}${column}`} />
                    </td>
                )
              })}
              </tr>

              // Row B
              :
              row ==='B'
              ?
              <tr key={index}>
              <td>
                  {row}
              </td>
              {seatsColumnsr2.map((column, index) => {
                  return (
                    column === '' 
                    ?
                    <td key={index} className="seatGap"></td>
                    :
                    <td key={index}>
                        <input type="checkbox" className="seats" id={`${row}${column}`} value={`${row}${column}`} />
                    </td>
                  )
              })}
              </tr>

              // Row O Paling Belakang
              :
              row === 'O'
              ?
              <tr key={index}>
              <td>
                  {row}
              </td>
              
              {seatsColumns_1.map((column, index) => {
                return (
                  column === ''
                    ?
                    <td key={index} className="seatGap"></td>
                    :
                    <td key={index}>
                        <input type="checkbox" className="seats" id={`${row}${column}`} value={`${row}${column}`} />
                    </td>
                )
              })}
              </tr>

              // Row M 2 Paling Belakang
              : 
              row === 'M'
              ?
              <tr key={index}>
              <td>
                  {row}
              </td>
              {seatsColumns_2.map((column, index) => {
                return (
                  column === ''
                    ?
                    <td key={index} className="seatGap"></td>
                    : 
                    <td key={index}>
                        <input type="checkbox" className="seats" id={`${row}${column}`} value={`${row}${column}`} />
                    </td>
                )
              })}
              </tr>

              // Lain
              :
              <tr key={index}>
              <td>
                  {row}
              </td>
              {seatsColumns.map((column, index) => {
                return (
                  column === ''
                    ?
                    <td key={index} className="seatGap"></td>
                    :
                    <td key={index}>
                        <input type="checkbox" className="seats" id={`${row}${column}`} value={`${row}${column}`} />
                    </td>
                )
              })}
              </tr>
            )
          }
        </tbody>
      </table>
    );
  };
    
  // Run HTML
  return (
    <div>
      <div>
        <h1>Movie Seat Selection</h1>
        <div className="SeatContainer">
          <div className="w3ls-reg" style={{paddingTop: '0px'}}>
            <ul className="seat_w3ls">
              <li className="smallBox greenBox">Selected Seat</li>
              <li className="smallBox redBox">Reserved Seat</li>
              <li className="smallBox emptyBox">Empty Seat</li>
            </ul>
            <div className="screen">
              <h2 className="wthree">Screen this way</h2>
            </div>
            <div className="seatStructure txt-center" style={{overflowX:'auto'}}>
              {seatsGenerator()}
              <button onClick={() => { this.SelectSeats()}}>Confirm Selection</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }

export default SeatDum