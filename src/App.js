import "react-rangeslider/lib/index.css";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  const [loanType, setLoanType] = useState("");
  return (
    <div className="App">
      <Navbar />
      <Wrapper />
    </div>
  );
}

export default App;
