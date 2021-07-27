import React,{Component} from 'react';

class File2 extends Component{
method(){
    return(<div>Method</div>)
}
    render() {


        return (
        <div>
            <h1>{this.props.name} {this.props.family}</h1>
        </div>
    )
}

}
export default File2;