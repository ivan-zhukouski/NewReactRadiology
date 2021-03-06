import React from 'react'
import logo from '../logo.png'
import '../index.css'
import NormalAnatomy from '../contentComponents/CT_normalAnatomy'
import {Route, NavLink} from 'react-router-dom'
import AnatomyPart from '../contentComponents/anatomyPart'



class Header extends React.Component {
  constructor(){
    super()
    this.state = {
      showMenu: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

handleClick() {
  const openMenu = this.state.showMenu;
  this.setState(prevState => {
    return ({
      showMenu: !prevState.showMenu
    })

  });

}
  render(){
    return(
      <header>
         <div className= 'navbar_'>
           <a href="<App/>" className = 'logo_'>
             <img className = 'logoimg' src = {logo}/>
           </a>
         </div>
         <nav>
      		<div className= {this.state.showMenu ? "navtop responsive": "navtop"}>
      			<a href='#' className= "_pink">Home</a>
      			<NavLink to= "/" >CT Normal Anatomy</NavLink>
      			<a href="#">Oncology Cases</a>
      			<a href="#">Other</a>
      			<a href="#">About</a>
      		  <div className="block_search">
      			    <input type="text" className="input_search" />
      			    <button className="btn_search" type="button">Search</button>
      		  </div>
      			<a href="#" onClick={this.handleClick} className="menu_icon">&#9776;</a>
      		</div>
      	</nav>
        <Route path = "/" exact component = {AnatomyPart}/>
      </header>
    )
  }
}

export default Header
