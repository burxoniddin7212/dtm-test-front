import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom'
import Institute from '../Institute/Institute';
import "./science.css"

const Science = () => {

  const navigate = useNavigate();
  let [firstblock, setfirsblock] = useState("");
  let [secondblock, setsecondblock] = useState("");
  let [secondblockres, setsecondblockres] = useState([]);
  let [respon, setrespon] = useState([]);
  let [ressciense, setressciense] = useState({});
  let [error1, seterror1] = useState(false);


  useEffect(() => {
    firsBlock();
  }, []);

  useEffect(() => {
    secondBlock();
  }, [firstblock]);

  let secondBlock = async () => {
    let res = await fetch(`http://localhost:9000/second_block/${firstblock}`);
    let { data } = await res.json();
    setsecondblockres(data);
  }

  var res
  let firsBlock = async () => {
    res = await fetch("http://localhost:9000/first_block");
    let { data } = await res.json();
    setrespon(data);
  }

  let blockOnclick = async () => {
    localStorage.removeItem('institute');

    let block = {
      first_block: firstblock,
      second_block: secondblock
    }
    res = await fetch("http://localhost:9000/institute", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(block),
    });
    res = await res.json();
    //setressciense(res);
    if (res.data) {
      seterror1(false);
      localStorage.setItem('institute', JSON.stringify(res.data));
      navigate("/institute")
    } else {
      seterror1(true);
      console.log(res);
    }
  }

  return (
    <>
      <div className="container my-5">
        <div className="login-inner">
          <div className="login-inner-box science-inner-box card w-50">

            <div className='w-100 d-flex firs_block-box'>
              {
                error1 ? (<p className="error">Iltimos ikkala blo'k fanni ham tanlang</p>)
                  : (false)
              }
              <div className=' pb-5'><Link to={"/register"} >go register</Link></div>
              <h2 className='mb-5'>Blok testlarga hush kelibsiz</h2>

              <div className='d-flex first-block-box w-75'>
                <p className='m-0 p-0'>Birinchi fan</p>
                <select className="form-select w-50" aria-label="Default select example"
                  onChange={(e) => { setfirsblock(e.target.value) }} defaultValue=""  >
                  <option disabled={true} value={""} >-------</option>
                  {
                    respon.map((option) => (
                      <option key={option.name} value={option.science_id}>{option.name}</option>
                    ))
                  }
                </select>
              </div>

              <div className='w-75 d-flex first-block-box mt-4'>
                <p className='m-0 p-0'>Ikkinchi fan</p>
                <select className="form-select w-50" aria-label="Default select example"
                  onChange={(e) => { setsecondblock(e.target.value) }} defaultValue="" >
                  <option disabled={true} value={""} >-------</option>

                  {
                    secondblockres.map((option) => (
                      <option key={option.name} value={option.science_id}>{option.name}</option>
                    ))
                  }
                </select>
              </div>

            </div>
            <button className='btn btn-primary w-50 mt-5' onClick={blockOnclick}>Keyingisi</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Science;