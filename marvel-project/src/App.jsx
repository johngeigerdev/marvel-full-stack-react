import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import AddCharacter from './pages/AddCharacter';
import EditCharacter from './pages/EditCharacter';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import About from './pages/About';

function App() {
  
  //putting searchTerm here so that it can be passed down and used by both child components (navbar and home)
  const [searchTerm, setSearchTerm] = useState('') //this is going to be for the character search feature

  return (
    <Router>
      <NavBar />
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />  {/* passing this down to the NavBar component */}
      <Routes>
        <Route path='/' element={<Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />  {/* passing this down to Home component */}
        <Route path='/about' element={<About /> } />
        <Route path='/add-character' element={<AddCharacter />} />
        <Route path='/edit-character/:id' element={<EditCharacter />} />
      </Routes>
    </Router>
  )
}

export default App
