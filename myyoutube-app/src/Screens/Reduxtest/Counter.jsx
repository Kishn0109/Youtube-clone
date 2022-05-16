import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { increment } from '../../feature/counter/counterSlice'
function Counter() {
    const dispatch = useDispatch();
    let myname = {
        name:"karan rai"
    }
    return (
        <h1 style={{ color: "white" }} onClick={() => dispatch(increment({ type: "inc", payload: myname}))}>karan is good boy</h1>
    )
}

export default Counter