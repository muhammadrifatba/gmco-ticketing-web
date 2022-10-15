
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
import SeatInvoice from './components/pages/SeatInvoice';
import SeatDum from './components/pages/SeatDum';
import FormInvoice from './components/pages/FormInvoice';
import TCPage from './components/pages/CommonHeader/TCPage'

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Seat' element={<SeatDum/>}/>
          <Route path='/FI' element={<FormInvoice/>}/>
          <Route path='/TermCondition' element={<TCPage/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
