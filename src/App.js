import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

// components
import {Home} from './Home';
import {Header} from './components/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header/><Home/></>}/>
      </Routes>
    </Router>
  )
}

export default App