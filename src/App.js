
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import FormOne from './components/FormOne';
import FormBelajar from './components/FormBelajar';
import Form from './components/Form'

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/FormOne' element={<FormOne/>} />
          <Route path='/FormBelajar' element={<FormBelajar/>} />
          <Route path='/form' element={<Form/>} />
        </Routes>
    </Router>
  );
}

export default App;
