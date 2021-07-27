import React,{Component} from 'react'

class Header  extends Component{
render(){return( <header>
<nav>
 
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" >
                        <img style={{width:'20%',height:' 40px', objectFit:' fill'}} src="/media/logo.png"
                            className="me-2" height="20" alt="logo" loading="lazy" />
                        <small>Online HTML 5 editor</small>
                    </a>
                </div>
            </nav>
        </nav>
</header>
)}}
export default Header