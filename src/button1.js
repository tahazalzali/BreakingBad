
import React, { Component } from 'react'
import Cards from './Cards'
import API from './FastAPI'
var api = API.drivers;
class Button1 extends Component {
    constructor() {
        super();
        this.state = {
            api: api,
            members: [],
            counter: 0
        }


        this.click = this.click.bind(this);
    }
    click() {
  
        this.setState(
            prevState=> {
                    return { counter: prevState.counter +1 }
                }
            );
            // for(var i=0; i<this.state.counter;i++){ 
                if(this.state.counter<this.state.api.length){
this.state.members.push(this.state.api[this.state.counter]); 
 this.newOne=this.state.members.map(
actor =>{
return<Cards key={actor.uid} name={actor.name} alias={actor.alias} src={actor.image}/>

}

)}
else{
    return this.finish=  <div style={{color:"red"}}> all actors are shown "</div>
}

      
       
        //     console.log(this.state.members)
        //     var pushing=this.state.members.push("t"); 
        //         }                                         
                                 

    }


    render() {
        return (
            <div  style={{minHeight:"500px"}}>
            <div className="card-group" >
            {this.newOne}
          </div>
            <div  style={{ textAlign: "center" }}>
            {this.finish}
                <button onClick={this.click} className="btn btn-primary">Add actor</button></div>
                 
            </div>
        )
    }
}
export default Button1