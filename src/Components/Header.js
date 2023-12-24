import React from 'react'
import './Header.css'
import logo from '../assets/img/logo.png.png'
import { Link } from 'react-router-dom'
import MiddlePage from './MiddlePage'

function Header() {
    return (
        <div>
            <header class="position-relative">
                

                {/* dfghjkl */}
                <div class="navbar-bottom active">
                    <div class="container">
                        <div class="navbar-wrapper">
                            <div class="logo">
                                <a href="">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                            <div class="change-language d-sm-none ms-auto me-3 text--title">
                                <select name="language" class="language selectors nice language-bar">
                                    <option value="" selected="">
                                        EN
                                    </option>
                                </select>
                            </div>
                            <div class="nav-toggle d-lg-none">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="nav-menu-area">
                                <div class="menu-close text--danger d-lg-none">
                                    <i class="fas fa-times"></i>
                                </div>
                                <ul class="nav-menu">
                                    {/* <li><a href="" target="_self">Home</a></li>
                                    <li><a href="" target="_self">Services</a></li>
                                    <li><a href="" target="_self">Blog</a></li>
                                    <li><a href="" target="_self">About</a></li>

                                    <li>
                                        <a href="">Contact</a>
                                    </li> */}

                                    <li>
                                        <div class="btn__grp ms-lg-3">
                                           <Link to='/Login'> <a href="/" class="navbar-login-button text-white">Login Now</a></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>            </div>
                </div>
            </header>
            <MiddlePage />
        </div>
    )
}

export default Header
