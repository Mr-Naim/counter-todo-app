import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setCustom } from "../../redux/state/counter/counterSlice";

const Counter = () => {

    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    const myNumber=useRef();


    return ( 
        <div className="card">
            <div className="card-header py-3 bg-secondary">
                <h4 className="text-white">
                    My Counter App
                </h4>
                
            </div>
            <div className="card-body">
                <h1>{count}</h1>
                <div className="my-4">
                    <button onClick={()=>{dispatch(increment())}} className="btn btn-success">Increase</button>
                    <button onClick={()=>{dispatch(decrement())}} className="btn mx-2 btn-danger">Decrease</button>

                </div>
                <div className="my-4">
                    <input ref={myNumber} className="form-control w-50" type="number" />
                    <button onClick={()=>dispatch(setCustom(myNumber.current.value))} className="btn w-25 my-2 btn-secondary">Set Custom</button>
                </div>


            </div>

        </div>
     );
}
 
export default Counter;