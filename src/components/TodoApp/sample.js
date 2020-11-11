import React, { Component } from 'react'

export default class Sample extends Component {
    state={
        item:["Hello","World"],
        input:""
    }
    handleEdit=(event)=>{
        this.setState({
            input:event.target.value
        })
        console.log(this.state.input)
    }
    setValue=(event)=>{
        console.log(event);
        var result=window.prompt("editText",(this.state.item[event]));
        this.state.item[event]=result;
        this.setState({
            item:this.state.item
        })
        
    }
    render() {
        console.log(this.state.item)
        return (
            <div>
                <input value={this.state.input} onChange={this.handleEdit} />
                <ul>
                {this.state.item.map((data,index)=>(
                    <li key={index}>{data}  <i onClick={()=>this.setValue(index)}> Edit</i></li>
                ))}
                </ul>
            </div>
        )
    }
}
