import React from 'react'
import Router from './Router'
import {NavLink} from 'react-router-dom'



const Navigation =(props)=>{
  return(
    <nav>
      <NavLink to='/'>Home</NavLink> {' | '}
      <NavLink to='/cart'>Cart</NavLink>
    </nav>
  )
}


class App extends React.Component {

  render() {
    return (
      <div>
        <Navigation/>
        <Router/>
      </div>
    );
  }
}

export default App