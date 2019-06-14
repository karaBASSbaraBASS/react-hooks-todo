import React from "react";

const Todo = ({todo, index, completTodo, deleteTodo, indexComplete}) =>{
    return (
        <div role="list" className="ui divided middle aligned listitemWrap">
            <div role="listitem" className="item listitem">
                <div className="right floated content">
                </div>
                <i aria-hidden="true" className="spinner loading icon"></i>
                <i aria-hidden="true" className="certificate loading icon"></i>
                <i aria-hidden="true" className="asterisk loading icon"></i>
                <div className="content">{todo.item}</div>
                <div className="controlls">
                    <button onClick={() => completTodo(index)} className="ui button teal column">
                    {
                        indexComplete ? "Completed":"Complete"
                    }
                    </button>
                    <button onClick={() => deleteTodo(index)} className="ui button red column">
                        Delete
                    </button>
                </div>
                
            </div>

        </div>
    )
}
export default Todo;