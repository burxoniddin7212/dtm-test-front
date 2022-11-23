import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "./Tests.css"

const Tests = () => {
  if (response?.data) setinfo(response.data);

  let [error1, seterror1] = useState(false);
  let [info, setinfo] = useState([{ tests: [] }, { tests: [] }]);
  const navigate = useNavigate();
  var arry = [];

  var response
  useEffect(() => {
    let defaultFunc = async () => {
      let data = await JSON.parse(localStorage.getItem('faculty_id'));
      response = await fetch(`http://localhost:9000/tests/${data}`);
      response = await response.json();
      setinfo(response.data);
    }
    defaultFunc();
  }, []);

  function onclickVariant(id, variant) {
    console.log(id, variant);
    let findtest = arry?.find(data => +(data.test_id) == id);
    if (findtest) {
      arry = arry.filter(data => +(data.test_id) != id);
      arry.push({ test_id: id.toString(), test_answer: variant })
    } else {
      arry.push({ test_id: id.toString(), test_answer: variant })
    }
  }

  let testClick = async () => {
    seterror1(false);
    console.log(arry.length);
    if (arry.length == 20) {
      let res = await fetch("http://localhost:9000/calculate_result", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          token: (localStorage.getItem('token-user'))
        },
        body: JSON.stringify({
          faculty_id: JSON.parse(localStorage.getItem('faculty_id')),
          tests: arry
        })

      });
      res = await res.json();
      if (res?.data) {
        localStorage.removeItem('result');
        localStorage.setItem('result', JSON.stringify(res?.data));
        navigate("/result");
      }
      console.log(res);
    } else {
      seterror1(true);
    }

  }


  console.log(info);

  return (
    <>
      <div className="container my-5">
        <div className="login-inner">
          {
            error1 ? (<p className="error">Abnavit qilib boshidan ishlang yoki hamm testlarni belgilasg hatlik uchun</p>)
              : (false)
          }
          <h2>Testlar</h2>
          <div className="tests-inner-box card w-50">


            <div>

              {
                info[0].tests.map(data => (
                  <div className='mt-4 mx-2' key={data.test_id}>
                    <p className='mx-1' id={data.test_id}>{data.test_question}</p>
                    <div className='tests-component'>

                      {
                        data.test_variants.map(data1 => (
                          <div key={data1} id={data.test_id}>
                            <input className='mx-1' type="radio" id={data.test_id} name={data.test_id} value={data1} onInput={() => { onclickVariant(data.test_id, data1) }} />
                            <label className='mx-3' htmlFor={data.test_id}>{data1}</label>
                          </div>
                        ))
                      }

                    </div>
                  </div>
                ))
              }

              {
                info[1].tests.map(data => (
                  <div className='mt-4 mx-2' key={data.test_id}>
                    <p className='mx-1' id={data.test_id}>{data.test_question}</p>
                    <div className='tests-component'>

                      {
                        data.test_variants.map(data1 => (
                          <div key={data1} id={data.test_id}>
                            <input className='mx-1' type="radio" id={data.test_id} name={data.test_id} value={data1} onInput={() => { onclickVariant(data.test_id, data1) }} />
                            <label className='mx-3' htmlFor={data.test_id}>{data1}</label>
                          </div>
                        ))
                      }

                    </div>
                  </div>
                ))
              }

            </div>

            {
              error1 ? (<p className="error">Abnavit qilib boshidan ishlang yoki hamm testlarni belgilasg hatlik uchun</p>)
                : (false)
            }
            <button className="btn-test btn btn-primary w-50 register_btn mt-5" onClick={testClick}>Topshirish</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tests;