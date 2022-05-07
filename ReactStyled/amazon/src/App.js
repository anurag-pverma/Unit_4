import logo from './logo.svg';
import './App.css';
import AmazonCard from './Components/AmazonCard';
import AppleCard from './Components/Apple';

function App() {
  return (
    <div className="App">
     <AmazonCard/>
     <br />
     <br />
     <AmazonCard/>
     <br />
     <br />
     <AppleCard/>
    </div>
  );
}

export default App;
