import React, { Component } from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './footer'

class App extends Component{
  constructor(){
    super();
    this.state={}
  }
render(){
  return(
<div>
<Header />
<Content/>

<Footer />

</div>
  )
}
}
export default App;
