import React, { useRef } from 'react';
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import { app } from "./firebaseConfig"; // Importa Firebaseù

function App() {
  const progettiRef = useRef(null);
  return (
    <>
      <Navbar />
      <Presentation progettiRef={progettiRef}/>
    </>
  );
}

export default App;
