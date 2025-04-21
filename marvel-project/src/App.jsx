import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import AddCharacter from './pages/AddCharacter';
import EditCharacter from './pages/EditCharacter';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-character' element={<AddCharacter />} />
        <Route path='/edit-character/:id' element={<EditCharacter />} />
      </Routes>
    </Router>
  )
}

export default App
