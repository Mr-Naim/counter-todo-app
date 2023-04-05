import React from "react";
import { useSelector } from "react-redux";
import { todoDeleteAlert } from "./todoDeleteAlert";
import { todoEditAlert } from "./todoEditAlert";

const TodoList = () => {

    const todoItems=useSelector((state)=>state.todo.value);


    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Task Name</th>
                  <th>Edit</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {
                todoItems.map((item, index) => {
                  return (
                    <tr /*key={index.toString()}  not sure what is this, without this result remains the same */>
                      <td className="px-4">{index+1}</td>
                      <td className="px-4">{item}</td>
                      <td>
                        <button onClick={()=>{todoEditAlert(item,index)}} className="btn btn-sm btn-dark">Edit</button>
                      </td>
                      <td>
                        <button onClick={()=>{todoDeleteAlert(index)}} className="btn btn-sm btn-danger">Remove</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}
 
export default TodoList;