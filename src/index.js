import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/login'
import Sigin from './components/signin';
import { useState } from 'react';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Result() {
  const [Ruser, Rset] = useState([
    {
      username: 'Aswin',
      password: '1234'
    },
    {
      username: 'Muvina',
      password: '1234'
    }


  ])
  return (
    <div>
      <BrowserRouter>
        <Link to={'/sigin'}></Link>
        <Link to={'/login'}></Link>
        <Link to={'/App'}></Link>
        <Routes>
          <Route path='/Sigin' element={<Sigin Ruser={Ruser} Rset={Rset} ></Sigin>}></Route>
          <Route path='/Login' element={<Login  Ruser={Ruser} Rset={Rset}></Login>}></Route>
          <Route path='/App' element={<App></App>}></Route>

        </Routes>
      </BrowserRouter >
    </div>
  )
}


root.render(
   <Result></Result>
);


