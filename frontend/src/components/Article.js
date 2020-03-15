import React from 'react';
import '../App.css';
import Form from './Form';
import axios from 'axios';

 
function Article(props) {
   function handleDelete(event){
        const check=event.target.value;
        
        axios.delete(`http://127.0.0.1:8000/api/${check}`);
        // console.log(parseInt(check)+1);
        console.log(check);
        setTimeout(function(){ window.location.reload(false); }, 100);
        
    }
    let item=[];
        
        
        for(let i=0;i<props.data.length;i++){
            
            // console.log(props.data[i].title);
            item.push(
            
            <div className="item">
            <input type="checkbox" name="item" value={props.data[i].id} onChange={handleDelete}></input>
            <p>{props.data[i].title}</p>
            </div>
             );
        }

         
     
    return (
        <div>
                <div className="box" id="heading">
                   <h1>Today</h1>
                    </div>
                        <div className="box">
                        
                        {/* <div className="item">
                        <input type="checkbox"></input>
                        <p>mala</p>
                        </div>   */}
                      {item}  

                      <Form></Form>
                     {/* <input type="text" name="newItem" placeholder="New Item" autocomplete="off"></input>
                     
                      <button type="submit" name="list" value="today">+</button> */}
                                 
                </div>
        
        </div>
    );
                   
 
                
}

export default Article; 