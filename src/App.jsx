import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from '../src/components/Auth/SignIn';
import SignUp from '../src/components/Auth/SignUp';
import HomePage from '../src/components/Auth/HomePage';
import Dalle from '../src/components/Dalle/Dalle';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} /> 
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/HomePage" element={<HomePage />} />
        <Route exact path="/Dalle" element={<Dalle />} />
        
      </Routes>
    </Router>
  );
}

export default App;