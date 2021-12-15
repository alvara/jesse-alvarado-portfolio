// TODO: Add logo and favicon
// import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import { Router, Routes } from 'react-router';

import Home from "./pages/Home";

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
   </Router>
  );
}

export default App;
