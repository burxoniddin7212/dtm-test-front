import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "./Allresult.css"

let Allresult = () => {
  var [data, setdata] = useState([{}]);
  var response

  if (response?.data) {
    setdata(response.data);
  }
  let defaultFunc = async () => {
    response = await fetch(`http://localhost:9000/result`);
    response = await response.json();
    setdata(response.data);

    console.log(response.data);
  }

  useEffect(() => {

    defaultFunc();
  }, [setdata]);


  return (
    <>
      <div className="container my-5">
        <div className="login-inner">
          <div className="login-inner-box card w-75">
            <h2>Imtihon g'oliblari</h2>



            {/* <div className='item-list w-75'>
              <div className='item-iiner-box'>
                <p>ID</p>
              </div>
              <div className='item-iiner-box'>
                <p>Ismi</p>
              </div>
              <div className='item-iiner-box'>
                <p>Yonalish</p>
              </div>
              <div className='item-iiner-box'>
                <p>Sana</p>
              </div>
              <div className='item-iiner-box'>
                <p>Ball</p>
              </div>
              <div className='item-iiner-box'>
                <p>Vaqt</p>
              </div>
            </div> */}

            {
              response.data.forEach(info => {
                <p>salom</p>
              })

            }






          </div>
        </div>
      </div>
    </>
  );
};

export default Allresult;