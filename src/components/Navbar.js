import React, { Component } from 'react';
import { mdiAccount } from '@mdi/js';
import Icon from '@mdi/react';


export default class Navbar extends Component {
  render() {
    return (
        <div className="App_navbar">
           <nav> 
               <ul>
                   <li className="App_navbar_item1 App-logo"><img src="logo512.png" width="44px" height="44px" alt="logo"/></li>
                   <li className="App_navbar_item2">
                    <Icon path={mdiAccount}
                    title="User Account"
                    size={2}
                    horizontal
                    vertical
                    rotate={180}
                    color="red"
                    />
                   </li>
               </ul>
           </nav>
        </div>
    );
  }
}