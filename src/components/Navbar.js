import React, { Component } from 'react';
import { mdiAccount } from '@mdi/js';
import Icon from '@mdi/react';


export default class Navbar extends Component {
  render() {
    return (
        <div className="App_navbar">
           <nav> 
               <ul>
                   <li className="App_navbar_item1"><img src="logo_transparent.png" width="200px" height="auto" alt="logo"/></li>
                   <li className="App_navbar_item2">
                    {/* <Icon path={mdiAccount}
                    title="User Account"
                    size={2}
                    horizontal
                    vertical  
                    rotate={180}
                    color="#FF5917"
                    /> */}
                   </li>
               </ul>
           </nav>
        </div>
    );
  }
}