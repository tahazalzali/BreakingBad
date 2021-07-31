import React, { Component } from 'react'
class Footer extends Component{
    render(){
        return(
  
   <footer className="text-center text-white" style={{backgroundColor:" #f1f1f1"}}>
        
        <div className="container pt-4">
  
            <section className="mb-3">

              
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.facebook.com/taha.zalzaly"
                    role="button" target="_blank" rel="noreferrer" data-mdb-ripple-color="dark"><i className="fab fa-facebook-f"></i></a>



                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://twitter.com/tahazalzali"
                    role="button" rel="noreferrer"  target="_blank" data-mdb-ripple-color="dark"><i className="fab fa-twitter"></i></a>


                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.instagram.com/tahazalzali/"
                    role="button" rel="noreferrer"  target="_blank" data-mdb-ripple-color="dark"><i className="fab fa-instagram"></i></a>


                <a className="btn btn-link btn-floating btn-lg text-dark m-1"
                   rel="noreferrer"  href="https://www.linkedin.com/in/taha-zalzali-56b532176/" role="button" target="_blank"
                    data-mdb-ripple-color="dark"><i className="fab fa-linkedin"></i></a>

            </section>
      
        </div>
   

        
        <div className="text-center text-dark p-3" style={{backgroundColor:" rgba(0, 0, 0, 0.2)"}}>
            © 2021 Copyright:
            <a className="text-dark" style={{textDecoration:" none", fontStyle:" bold"}} href="/"> Taha Zalzali</a>
        </div>
       
    </footer>

)}
}
export default Footer