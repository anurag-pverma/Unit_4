// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LogIn from './pages/LogIn';
import Post from './pages/Post/Post';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>

      <Route path="/Navbar" element={<Navbar/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/LogIn:category" element={<LogIn/>}/>
      <Route path="/Post:Category" element={<Post/>}/>
      {/* agar koi bhi page nahi rahe to 404 wala chelega  */}
      <Route path="*" element={<h2> Error 404 Page not found</h2>}/>
                     
                          
      </Routes>
      
      <div><h1> This is my website</h1></div>

 
    </div>
  );
}

export default App;
