import React from 'react'
import {Link} from 'react-router-dom';
import styles from './Navigation.module.css'
const Navigation = () => {

const brandStyle = {
    color:'#fff',
    textDecoration:'none',
     fontWeight:'bold',
     fontSize:'22px',
     display:'flex',
     alignItems:'center',
}


const logoTextGeekVoice = {
    marginLeft:'10px'
}



  return (
    <nav className={`${styles.navbar} container`}>
       <Link to="/" style={brandStyle}>
        <img src='/images/Emoji.png' alt="logo"/>
        <span style={logoTextGeekVoice}>GeekVoice</span>
      </Link>
    </nav>
  )
}

export default Navigation