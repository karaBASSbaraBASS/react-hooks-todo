import React, {useState} from 'react';

function AddTodoForm ({addTodo}) {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };
    return (
        <form className="ui sucsess form customForm" action="">
            <div className="field">
                <label htmlFor="">Add Todo Item</label>
                <div className="ui input">
                    <input 
                        type="text"
                        placeholder="Add todo item"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="ui button yellow  column" onClick={handleSubmit}>
                        add
                    </button>
                </div>
                
            </div>
        </form>
    )
}
export default AddTodoForm;