import React, { createContext, useContext, useReducer } from "react";
const CartstateContext=createContext();
const Cartdispatchcontext=createContext();
const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{name:action.name,quantity:action.quantity,image:action.image,category:action.category,varient:action.varient,price:action.price}]
        case "REMOVE":
            let newArr=[...state]
            newArr.splice(action.index,1)
            return newArr;
        case "UPDATE":
            let arr=[...state]
            arr.find((food,index)=>{
                if(food.id===action.id){
                    console.log(food.quantity,parseInt(action.quantity),action.price+ food.price)
                    arr[index]={...food,quantity:parseInt(action.quantity)+food.quantity,price:action.price+food.price}

                }
                return arr;
            })
            return arr
        default:
            console.log("erre in reducer")
    }
}
export const Carprovider=({children})=>{
    const [state,dispatch]=useReducer(reducer,[])
return(
<Cartdispatchcontext.Provider value={dispatch}>
    <CartstateContext.Provider value={state}>
        {children}
    </CartstateContext.Provider>
</Cartdispatchcontext.Provider>
)
}

export const useCart=()=>useContext(CartstateContext);
export const useDispatchcart=()=>useContext(Cartdispatchcontext);