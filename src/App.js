import React,{useState} from 'react';
import Datastorage from './Components/datastorage';
import Screen from './Components/screen-1'
 import Thankyoumodule from './Components/screen-2'
 import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    // <div>
    //     <Datastorage/>
    // </div>

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Screen />} />
      <Route path="/thankyou" element={<Thankyoumodule />} />
      <Route path="details" element={<Datastorage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
