import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Assignments from './pages/Assignments';
import Grades from './pages/Grades';
import Messages from './pages/Messages';
import Navbar from './components/Navbar';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
    

    
  );
}

export default App;
