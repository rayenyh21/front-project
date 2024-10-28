
import './App.css';
import {Route,Routes} from "react-router-dom" 
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Education from './pages/Education';
import Contact from './pages/Contact'
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      </header>
      
    </div>
  );
}

export default App;
