import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import image from '../image/login.png';
import { BiSolidUser } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { BiSolidPhone } from 'react-icons/bi';
import { RiLockPasswordFill } from 'react-icons/ri';
function Signup() {
    const [inp, setInp] = useState({});
    const history = useNavigate();
    const changehandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInp({ ...inp, [name]: value })
    }
    const submitbtn = async (e) => {
        e.preventDefault();
        await axios.post("https://foodwindd.onrender.com/signup", inp)
    .then(res => {
        alert(res.data.message)
        if(res.data.message==="Successfully Submitted"){
            history("/login")
        }
    })

    }


    return (
        <div className="container-s">
            
            <div className="first-half">
                <h1 className="h1-s">Sign Up</h1>
                <form onSubmit={submitbtn}>
                    < div className="inpp-div">
                        <BiSolidUser className="logi" /> <input type="text" name="name" placeholder="Name" onChange={changehandler} value={inp.name} required ></input>
                    </div>
                    <div className="inpp-div">
                        <MdEmail className="logi" /> <input type="email" name="email" placeholder="Email" onChange={changehandler} value={inp.email} required></input>
                    </div>
                    <div className="inpp-div">
                        <MdLocationOn className="logi" /><input type="text" name="location" placeholder="Location" onChange={changehandler} value={inp.location} required ></input>
                    </div>
                    <div className="inpp-div">
                        <BiSolidPhone className="logi" /><input type="text" pattern="[0-9]{10}" name="phone" placeholder="Phone" onChange={changehandler} value={inp.phone} required></input>
                    </div>
                    <div className="inpp-div">
                        <RiLockPasswordFill className="logi" /><input type="password" name="password" placeholder="Password" onChange={changehandler} value={inp.password} required ></input>
                    </div>
                    <div className="button-r">
                        <button className="tt" type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
            <div className="second-half">
                <img className="image-s" src={image}></img>
                <h5 style={{display:"block"}}> <Link style={{textDecoration:"none" ,color:"blue"}} to="/login" >Already Registered </Link> </h5>
            </div>
        </div>
    );
};

export default Signup;