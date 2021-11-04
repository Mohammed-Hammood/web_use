import logo from './logo.svg';
import HomePage from './assets/js/home.js';
import Contact from './assets/js/contact.js';
import NotFount from './assets/js/not-found.js';
import './assets/css/style.scss';
import {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <div className="NavBar-container">
            <Link to='/'>Веб Юз</Link>
            <Link to='/contact'>Контакты</Link>
        </div>
        <div className="body-container" >
          <Routes>
            <Route exact path='/' element={ <HomePage /> } />
            <Route path='/contact' element={ <Contact />} />
            <Route path='*' element={ <NotFount />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
