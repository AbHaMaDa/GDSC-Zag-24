import React from 'react';
import "./Navbar.css"
class Navbar extends React.Component{
    render(){
        return(
            <div className='nav'>
            <h1>Logo</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>store</li>
                <li>help</li>
                <li>contact us</li>
            </ul>
            
            </div>
        )
    }
}


export default Navbar;