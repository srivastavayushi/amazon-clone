import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

// components
import {Home} from './components/Home';
import {Header} from './components/Header';
import { Login } from './components/Login';
import { Checkout } from './components/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header/><Home/></>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </Router>
  )
}

export default App