import { useEffect, useState } from "react";
import '../Ver_Navbar.css';
import logo1 from '../Icon1.png';
import logo2 from '../Icon2.png';
import logo3 from '../Icon3.png';
import logo4 from '../Icon4.png';
import logo5 from '../Icon5.png';
import logo6 from '../Icon6.png';

const Ver_SideNavbar = () => {
  
  return (
    <>
    <div className="row mt blue">
        <nav className="vernavbar" data-target="target-group-text-gallery">
            <a className="item " href="#records" data-item="0"  >
                <img src={logo1} height={23} width={23}/>
                <h1>Records</h1>
            </a>
            <br />
            <a href="#tickets" data-item="1"  className="item" >
                <img src={logo2} height={25} width={25}/>
                <h1>Tickets</h1>
            </a>
            <br />
            <a href="#analytics" data-item="2"  className="item" >
                <img src={logo3} height={25} width={25}/>
                <h1>Analytics</h1>
            </a>
            <br />
            <a href="#settings" data-item="3"  className="item" >
                <img src={logo4} height={25} width={25}/>
                <h1>Settings</h1>
            </a>
            <br />
            <a href="#myprofile" data-item="4"  className="item" >
                <img src={logo5} height={23} width={23}/>
                <h1>My Profile</h1>
            </a>
            <br />
            <a href="#tutorial" data-item="5"  className="item" >
                <img src={logo6} height={25} width={25}/>
                <h1>Tutorial</h1>
            </a>
            <a data-item="6"  className="item" >
                <h1>________</h1>
            </a>
            <br />
            <a href="#dots" data-item="7"  className="item" >
                <h1>. . .</h1>
            </a>
        </nav>
    </div>
    </>
  );
};

export default Ver_SideNavbar;