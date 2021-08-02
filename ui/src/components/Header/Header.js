import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
class Header extends Component {
render() {
return (
<div className="callout headcolor" id="Header">
<div className="row column" >
    <div className="div-button-set">
    <a href="/" style={{textDecoration:"none",color:"#444444"}}><button className="button-set">Home</button></a>
<a href="/login" style={{textDecoration:"none",color:"#444444"}}><button className="button-set">Login </button></a>
<a href="/signup" style={{textDecoration:"none",color:"#444444"}}><button className="button-set">Sign Up</button></a>
</div>

</div>
</div>
);
}
}
export default Header;