import React from "react";
import { useCart, useDispatchcart } from "./contextreducer";
import cookie from 'js-cookie';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const data = useCart();
    const history = useNavigate();
    const dispatch = useDispatchcart();
    const totalprice = data.reduce((total, food) => total + food.price, 0)
    const orderpi = async () => {
        await axios.post("https://foodwindd.onrender.com/secret/orderdata", { content: data })
            .then(res => {
                alert(res.data.message)
                if (res.data.message === "Item Ordered Successfully") {
                    history("/secret")
                }
            })
    }
    if (data.length === 0) {
        return (
            <h2 className="h1-h" style={{textAlign:"center"}}>your cart is empty</h2>
        )
    }

    return (
        <div className="cartdiv">
            <h1 className="h1-h" style={{textAlign:"center"}}>My Cart</h1>

            {data.map((item) =>
                <div className="cartitem">
                    <div className="cart1"><img className="iimgg" src={item.image}></img></div>
                    <div className="cart2">
                        <h4 className="h4-c">{item.name}</h4>
                        <h4 className="h4-c">{item.category}</h4>
                        <h4 className="h4-c">Rs/- {item.price}</h4>
                        <h4 className="h4-c">{item.quantity}</h4>
                        
                        <button className="cartb" onClick={() => { dispatch({ type: "REMOVE" }) }}>DELETE </button>
                    </div>
                </div>
            )}

            <div className="cartitem" style={{ marginTop: "3rem",display:"block" }}>
                <button className="cartb" style={{float:"right",backgroundColor:"green"}} onClick={orderpi}>ORDER</button>
                <h4 className="h4-c">Total Price: {totalprice} Rs/-</h4>
            </div>



        </div>
    );
};

export default Cart;