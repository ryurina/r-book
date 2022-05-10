import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <br />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about'  element={<About />} />
        <Route path='/contact'  element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
