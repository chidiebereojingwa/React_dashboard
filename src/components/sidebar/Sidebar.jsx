import React from 'react'
import Logo from "../../imgs/logo.png"
import './Sidebar.css'
export default function Sidebar() {
  return (
    <div className='Sidebar'>
        {/* logo */}
        <div className='logo'>
            <img src={Logo} alt=''/>
            <span>
                Sh<span>o</span>ps
            </span>
        </div>

        {/* menu */}
        <div className='menu'>
            <div className='menuItem'>
                <div>
                    Icon
                </div>
                <span>
                    Dashboard
                </span>
                </div>
        </div>

    </div>
  )
}
