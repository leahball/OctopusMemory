import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import GetStarted from "./Components/GetStarted";

function App() {
  return (
    <div className="App">
      <Header />
      <GetStarted />
    </div>
  );
}

export default App;
