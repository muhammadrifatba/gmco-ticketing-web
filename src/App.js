
import './components/style/App.css';
import Navbar from './components/pages/Navbar';
import Footer from './components/pages/Footer'
import Home from './components/pages/HomePage/Home';
import { 
  HashRouter as Router,  
  Route, 
  Routes
} from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import Seat from './components/pages/Seat';
// import SeatFunc from './components/pages/SeatFunc'
import FormInvoice from './components/pages/FormInvoice';
import TCPage from './components/pages/TCPage';



function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Seat' element={<Seat/>}/>
          <Route path='/FI' element={<FormInvoice/>}/>
          <Route path='/TermCondition' element={<TCPage/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
