import React, { Component } from 'react'
import './TodoApp.css';

export default class TodoApp extends Component {

    state = {
        input: "",
        items:["Hello"]
    }
    
    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            input:event.target.value
        })
    }

    storeItem=(event)=>{
        event.preventDefault();
        
        const {input}=this.state;
        
        this.setState({
            items:[...this.state.items,input],
            input:""
        });



    }

    deleteItem=(event)=>{

        this.setState({
            items:this.state.items.filter((data,index)=>index!==event)
        })
    }

    render() {
        const{ input,items }=this.state
        
        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeItem}>
                    <h1>Todo App</h1>
                    <input
                        type="text"
                        placeholder="Enter the task"
                        value={input}
                        onChange={this.handleChange}
                    />
                </form>
                <ul>
                    {items.map((data,index)=>(
                        <li key={index}>{data} <i onClick={()=>this.deleteItem(index)} className="fas fa-trash-alt"></i></li>
                    ))}
                    
                </ul>

            </div>
        )
    }
}
