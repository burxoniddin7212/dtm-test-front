import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "./Rezult.css"

const Result = () => {
  let data = JSON.parse(localStorage.getItem('result'));
  console.log(data);
  return (
    <>
      <div className="container my-5">
        <div className="login-inner inner-result card w-75">



          <div className='my-5'>
            <div className='mx-3' style={{ fontWeight: "bold" }}>
              <Link className='pl-1' to={"/allresult"}>Barcha natijalar</Link>
            </div>
            <div style={{ fontWeight: "bold" }}>
              <Link className='pl-1' to={"/oneresult"}>Shahsiy yutuqlarim</Link>
            </div>
          </div>

          <div>


            <div className='realmadrid'>
              <h5 className='mb-3 mx-5'>Asosiy</h5>
              <div className=' first-block-box-mark'>
                <p>Birinchi block</p>
                <p>{data.first_block}/10</p>
              </div>
              <div className=' first-block-box-mark'>
                <p>Ikkinchi block</p>
                <p>{data.second_block}/10</p>
              </div>
            </div>

            <div>

              <div className='realmadrid-1'>
                <h5 className='talim-real'>Natija</h5>

                <div className=' first-block-box-mark'>
                  <p>Ta'lim muassasi :</p>
                  <p>{data.data.institute}</p>
                </div>
                <div className=' first-block-box-mark'>
                  <p>Yo'nalish :</p>
                  <p>{data.data.faculty}</p>
                </div>
                <div className=' first-block-box-mark'>
                  <p>Ta'lim turi :</p>
                  <p>{data.result}</p>
                </div>
              </div>

            </div>

          </div>

          <div className=' pb-5'> Goo register <Link to={"/"} >Sign up</Link></div>

        </div>
      </div>
    </>
  );
};

export default Result;