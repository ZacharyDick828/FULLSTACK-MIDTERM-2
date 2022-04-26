// Import dependencies
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import components 
import Home from './components/Home'
import About from './components/About'
import Table from './components/Artists'

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Asheville Electronic Music Database</h1>
          <div className="navBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/artists">Artists</Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="display">
          <Routes>
            <Route path="/" element={Home()} />
            <Route path="/about" element={About()} />
            {/* <Route path="/artists" element={() => <Table artists={artists}/>}  /> */}
            <Route path="/artists" element={Table()} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
