import React, { useState } from "react";
import './secret.css';
import { useDispatchcart,useCart } from "./contextreducer";

const Orderp = ({ pizza }) => {
    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState("small")
    let dispatch=useDispatchcart();
    let data=useCart();
    let price=pizza.prices[0][varient] * quantity
    const handladdtocart=async()=>{
        await dispatch({type:"ADD",name:pizza.name,quantity:quantity,image:pizza.image,category:pizza.category,varient:varient,price:price})
        alert("Item Add in Cart")
    }
    return (
        <div className="con1">

            <h3 className="h3-p" >{pizza.name}</h3>
            <div className="opt"><img className="iimg" src={pizza.image}></img></div>
            <div className="opt"><p>Category: {pizza.category}</p></div>
            <div className="opt">
                <h4 className="h4v" style={{ float: "left", width: "48%", textAlign: "center" }}>Varient :</h4>
                <h4 className="h4v" style={{ float: "right", width: "48%", textAlign: "center" }}>Qunatity :</h4>
            </div>
            <div className="opt">
                <select className="select1" value={varient} onChange={(e) => { setVarient(e.target.value) }}>
                    {pizza.varients.map(size => {
                        return <option value={size}>{size}</option>
                    })}
                </select>
                <select className="select2" value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                    {[...Array(10).keys()].map((x, i) => {
                        return <option value={i + 1}>{i + 1}</option>
                    })}
                </select>
            </div>

            <div className="opt">
                <h4 className="h4">Price: {price} Rs/-</h4>
                <button className="buttnn" onClick={handladdtocart}>Add To Cart</button>
            </div>

        </div>
    );
};

export default Orderp;

/*  */