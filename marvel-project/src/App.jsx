import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import AddCharacter from './pages/AddCharacter';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-character' element={<AddCharacter />} />
      </Routes>
    </Router>
  )
}

export default App
