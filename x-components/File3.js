import React,{Component} from 'react';
class File3 extends Component {
constructor (){
super();
this.state={fileNum : 3}
}
render(){ 
    return(
        <div>
            <h2>File{this.state.fileNum}</h2>
        </div>
    )
}
}
export default File3;