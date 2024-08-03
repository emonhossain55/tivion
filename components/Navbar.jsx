"use client"
import React, { useState } from 'react';
import style from '../Styles/navbar.module.css';
import { FaSearch, FaBars, FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { IoLogoYoutube, IoClose } from "react-icons/io5";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
        document.body.classList.toggle(style.blurContent, !isSidebarOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(prev => !prev);
        document.body.classList.toggle(style.blurContent, isSearchOpen);
    };

    return (
        <>
            <div className={style.navbar}>
                <div className={style.logo}>
                    <span className={style.logoText}>Ta<span>V</span>ion</span>
                </div>
                <ul className={style.navList}>
                    <li className={style.navItem}>Home</li>
                    <li className={style.navItem}>Trending</li>
                    <li className={style.navItem}>Tech News</li>
                    <li className={style.navItem}>Gadget</li>
                    <li className={style.navItem}>Innovation</li>
                    <li className={style.navItem}>Insights</li>
                    <li className={style.navItem}>Tech Events</li>
                </ul>
                <div className={style.buttonContainer}>
                    <button onClick={toggleSearch} className={style.searchButton}>
                        <FaSearch className={style.buttonIcon} />
                    </button>
                    <button className={style.subscribeButton}>
                        Subscribe
                    </button>
                    <p onClick={toggleSidebar} className={style.menuBar}>
                        <FaBars />
                    </p>
                </div>
                <div className={`${style.sidebar} ${isSidebarOpen ? style.open : ''}`}>
                    <div className={style.topbar}>
                        <span className={style.logoText}>Ta<span>V</span>ion</span>
                        <button onClick={toggleSidebar} className={style.closeButton}>
                            <IoClose />
                        </button>
                    </div>
                    <div className={style.middlebar}>
                        <ul className={style.sideList}>
                            <li className={style.sidenav}>Home</li>
                            <li className={style.sidenav}>Trending</li>
                            <li className={style.sidenav}>Tech News</li>
                            <li className={style.sidenav}>Gadget</li>
                            <li className={style.sidenav}>Innovation</li>
                            <li className={style.sidenav}>Insights</li>
                            <li className={style.sidenav}>Tech Events</li>
                        </ul>
                    </div>
                    <div className={style.bottombar}>
                        <hr />
                        <p style={{ color: 'lime', textAlign: 'center' }}>Follow us</p>
                        <div className={style.bottomLink}>
                            <FaFacebookSquare id={style.sociallink} className={style.facebook} />
                            <FaInstagramSquare id={style.sociallink} className={style.instagram} />
                            <FaWhatsappSquare id={style.sociallink} className={style.whatsapp} />
                            <IoLogoYoutube id={style.sociallink} className={style.youtube} />
                        </div>
                        <div className={style.bottomList}>
                            <ul className={style.bottomnav}>
                                <li>Contact Us</li>
                                <li>About Us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Full viewport search modal */}
            <div className={`${style.searchModal} ${isSearchOpen ? style.open : ''}`}>
                <div className={style.searchModalContent}>
                    <button onClick={toggleSearch} className={style.closeSearchButton}>
                        <IoClose />
                    </button>
                    <input type="text" className={style.searchInput} placeholder="Search..." />
                </div>
            </div>
        </>
    );
};

export default Navbar;
