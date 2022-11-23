import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "./institute.css"

const Institute = () => {
  let [institute, setinstitute] = useState([]);
  let [faculty, setfaculty] = useState([]);
  let [facultyinfo, setfacultyinfo] = useState([]);
  let [facultydata, setfacultydata] = useState([]);
  let [real, setreal] = useState(false);
  let [error1, seterror1] = useState(false);

  const navigate = useNavigate();
  console.log(faculty);

  if (res?.data) setfaculty(res.data);
  if (response?.data) setfacultyinfo(response.data);
  let data = JSON.parse(localStorage.getItem('institute')) || [];

  let instituteOncklick = () => {
    localStorage.removeItem('faculty_id');
    if (real) {
      seterror1(false);
      localStorage.setItem('faculty_id', JSON.stringify(faculty));
      navigate('/tests');
    } else {
      seterror1(true);
    }
  }

  var response
  useEffect(() => {
    let rendrFacultyInfo = async () => {
      response = await fetch(`http://localhost:9000/faculty/${faculty}`);
      response = await response.json();
      setfacultyinfo(response?.data);
    }
    rendrFacultyInfo();
    setreal(true);
  }, [faculty]);


  useEffect(() => {
    rendrFaculty();
    setreal(false);
  }, [institute]);

  useEffect(() => {
    console.log(faculty);

  }, [faculty]);

  var res
  let rendrFaculty = async () => {
    res = await fetch(`http://localhost:9000/faculty_inst/${institute}`);
    res = await res.json();
    setfacultydata(res?.data);
    console.log(faculty);
  }

  return (
    <>
      <div className="container my-5">
        <div className="login-inner">
          {
            error1 ? (<p className="error">Facultc albatta tanlansin yoki boshidan tanlansin</p>)
              : (false)
          }
          <h1>Institute</h1>
          <div className="institute-inner-box card w-50">

            <div className='institute-select-box mt-5' >
              <select className="institute-select form-select w-100" aria-label="Default select example" onChange={(e) => { setinstitute(e.target.value) }} defaultValue="" >
                <option disabled={true} value={""} >-------</option>
                {data.map((option) => (
                  <option key={option.institute_id} value={option.institute_id}>{option.name}</option>
                ))}
              </select>
            </div>

            <div className='institute-select-box institute-select-box-2' >
              <select className="institute-select form-select w-100" aria-label="Default select example" onChange={(e) => { setfaculty(e.target.value) }} defaultValue="" >
                <option disabled={true} value={""} >-------</option>
                {
                  facultydata.map((option) => (
                    <option key={option.faculty_id} value={option.faculty_id}>{option.name}</option>
                  ))
                }
              </select>
            </div>

            <div className="card w-75 mb-3">
              <p className='m-3'>{facultyinfo.name}</p>
              <div>
                <div className='grand-box'>
                  <strong>Grand</strong>
                  <p className='limit'>{facultyinfo.grands}</p>
                  <p className='mark'>{facultyinfo.grand_mark}</p>
                </div>
                <div className='grand-box mt-2 mb-3'>
                  <strong>Kantrakt</strong>
                  <p className='limit'>{facultyinfo.contracts}</p>
                  <p className='mark'>{facultyinfo.contract_mark}</p>
                </div>
              </div>
            </div>

            <button className="btn btn-primary w-50 mb-5" onClick={instituteOncklick}>Keyingis</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Institute;