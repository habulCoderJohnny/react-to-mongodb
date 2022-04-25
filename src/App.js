import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';
import FormBasic from './components/FormBasic';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='user/add' element={<AddUser/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/forms' element={<FormBasic></FormBasic>}></Route>

      </Routes>
     

    </div>
  );
}

export default App;
