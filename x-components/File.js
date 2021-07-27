import React,{Component} from 'react';

class File extends Component{
method(name){
return(name);
}

    render(){

        const m= "taha1";
    const t=this.method("taha2");
    return(
    <h1>{m} {t}</h1>
        )
}

}
export default File;