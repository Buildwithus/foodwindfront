import React, { useState } from "react";
import image from '../image/register.png';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import cookie from 'js-cookie';
axios.defaults.withCredentials = true;
const Login = () => {
  const config = {
    Headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true
  }

  const history = useNavigate();
  const [inp, setInp] = useState({});
  const submitbtn = async (e) => {
    e.preventDefault()
    await axios.post("https://foodwindd.onrender.com/login", inp, config)
      .then(res => {
        alert(res.data.message)
        if (res.data.message === "Successfully Login") {
          console.log(res.data.token)
          cookie.set("jwtokenn", res.data.token, { expires: new Date(Date.now() + 1000 * 12000) })
          history("/secret")
        }
      })


  }

  const changehandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInp({ ...inp, [name]: value })
  }
  return (
    <div className="container-s">
      <div className="first-half">
        <h1 className="h1-s">Login</h1>

        <form onSubmit={submitbtn}>
          <div className="inpp-div">
            <MdEmail className="logi" /> <input type="email" name="email" placeholder="Email" onChange={changehandler} value={inp.email} required></input>
          </div>
          <div className="inpp-div">
            <RiLockPasswordFill className="logi" /> <input type="password" name="password" placeholder="Password" onChange={changehandler} value={inp.password} required ></input>
          </div>

          <div className="button-r">
            <button className="tt" type="submit">Login</button>
          </div>

        </form>
      </div>
      <div className="second-half">
        <img className="image-s" src={image}></img>
        <h5><Link style={{textDecoration:"none" ,color:"blue"}} to="/signup" >Create Account </Link></h5>
      </div>

    </div>
  );
};

export default Login;