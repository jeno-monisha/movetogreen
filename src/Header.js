import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";
import Login from "./Login";
import LOGOS from "./LOGO.png";
import ForumIcon from '@mui/icons-material/Forum';
import Home from './Home';

export default function Header() {
    return (
        <div className='header'>
          <Link to="/">
            <img className='header_logo'
            src= {LOGOS}  />
              
        </Link>

        
            <div className='header__nav'>
            <Link to ='/'>
               <div className='header__option'>
                   <span className='header__optionLinetw'>ABOUT</span>      
              </div>
              </Link>
               <Link to ='/Donate'>
                    <div className='header__option'>
                         <span className='header__optionLinetw'>DONATE NOW</span>      
                    </div>
               </Link>
               <div className='header__option'>
                    <span className='header__optionLinetw'>MAP</span>
               </div>

               <Link to ='/Login'>
                  <div className='header__option'>
                     <span className='header__optionLinetw'>SIGN IN</span>
                  </div>
               </Link>

             <div className='header__option'>  
                  <span className='header__optionLinetw'><ForumIcon /></span>
             </div>
            </div>
     </div>
    )
    
}
