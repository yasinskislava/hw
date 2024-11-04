import { createContext, useEffect, useRef, useState, useContext } from 'react';
import './App.css';

const Context = createContext();
const colours = ["green", "red", "blue", "grey"];

function App() {
  
  const counter = useRef(0);
  const [totalClicks, setTotalClicks] = useState(0);
  useEffect(() => {
    counter.current += 1;
  })
  return (<Context.Provider value={colours[totalClicks % 4]}>
    <button onClick={() => {
      setTotalClicks((prev) => prev + 1);
    }}>Click</button>
    <p>Re-renders counter: {counter.current}</p>
    <Display />
  </Context.Provider>);
}

function Display() {
  const context = useContext(Context);
  console.log(context);
    return <div style={{width: "200px", height: "200px", marginTop: "100px", marginBottom: "40px", backgroundColor: `${context}`}}></div>
}

export default App;
