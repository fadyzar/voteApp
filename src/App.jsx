
import './App.css'

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login'
import VotePage from './Pages/VotePage'
import AdminPage from './Pages/AdminPage'; 

function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
        
    </>
  )
}

export default App
