import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './secret.css';
import Pizza from './screen';
import cookie from 'js-cookie';
import Pizzas from './data';
import { useNavigate } from 'react-router-dom';
function Secret() {
  const history = useNavigate();
  const [ip, setIp] = useState("")
  const getdata = async () => {
    try {
      const res = await axios.get('https://foodwindd.onrender.com/secret', { withCredentials: true })
      setIp(res.data);
      if (!cookie.get("jwtokenn")) {
        history("/login")
      }
      /* if (!localStorage.getItem("jwtokenn")) {
          history("/login")
        }*/

    } catch (error) {
      history("/login")
    }
  }
  useEffect(() => {
    getdata();
  }, [])

  return (
    <div>
      <h1 className="h1-h" style={{textAlign:"center"}}> Welcome !  {ip.name}</h1>
      <div className="row">
        {Pizzas.map(pizza => {
          return <div className="col-md-4 boody" >
            <div><Pizza pizza={pizza} /></div>
            
          </div>
        })}
      </div>
      

    </div>
  );
};

export default Secret;