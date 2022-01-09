import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import GetStarted from "./Components/GetStarted";

function App() {
  return (
    <div className="App">
      <Header />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
