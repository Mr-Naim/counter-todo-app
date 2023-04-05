import React from "react";
import Counter from "../components/counter/counter";

const CounterPage = () => {
    return ( 
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-md">
                <Counter/>

            </div>
            
        </div>

    </div> );
}
 
export default CounterPage;