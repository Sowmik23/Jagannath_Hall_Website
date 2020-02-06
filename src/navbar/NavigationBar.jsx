import React, { Component } from 'react';
import './NavigationBar.css'
import {Link, Redirect} from 'react-router-dom'

import { Header, Navigation } from 'react-mdl'




class NavigationBar extends Component {
    
    render() { 
        return ( 
        <div>
           
            <nav className="naaaav">
            
              <ul>
                <li><a class="active" href="/">Home</a></li>
                <li><a href="/provost">Provost</a></li>
                <li><a href="#house_tutor">House Tutor</a></li>
                <li><a href="#stuff">Stuff</a></li>
                <li><a href="#notice_board">Notice Board</a></li>
                <li><a href="#student_information">Student Information</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </nav>

           {/* <Header className = "header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Portfolio (Sowmik Sarker)</Link> } scroll>
           <Navigation>
             <Link to="/resume">Resume</Link>
             <Link to="/about">About</Link>
             <Link to="/projects">Projects</Link>
             <Link to="/contact">Contact</Link>
           </Navigation>
         </Header>  */}



        </div>
      );
    }
}
 
export default NavigationBar;