import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect } from 'react-redux';
//See Header has no data so it is functional componenet
/**
 * 1) Link tag
 * 2) to attribute in link
 * 2) Logo tag
 *
 * 
 */

/**
 * 1) Once sign-in is done user must be routed to Home page
 * 2) User Name should be displayed properly with proper format & colour
 * 3) Create seperate component for currentuser part where u show sigin and signout
 * 
 */
const Header = ({currentUser}) => (
    <div className='header'>
        {alert("Into Header Component")}
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                currentUser?
                (<div>
                    <div className='option' onClick={()=>auth.signOut()}> SIGN OUT</div>
                     <span>Welcome {currentUser.displayName}</span>
                </div>
                )
                :
                (<Link className='option' to='/signin'>SIGN IN</Link>)
            }
        </div>

    </div>
) 


const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  });
  
  export default connect(mapStateToProps)(Header);