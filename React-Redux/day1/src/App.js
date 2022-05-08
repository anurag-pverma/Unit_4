import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Todos from './Components/Todos';
import SingleTodo from './Components/SingleTodo';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">


     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/todos/*' element={<Todos/>}/>
    <Route path=':id' element={SingleTodo}/>


     </Routes>

      
    </div>
  );
}

export default App;
