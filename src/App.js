
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import Form from './components/Form'

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/form' element={<Form/>} />
        </Routes>
    </Router>
  );
}

export default App;
