import React from "react";
import About from "./components/About/about";
import Header from "./components/Header/Header";
import TodoApp from "./components/TodoApp/TodoApp";
import {BrowserRouter as Router,Route} from "react-router-dom";

// eslint-disable-next-line 
export default ()=>{
    return(
        <>
            {/* <Header/>
            <About/>
            <TodoApp/> */}
            <Router>
                <Header/>
                <Route path="/" exact component={TodoApp}/>
                <Route path="/about" component={About}/>
            </Router>
        </>
    )
};


