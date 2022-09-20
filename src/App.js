
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import FormOne from './components/FormOne';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/FormOne' element={<FormOne/>} />
        </Routes>
    </Router>
  );
}

export default App;
