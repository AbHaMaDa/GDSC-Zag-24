import React from 'react';


 export default function Navbar(){
    return (
        <nav className='nav flex'>
            <div className='left flex' >
                <img src='./logo192.png'/>
                <h3> ReactFacts</h3>
            </div>
            <h4 className='right'>React Course - Project 1</h4>
        </nav>
    )
}