"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import style from '../Styles/navbar.module.css';
import { FaSearch, FaBars, FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { IoLogoYoutube, IoClose, IoSearch } from "react-icons/io5";

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
                    <Link className={style.textLink} href="/" ><span className={style.logoText}>Ta<span>V</span>ion</span></Link>
                </div>
                <ul className={style.navList}>
                    <li >
                        <Link className={style.navItem} href="/">Home</Link>
                    </li>
                    <li >
                        <Link className={style.navItem} href="/trending">Trending</Link>
                    </li>
                    <li >
                        <Link className={style.navItem} href="/technews">Tech News</Link>
                    </li>
                    <li >
                        <Link className={style.navItem} href="/gadget">Gadget</Link>
                    </li>
                    <li >
                        <Link className={style.navItem} href="/innovation">Innovation</Link>
                    </li>
                    <li >
                        <Link className={style.navItem} href="/insights">Insights</Link>
                    </li>
                    <li >
                        <Link className={style.navItem} href="/techevents">Tech Events</Link>
                    </li>
                </ul>
                <div className={style.buttonContainer}>
                    <p onClick={toggleSearch} className={style.searchButton}>
                        <span>search</span><IoSearch className={style.buttonIcon} />
                    </p>
                    <p className={style.subscribeButton}>
                        Subscribe
                    </p>
                    <p onClick={toggleSidebar} className={style.menuBar}>
                        <FaBars />
                    </p>
                </div>
                <div className={`${style.sidebar} ${isSidebarOpen ? style.open : ''}`}>
                    <div className={style.topbar}>
                        <Link className={style.textLink} href="/" ><span className={style.logoText}>Ta<span>V</span>ion</span></Link>
                        <button onClick={toggleSidebar} className={style.closeButton}>
                            <IoClose />
                        </button>
                    </div>
                    <div className={style.middlebar}>
                        <ul className={style.sideList}>
                            <li onClick={toggleSidebar} className={style.sidenav} >
                                <Link className={style.sideLink} href="/">Home</Link>
                            </li>
                            <li onClick={toggleSidebar} className={style.sidenav} >
                                <Link className={style.sideLink} href="/trending">Trending</Link>
                            </li>
                            <li onClick={toggleSidebar} className={style.sidenav} >
                                <Link className={style.sideLink} href="/technews">Tech News</Link>
                            </li>
                            <li onClick={toggleSidebar} className={style.sidenav} >
                                <Link className={style.sideLink} href="/gadget">Gadget</Link>
                            </li>
                            <li onClick={toggleSidebar} className={style.sidenav} >
                                <Link className={style.sideLink} href="/innovation">Innovation</Link>
                            </li>
                            <li onClick={toggleSidebar} className={style.sidenav} >
                                <Link className={style.sideLink} href="/insights">Insights</Link>
                            </li>
                            <li className={style.sidenav} >
                                <Link className={style.sideLink} href="/techevents">Tech Events</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.bottombar}>
                        <hr />
                        <p style={{ color: 'lime', textAlign: 'center' }}>Follow us</p>
                        <div className={style.bottomLink}>
                            <Link className={style.socialLink} href="https://www.facebook.com">
                                <FaFacebookSquare id={style.sociallink} className={style.facebook} />
                            </Link>
                            <Link className={style.socialLink} href="https://www.instagram.com">
                                <FaInstagramSquare id={style.sociallink} className={style.instagram} />
                            </Link>
                            <Link className={style.socialLink} href="https://www.whatsapp.com">
                                <FaWhatsappSquare id={style.sociallink} className={style.whatsapp} />
                            </Link>
                            <Link className={style.socialLink} href="https://www.youtube.com">
                                <IoLogoYoutube id={style.sociallink} className={style.youtube} />
                            </Link>
                        </div>
                        <div className={style.bottomList}>
                            <ul className={style.bottomnav}>
                                <li><Link className={style.moreLink} href="sitelink">Contact Us</Link></li>
                                <li><Link className={style.moreLink} href="sitelink">About Us</Link></li>
                                <li><Link className={style.moreLink} href="sitelink">Privacy Policy</Link></li>
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
