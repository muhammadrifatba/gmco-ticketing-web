
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />

        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
