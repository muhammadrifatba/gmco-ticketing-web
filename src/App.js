
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import SeatFunc from './components/SeatFunc'
import TicketReservation from './components/pages/TicketReservation/TicketReservation';
import SeatDum from './components/SeatDum';


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/BuyTicket' element={<TicketReservation/>}/>
          <Route path='/1' element={<SeatDum/>}/>
          

        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
