import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Science from '../pages/Science/Science';

const Main = () => {

  useEffect(() => {

  }, [])

  return (
    <>
      <div>
        <Register/>
         {/* <Login/> */}
        {/* <Science /> */}
      </div>
    </>
  );
};

export default Main;