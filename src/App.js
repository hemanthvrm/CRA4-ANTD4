import logo from "./logo.svg";
import { Button, Switch } from "antd";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ant Design installation</p>

        <Button type="primary">Hellooooooooo</Button>
        <br />
        <Switch defaultChecked />
      </header>
    </div>
  );
}

export default App;
