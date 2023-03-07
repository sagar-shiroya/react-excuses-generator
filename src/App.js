import { useState } from "react";
import "./App.css";
import Axios from "axios";
import { Footer } from "./Footer";

function App() {
  const [excuse, setExcuse] = useState("");

  const generateExcuse = (category) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`)
      .then((res) => res.data[0])
      .then((res) => setExcuse(res.excuse));
  };
  return (
    <div className="App">
      <h1>Excuses Generator</h1>
      <div>
        <button onClick={() => generateExcuse("family")}>Family</button>
        <button onClick={() => generateExcuse("office")}>Office</button>
        <button onClick={() => generateExcuse("college")}>College</button>
        <button onClick={() => generateExcuse("party")}>Party</button>
        <button onClick={() => generateExcuse("developers")}>Developers</button>
        <button onClick={() => generateExcuse("funny")}>Funny</button>
      </div>
      <h2>{excuse}</h2>
      <Footer />
    </div>
  );
}

export default App;
