import './App.css';
import {useEffect, useState} from "react"

function App() {
  // let zahl = 15
  const [zahl, setZahl] = useState(0)
  const [colour, setColour] = useState("black")
  
  useEffect(() => {
    console.log("Farbe wurde geändert")
  }, [colour])

  function reset(){
    setZahl(0)
  }
  
  function resetColour(){
    setColour("black")
  }

  return (
   <>
   <p>Meine Lieblingszahl ist {zahl}</p>

   <button onClick={() => setZahl(zahl + 1) }>+</button>
   <button onClick={() => setZahl(zahl - 1) }>-</button>
   <button onClick={reset()}>Reset</button>

   <h1 style={{color: colour}}>Ich bin eine Überschrift</h1>
   <button onClick={() => setColour("blue")}>Ändere die Farbe zu blau</button>
   <button onClick={() => setColour("green")}>Ändere die Farbe zu grün</button>
   <button onClick={() => setColour("orange")}>Ändere die Farbe zu orange</button>
   <button onClick={() => setColour("red")}>Ändere die Farbe zu rot</button>
   <button onClick={resetColour()}>Ändere die Farbe zurück</button>
   </>
  );
}

export default App;