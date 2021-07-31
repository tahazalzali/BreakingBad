import React,{Component} from 'react'
class Cards extends Component{
render(){
    return(
        <div className=" col-md-4 col-xs-12 col-sm-6">
        <div className="card" style={{maxWidth:"300px"}}>
          <img
            src={this.props.src}
            className="card-img-top container"
            alt="..."
          />
          <div   className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>
            <p className="card-text">
              <small className="text-muted">{this.props.alias}</small>
            </p>
          </div>
        </div>
     </div> 
    )
}
}
export default Cards