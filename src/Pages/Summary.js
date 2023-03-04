import React,{useContext,useEffect,useState} from 'react'
import { Tablenumber } from '../TableNumContext'
import {Cartcontext} from '../CartContext'
import './Summary.css'
function Summary() {
    const {data} =useContext(Tablenumber);
    const {cartState:{cart}} =useContext(Cartcontext)
     const [total,setTotal]=useState(0);
     const [gstCalulated,setgstCalculated]=useState();


     const [name,setName]=useState('');
     const [Email,setEmail]=useState('');

     const gstCalc=(total)=>{
            return total+((total*18)/100);
     }
     useEffect(() => {
   
        setTotal(cart.reduce((acc,curr)=>{
          acc=acc+curr.qty*curr.rate;
          return acc
        },0))

        
        setgstCalculated(gstCalc(total));
      })
  return (
    <>
      <h1 className='heading' >Summary page</h1>
       <p>Table number : {data}</p>

         <div className="inputd-field">
            <span>
                Enter name: <input onChange={(event)=>{
                       setName(event.target.value)
            }} type='text'></input> 
            </span>
            <span>Enter email: <input onChange={(event)=>{
                       setEmail(event.target.value)
            }} type='email'></input> </span>
         </div>
        
        <p>Your Name:{name}</p>
        <p>Your Email:{Email}</p>
        <div className="summary-div">
            <div className="cart-items">
                  {cart.map((val,id)=>{
                    return(
                        <div className='items' >
                                <span>{val.name}</span>
                                <span>{val.rate}</span>
                        </div>
                    )
                  })}
            </div>

            <h1>{total}</h1>


        </div>
             
             <h1>after 18% gst : {gstCalulated}</h1>

    </>
  )
}

export default Summary