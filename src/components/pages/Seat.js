import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './utility/Button';
import axios from 'axios';
import PageHeader from './utility/PageHeader' 
import Swal from 'sweetalert2';
import ModalImage from "react-modal-image";
import img from '../../images/seatprice.webp'
import img1 from '../../images/harga-logo.svg'
import '../style/Seat.css'

function SeatDum() {
  const navigate = useNavigate();
  const[seats, setSeats] = useState([])
  let[selectingSeats,setSelectingSeats] = useState([])

  // Seat Mapping
  const seatsColumnsr1  = [ '', '',   '',  '',  '',  '',  '', '8', '9',   '', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '', '22', '23',   '',   '',   '',   '',   '',   '',   ''];
  const seatsColumnsr2  = [ '', '',  '3', '4', '5', '6', '7', '8', '9',   '', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '', '22', '23', '24', '25', '26', '27', '28',   '',   ''];
  const seatsColumns    = ['1', '2', '3', '4', '5', '6', '7', '8', '9',   '', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  const seatsColumns_2  = ['1', '2', '3', '4', '5', '6', '7', '8', '9',   '', '10', '11', '12', '13', '14', '15',   '',   '',   '',   '',   '',   '', '', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  const seatsColumns_1  = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',   '',   '',   '',   '',   '',   '', '',   '', '23', '24', '25', '26', '27', '28', '29', '30'];
  const seatsRows       = ['A', 'B', 'C', 'D', 'E', 'F', 'G',  '', 'H', 'I',  'J',  'K',  'L',  'M',   '',  'O'];

  // Get Post URL
  const URL = (process.env.REACT_APP_URL).concat('/api/v1/ticketing/booking')

  // send Post Seat
  const sendPostSeat = async (uniqueSeats) => {
    try {
        const res = await axios.post(URL, {'name':uniqueSeats}, {withCredentials:true});
        console.log(res.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  };

  //Get Seat Data
  useEffect(() => {    
    axios
      .get(URL)
      .then(res => {
        setSeats(res.data)
        console.log(res)
      })
      .catch(err => {
      })
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
      .get(URL)
      .then(res => {
        setSeats(res.data)
      })
      .catch(err => {
      })
    }, 60000)
    return () => clearInterval(intervalId);
  }, [])
  
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

    if (even.length === 0) {
      OnlyUnique(Selected)
    }
    else {
      RemoveEven(Selected, n)
      OnlyUnique(seatsOdd)
    }

    if(uniqueSeats.length !== 0 && uniqueSeats.length < 6)
    {
      console.log("Final Selected: " + uniqueSeats);
      sendPostSeat(uniqueSeats)
      setTimeout(() => navigate("/FI"), 500)
    }
    else if(uniqueSeats.length > 5){
      Swal.fire('Jumlah pembelian maks adalah 5 tiket')
    }
    else {
      Swal.fire('Please Select Seats')
    }
  };
  
  const seatsGenerator = () => {
    return (
      <table id="seatsBlock">
        <tbody>
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
                      <label className = 'Seat-label' for={`${row}${column}`}>
                        <h4>
                          {`${row}${column}`}
                        </h4>
                      </label>
                    </td>
                )
              })}
              </tr>

              // Row B
              :
              row ==='B'
              ?
              <tr key={index}>
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
                      <label className = 'Seat-label' for={`${row}${column}`}>
                        <h4>
                          {`${row}${column}`}
                        </h4>
                      </label>
                    </td>
                  )
              })}
              </tr>

              // Row O Paling Belakang
              :
              row === 'O'
              ?
              <tr key={index}>
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
                      <label className = 'Seat-label' for={`${row}${column}`}>
                        <h4>
                          {`${row}${column}`}
                        </h4>
                      </label>
                    </td>
                )
              })}
              </tr>

              // Row M 2 Paling Belakang
              : 
              row === 'M'
              ?
              <tr key={index}>
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
                      <label className = 'Seat-label' for={`${row}${column}`}>
                        <h4>
                          {`${row}${column}`}
                        </h4>
                      </label>
                    </td>
                )
              })}
              </tr>

              // Lain
              :
              <tr key={index}>
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
                      <label className = 'Seat-label' for={`${row}${column}`}>
                        <h4>
                          {`${row}${column}`}
                        </h4>
                      </label>
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
    <div className='Seat-body'>
      <PageHeader title={"Seat Selection"} bgColour="true"/>
      <div className="Seat-container">
        <ul className="Seat-type">
          <li className="smallBox greenBox">Kursi Dipilih</li>
          <li className="smallBox redBox">Kursi Terpesan</li>
          <li className="smallBox emptyBox">Kursi Kosong</li>
        </ul>
        <div className="Seat-screen">
          <h2>Panggung</h2>
        </div>
        <div className="Seat-structure" style={{overflowX:'auto'}}>
          {seatsGenerator()}
        </div>
        <ModalImage className='Seat-modal' small={img1} large={img} alt='harga'/>
        <div className = "Seat-btn">
          <Button 
            onClick={() => {SelectSeats()}}
            buttonStyle = 'primary'
            buttonSize = 'btn--wide'
            buttonColor = 'red'
            > Pesan Kursi
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SeatDum
