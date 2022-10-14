import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/SeatDum.css'
import {Link} from 'react-router-dom';

function SeatDum() {
  const[seats, setSeats] = useState([])
  let[selectingSeats,setSelectingSeats] = useState([])
  const uniqueSeats = []
  // const axiosCookieJarSupport = require('axios-cookiejar-support').default;
  // const tough = require('tough-cookie');
  // axiosCookieJarSupport(axios);
  // const cookieJar = new tough.CookieJar();

  // Seat Mapping
  const seatsColumnsr1  = [ '', '',   '',  '',  '',  '',  '', '8', '9',   '', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '', '22', '23',   '',   '',   '',   '',   '',   '',   ''];
  const seatsColumnsr2  = [ '', '',  '3', '4', '5', '6', '7', '8', '9',   '', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '', '22', '23', '24', '25', '26', '27', '28',   '',   ''];
  const seatsColumns    = ['1', '2', '3', '4', '5', '6', '7', '8', '9',   '', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  const seatsColumns_2  = ['1', '2', '3', '4', '5', '6', '7', '8', '9',   '', '10', '11', '12', '13', '14', '15',   '',   '',   '',   '',   '',   '', '', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  const seatsColumns_1  = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',   '',   '',   '',   '',   '',   '', '',   '', '23', '24', '25', '26', '27', '28', '29', '30'];
  const seatsRows       = ['A', 'B', 'C', 'D', 'E', 'F', 'G',  '', 'H', 'I',  'J',  'K',  'L',  'M',   '',  'O'];

  const sendPostSeat = async (uniqueSeats) => {
      try {
          const res = await axios.post((process.env.REACT_APP_BEKISAR).concat('/api/v1/ticketing/booking'), {'name':uniqueSeats}, {withCredentials:true});
          console.log(res.data);
      } catch (err) {
          // Handle Error Here
          console.error(err);
      }
  };

  //Get Seat Data
  useEffect(() => {    
    axios
      .get((process.env.REACT_APP_BEKISAR).concat('/api/v1/ticketing/booking'))
      .then(res => {
        setSeats(res.data)
        console.log(res.data)
      })
      .catch(err => {
      })
  }, [])
  
  // Make Purchased Seats to Red and Unclickable
  for(let i=0;i<seats.length-1;i++){
    if(seats[i].is_reserved !== 'available/green'){
      document.getElementById(seats[i].name).setAttribute("disabled", true)
    }
  }

  const removeDuplicate = (selectSeats, seatpick) => {
    // remove double click
    console.log(selectSeats.length)
    for (let i = 0; i < selectSeats.length; i++){
      console.log(selectSeats[i])
      if (seatpick === selectSeats[i]){
        selectSeats.splice(i,1);
      }
    }
    console.log(selectSeats)
    setSelectingSeats(selectSeats)
  }
  
  const choiceSeat = (seatpicked) => {
    const newBookedSeats = [...selectingSeats, seatpicked]
    setSelectingSeats(newBookedSeats)
    removeDuplicate(selectingSeats, seatpicked)
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const SelectSeats = () => {
    const Selected = selectingSeats

    console.log(Selected[-1])
    removeDuplicate(Selected, Selected[-1])

    console.log(Selected)
    if(Selected.length !== 0)
    {
      console.log("Final Selected: " + uniqueSeats);
      sendPostSeat(uniqueSeats)
      // axios
      //   .post('https://172.20.10.6/api/v1/ticketing/booking', {
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