import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Home, Landing, Form, Detail} from "./Views";
import { Route, Routes, useLocation } from 'react-router-dom';
import { getCountries } from './redux/actions';



function App() {
  // const location = useLocation()
  
  return (
    <div className="App">
     {/* {location.pathname !== "/" && <NavBar/>} */}
   <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
