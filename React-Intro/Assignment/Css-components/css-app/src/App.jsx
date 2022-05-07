import "./App.css";
import { Button } from "./Component/Button";
function App() {
  return (
    <div className='App'>
      <Button backgroundColor={"blue"} customColor={"white"}>
        Primary Button
      </Button>
      <Button customBorder={"1px solid"}>Default Button</Button>
      <Button customBorder={"dashed"}>Dashed Button</Button>
      <Button customBorder={"none"}>Ghost Button</Button>
      <Button customColor={"blue"}>Links Button</Button>
    </div>
  );
}

export default App;
