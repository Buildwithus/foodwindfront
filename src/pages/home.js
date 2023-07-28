import React from "react";
import { Link } from "react-router-dom";
import homi from "../image/homi.png";
const Home = () => {

    return (
        <div className="container-h">
            <div className="first-h">
                <div className="con-h">
                    <h1 className="h11">Food</h1>
                    <h3 className="h33">Delivery</h3>
                    <p className="ppp">Welcome ! To the Foodwind. Are you hungry ? Don't Wait ! Let's Start Order Food Now ? Explore different type of pizzas with best price in your city.</p>
                    <button className="carth" > <Link style={{textDecoration:"none",color:"white"}} to="/signup">SIGN UP</Link></button>
                </div>

            </div>
            <div className="second-h">
                <div className="con-h">
                    <img className="homimg" src={homi}></img>
                </div>
            </div>

        </div>
    );
};

export default Home;