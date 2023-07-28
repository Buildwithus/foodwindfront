import React, { useEffect, useState } from "react";
import cookie from 'js-cookie';
import axios from 'axios';
import Loader from './loader'
import { useNavigate } from "react-router-dom";
const MyOrder = () => {
    const [veiw, setVeiw] = useState({})
    const history = useNavigate();
    const [loading, setLoading] = useState(false)

    const getdata = async () => {
        try {
            const {data} = await axios.get("https://foodwindd.onrender.com/secret/getorder",{ withCredentials: true })
            setVeiw(data);
            setLoading(true)
            if (!cookie.get("jwtokenn")) {
                return history("/login")
            }
        } catch (error) {
           console.log(error)
            
        }
       
    }
    useEffect(() => {
        getdata();
    }, [])

    let arr = []
    arr = Array(veiw.content).flat(2)
    if (arr.length===0) {
        return (
            <h2>your cart is empty</h2>
        )
    }
    return (
        <div>
            <h1 className="h1-h" style={{textAlign:"center"}}>My Orders</h1>

            <div className="tablecon">
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Varient</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    { loading ? arr.map((d, i) => (
                        <tbody>
                            <tr>
                                <td>{i + 1}</td>
                                <td>{d?.name}</td>
                                <td>{d?.quantity}</td>
                                <td>Rs/- {d?.price}</td>
                                <td>{d?.varient}</td>
                                <td>{d?.category}</td>
                            </tr>
                        </tbody>
                    )):<Loader></Loader> }

                </table>

            </div>



        </div>
    );
};

export default MyOrder;
/** */