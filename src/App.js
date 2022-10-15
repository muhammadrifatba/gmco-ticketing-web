
import './components/style/App.css';
import Navbar from './components/pages/Navbar';
import Footer from './components/pages/Footer'
import Home from './components/pages/HomePage/Home';
import { 
  HashRouter as Router,  
  Route, 
  Routes
} from 'react-router-dom'
import Seat from './components/pages/Seat';
import FormInvoice from './components/pages/FormInvoice';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Seat' element={<Seat/>}/>
        <Route path='/FI' element={<FormInvoice/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
