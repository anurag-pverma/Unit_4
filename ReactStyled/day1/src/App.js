import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { Title, Button } from './Components/Styled1.style';
import Styled2 from './Components/Styled2';


const Heading = styled.h3`
background-color: magenta;
color: teal;
border: 1px solid black;
/* font-size: 20px; */
border-radius: 5px;
height: 50px;
width: 150px;


`


function App() {
  return (
    <div className="App">

      <Heading as="a" href="https://facebook.com">
      <p>this is my heading </p>
      </Heading>



      <Title>


      <p>Hello India</p>
      </Title>

      <Button>

      <button><Title>
      Click ME</Title></button>
      </Button>

      <Styled2/>
      

    </div>
  );
}

export default App;
