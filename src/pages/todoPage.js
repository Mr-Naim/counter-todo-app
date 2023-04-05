import React from "react";
import CreateTodo from "../components/todo/createTodo";
import TodoList from "../components/todo/todoList";

const TodoPage = () => {
    return ( 
        <div className="container my-5">
            <div className="row">
                <div className="col-12">
                   <div className="card">
                    <div className="card-header py-3 bg-dark">
                        <h5 className="text-white">My Todo App</h5>

                    </div>
                    <div className="card-body">
                        <CreateTodo/>
                        <TodoList/>
                    </div>
                   </div>
                </div>
            </div>
        </div>
     );
}
 
export default TodoPage;