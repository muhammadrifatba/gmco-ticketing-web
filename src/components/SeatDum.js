import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './SeatDum.css'
import {Link} from 'react-router-dom';

function SeatDum() {
  const[seats, setSeats] = useState([])
  let[selectingSeats,setSelectingSeats] = useState([])
  const axios = require('axios').default;
  const axiosCookieJarSupport = require('axios-cookiejar-support').default;
  const tough = require('tough-cookie');
  axiosCookieJarSupport(axios);
  const cookieJar = new tough.CookieJar();

  // Seat Mapping
  const seatsColumnsr1  = [ '', '',   '',  '',  '',  '',  '', '8', '9',   '', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '', '22', '23',   '',   '',   '',   '',   '',   '',   ''];
  const seatsColumnsr2  = [ '', '',  '3', '4', '5', '6', '7', '8', '9',   '', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '', '22', '23', '24', '25', '26', '27', '28',   '',   ''];
  const seatsColumns    = ['1', '2', '3', '4', '5', '6', '7', '8', '9',   '', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  const seatsColumns_2  = ['1', '2', '3', '4', '5', '6', '7', '8', '9',   '', '10', '11', '12', '13', '14', '15',   '',   '',   '',   '',   '',   '', '', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  const seatsColumns_1  = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',   '',   '',   '',   '',   '',   '', '',   '', '23', '24', '25', '26', '27', '28', '29', '30'];
  const seatsRows       = ['A', 'B', 'C', 'D', 'E', 'F', 'G',  '', 'H', 'I',  'J',  'K',  'L',  'M',   '',  'O'];

  //Unnecessary Seat
  const exRow = [ 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A24', 'A25', 'A26', 'A27', 'A28', 'A29', 'A30', 
                  'B1', 'B2', 'B29', 'B30', 
                  'M16', 'M17', 'M18', 'M19', 'M20', 'M21',
                  'O17', 'O18', 'O19', 'O20', 'O21', 'O22' ]

    const sendPostSeat = async (uniqueSeats) => {
        try {
            const res = await axios.post('https://dev.bekisar.net/api/v1/ticketing/booking', {'name':uniqueSeats}, {withCredentials:true});
            console.log(res.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };
  //Get Seat Data
  useEffect(() => {    
    axios
      .get('https://dev.bekisar.net/api/v1/ticketing/booking')
      .then(res => {
        setSeats(res.data)
      })
      .catch(err => {
      })
  }, [])

  // Remove Unnecessary Seat
  for(let i=0; i < exRow.length; i++) {
    for(let j=0; j < seats.length; j++) {
      if (seats[j].name === exRow[i]) {
        seats.splice(j,1);
      }
    }
  }
  
  // Make Purchased Seats to Red and Unclickable
  for(let i=0;i<seats.length-1;i++){
    if(seats[i].is_reserved !== 'available/green'){
      document.getElementById(seats[i].name).setAttribute("disabled", true)
    }
  }
  
  const choiceSeat = (seatpicked) => {
    const newBookedSeats = [...selectingSeats, seatpicked]
    setSelectingSeats(newBookedSeats)

    // remove double click
    console.log(selectingSeats.length)
    for (let i = 0; i < selectingSeats.length; i++) {
      console.log(selectingSeats[i])
      if (seatpicked === selectingSeats[i]) {
        selectingSeats.splice(i,1);
      }
    }
    console.log(selectingSeats)
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const SelectSeats = () => {
    let Selected = selectingSeats;
    console.log(Selected);

    //only unique seats

    let uniqueSeats = []
    function OnlyUnique(array) {
      uniqueSeats = [...new Set(array)];
      console.log(uniqueSeats);
      return uniqueSeats;
    }

    let n = Selected.length;
    let seatsOdd = []
    function RemoveEven(arr, n) {
        let mp = new Map();
        for (let i = 0; i < n; i++) {
            if (mp.has(arr[i])) {
                mp.set(arr[i], mp.get(arr[i]) + 1);
            } else {
                mp.set(arr[i], 1);
            }
        }
        for (let i = 0; i < n; i++) {
            if ((mp.has(arr[i]) && mp.get(arr[i]) % 2 === 0))
                continue;
                let odd = arr[i];
                seatsOdd.push(odd);
        }
    }

    const countSeats = Selected.reduce((m,n)=>({...m, [n]:-~m[n]}),{})
    let trav = Object.values(countSeats)
    const even = [];
    trav.forEach(amount => {
      if (amount % 2 === 0) {
          even.push(amount);
      }
    });
    //console.log(even);

    if (even.length === 0) {
      OnlyUnique(Selected)
    }
    else {
      RemoveEven(Selected, n)
      OnlyUnique(seatsOdd)
    }
    if(uniqueSeats.length !== 0)
    {
      console.log("Final Selected: " + uniqueSeats);
      sendPostSeat(uniqueSeats)
      // axios
      //   .post('https://dev.bekisar.net/api/v1/ticketing/booking', {
      //     "name": uniqueSeats
      //   })
      //   .then(res => {
      //     //this.props.history.push('/Invoice')
      //     console.log(res)
      //   })
    }
    else {
      alert('Please Select Seats')
    }
  };
  
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
                      <input 
                        onClick={() => choiceSeat(`${row}${column}`)}
                        type="checkbox" 
                        className="seats" 
                        id={`${row}${column}`} 
                        value={`${row}${column}`} 
                      />
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
                        <input 
                        onClick={() => choiceSeat(`${row}${column}`)}
                        type="checkbox" 
                        className="seats" 
                        id={`${row}${column}`} 
                        value={`${row}${column}`} 
                      />
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
                        <input 
                        onClick={() => choiceSeat(`${row}${column}`)}
                        type="checkbox" 
                        className="seats" 
                        id={`${row}${column}`} 
                        value={`${row}${column}`} 
                      />
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
                        <input 
                        onClick={() => choiceSeat(`${row}${column}`)}
                        type="checkbox" 
                        className="seats" 
                        id={`${row}${column}`} 
                        value={`${row}${column}`} 
                      />
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
                        <input 
                        onClick={() => choiceSeat(`${row}${column}`)}
                        type="checkbox" 
                        className="seats" 
                        id={`${row}${column}`} 
                        value={`${row}${column}`} 
                      />
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
              <li className="smallBox yellowBox">Reserved Seat</li>
              <li className="smallBox emptyBox">Empty Seat</li>
            </ul>
            <div className="screen">
              <h2 className="wthree">Screen this way</h2>
            </div>
            <div className="seatStructure txt-center" style={{overflowX:'auto'}}>
              {seatsGenerator()}
              <button onClick={() => {SelectSeats()}}> Pesan Kursi </button>
              <Link to='/FI'><button> Konfirmasi Pemesanan </button></Link>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeatDum