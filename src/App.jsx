import React from 'react'
import About from '../src/components/About';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
}

export default App