import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "./login.css"

const Login = () => {
  useEffect(() => {

  }, [])

  const navigate = useNavigate()
  let [error1, seterror1] = useState(false);
  let [username, setusername] = useState("");
  let [password, setpassword] = useState("");

  var res
  let loginOnclick = async () => {
    localStorage.removeItem('token-user');
    let login = {
      user_name: username,
      password: password
    }
    res = await fetch("http://localhost:9000/login", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(login),
    });
    res = await res.json();
    console.log(res.token);
    if (res.token) {
      seterror1(false);
      localStorage.setItem('token-user', res.token);
      navigate("/science")
    } else {
      seterror1(true);
    }

  }
  return (
    <>
      <div className="container my-5">
        <div className="login-inner">
          {
            error1 ? (<p className="error"> barcha ma'lumotlar to'liq va to'g'ri to'ldirilsin</p>)
              : (false)
          }
          <div className="login-inner-box card w-50">
            <h2 className='mt-5'>LOG IN</h2>

            <input className='form-control w-50' type="text" placeholder='user name' onChange={(e) => { setusername(e.target.value) }} value={username} />
            <input className='form-control w-50' type="text" placeholder='password' onChange={(e) => { setpassword(e.target.value) }} value={password} />
            <button className="btn btn-primary w-50 mb-5 login_btn" onClick={loginOnclick}>Log In</button>
            <div className=' pb-5'>Don't have an account? <Link to={"/register"} >Sign up</Link></div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;