
import './App.css';
import Navbar from './componenst/Navbar';
import Home from './componenst/pages/HomePage/Home';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />

        </Routes>
    </Router>
  );
}

export default App;
