import React from 'react';
import '../App.css';
import axios from 'axios';

class Form extends React.Component{

    handleFormSubmit = (event) => {
        // event.preventDefault();
        const title = event.target.elements.title.value;
        console.log(title);
        axios.post('http://127.0.0.1:8000/api/',{
            title:title
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));

    }
    
render(){
    return(
        <form onSubmit={this.handleFormSubmit}>
        <input type="text" name="title" placeholder="New Item" autocomplete="off"></input>
                     
        <button type="submit" name="list" value="today">+</button>

        </form>              
    )
}
}

export default Form;


{/* <input type="text" name="newItem" placeholder="New Item" autocomplete="off"></input>
                     
                      <button type="submit" name="list" value="today">+</button> */}