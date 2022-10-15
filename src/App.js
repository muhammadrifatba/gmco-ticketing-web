
import './components/style/App.css';
import Navbar from './components/pages/Navbar';
import Footer from './components/pages/Footer'
import Home from './components/pages/HomePage/Home';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Routes
} from 'react-router-dom'
import SeatFunc from './components/pages/SeatFunc'
import SeatInvoice from './components/pages/SeatInvoice';
import TicketReservation from './components/pages/TicketReservation/TicketReservation';
import SeatDum from '../src/components/pages/SeatDum';
import FormInvoice from './components/pages/FormInvoice/FormInvoice';
import TCPage from './components/pages/TCPage/TCPage'


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/BuyTicket' element={<TicketReservation/>}/>
          <Route path='/1' element={<SeatDum/>}/>
          <Route path='/Invoice' element={<SeatInvoice/>}/>
          <Route path='/FI' element={<FormInvoice/>}/>
          <Route path='/TCPage' element={<TCPage/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
