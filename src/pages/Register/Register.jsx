import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "./register.css"

const Register = () => {
  const navigate = useNavigate()
  let [error1, seterror1] = useState(false);
  let [fullname, setfulname] = useState("");
  let [username, setusername] = useState("");
  let [password, setpassword] = useState("");
  let [phone, setphone] = useState("");
  let [region, setregion] = useState("Andijon");
  let [gander, setgander] = useState("male");

  const optionsGander = [
    { label: "male", value: "male", },
    { label: "famele", value: "famele", }
  ];

  const optionsRegion = [
    { label: "Andijon", value: "Andijon", },
    { label: "Namangan", value: "Namangan", },
    { label: "Farg'ona", value: "Farg'ona", },
    { label: "Toshkent", value: "Toshkent", },
    { label: "Sirdaryo", value: "Sirdaryo", },
    { label: "Navoiy", value: "Navoiy", },
    { label: "Jizzah", value: "Jizzah", },
    { label: "Qashqadaryo", value: "Qashqadaryo", },
    { label: "Surhandaryo", value: "Surhandaryo", },
    { label: "Samarqand", value: "Samarqand", },
    { label: "Buxoro", value: "Buxoro", },
    { label: "Xorazm", value: "orazm", },
  ];

  var res
  let registerClick = async () => {
    localStorage.removeItem('token-user');

    let registerBody = {
      full_name: fullname.trim(),
      tell_number: phone.trim(),
      user_name: username.trim(),
      region: region.trim(),
      password: password.trim(),
      gander: gander.trim()
    }
    res = await fetch("http://localhost:9000/register", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(registerBody),
    });
    res = await res.json();
    if (res.token) {
      seterror1(false);
      localStorage.setItem('token-user', res.token);
      navigate("/science")
    } else {
      seterror1(true);
    }
  }

  useEffect(() => {

  }, [])

  return (
    <>
      <div className="container my-5">
        <div className="register-inner">
          <div className="register-inner-box card w-50">
            {
              error1 ? (<p className="error"> barcha ma'lumotlar to'liq va to'g'ri to'ldirilsin</p>)
                : (false)
            }
            <h2 className='register-h2'>Royhatdan otish</h2>

            <input className='form-control w-50' type="text" placeholder='Username min-3' onChange={(e) => { setusername(e.target.value) }} value={username} />
            <input className='form-control w-50' onChange={(e) => { setfulname(e.target.value) }} value={fullname} placeholder='Full name' type="text" />
            <input className='form-control w-50' type="text" placeholder='Phone number min-9' onChange={(e) => { setphone(e.target.value) }} value={phone} />
            <input className='form-control w-50' type="text" placeholder='Password min-5' onChange={(e) => { setpassword(e.target.value) }} value={password} />
            <select onChange={(e) => { setregion(e.target.value) }} value={region} className="form-select w-50" aria-label="Default select example">
              {optionsRegion.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            {console.log(region)}
            <select className="form-gander form-select w-50" onChange={(e) => { setgander(e.target.value) }} value={gander} aria-label="Default select example">
              {optionsGander.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <button className="btn btn-primary w-50 register_btn" onClick={registerClick}>Royhatdan otish</button>
            <div style={{fontWeight:"bold"}}>
              Already have an account? 
              <Link className='pl-1' to={"/login"}>Sign in</Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Register;