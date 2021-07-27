import React, { Component } from 'react'
className Footer extends Component{
    <footer className="text-center text-white" style={{backgroundColor:" #f1f1f1"}}>

    <div className="container pt-4">
        {/* <!-- Section: Social media --> */}
        <section className="mb-3">

            {/* <!-- Facebook --> */}
            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.facebook.com/taha.zalzaly"
                role="button" target="_blank" data-mdb-ripple-color="dark"><i className="fab fa-facebook-f"></i></a>

            {/* <!-- Twitter --> */}
            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://twitter.com/tahazalzali"
                role="button" target="_blank" data-mdb-ripple-color="dark"><i className="fab fa-twitter"></i></a>



            {/* <!-- Instagram --> */}
            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.instagram.com/tahazalzali/"
                role="button" target="_blank" data-mdb-ripple-color="dark"><i className="fab fa-instagram"></i></a>

            {/* <!-- Linkedin --> */}
            <a className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.linkedin.com/in/taha-zalzali-56b532176/" role="button" target="_blank"
                data-mdb-ripple-color="dark"><i className="fab fa-linkedin"></i></a>

        </section>
        {/* <!-- Section: Social media --> */}
    </div>



    <div className="text-center text-dark p-3" style={{backgroundColor:" rgba(0, 0, 0, 0.2);"}}>
        © 2021 Copyright:
        <a className="text-dark" style="text-decoration: none; font-style: bold;" href="#"> Taha Zalzali</a>
</div>
</footer>
};
export default Footer