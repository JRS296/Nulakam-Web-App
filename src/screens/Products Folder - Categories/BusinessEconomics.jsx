import '../../components/Categories/CSS/categories.css';
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart, FaSearch, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { BsFillTelephoneFill, BsPersonFillGear } from 'react-icons/bs';
import { IoIosMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import ProductsPage from '../../components/ProductPage';
import SearchBar from '../../components/SearchBar';
import { useNavigate } from 'react-router-dom';

export default function BusinessEconomics() {
    const navigate = useNavigate();
    const handleLogOut = (e) => {
        e.preventDefault();
        const conf = window.confirm("Are you sure you want to logout?");
        if(conf) localStorage.removeItem("token");
        navigate('/');
    }
    return (
        <div className='products'>
            <div className='grid'>
                <header>
                <SearchBar />

                    <div className="nav-grid">
                        <nav>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/products" className={"active"}>Products</NavLink>
                            {localStorage.getItem("token") ? <a onClick={handleLogOut} style={{cursor: 'pointer'}}>Logout</a> : <NavLink to="/account" >Login</NavLink>}
                            <NavLink to="/cart" ><FaShoppingCart /></NavLink>
                        </nav>
                    </div>
                </header>

                <section className="sidebar" id="up">
                    <div className="logo">
                        <center>
                            <h2><a href="/">Nūlakam</a></h2>
                        </center>
                    </div>
                    <div className="pro-cat">
                        <h2>Product Categories</h2>
                        <div className="border-side"></div>
                    </div>

                    <NavLink to="/products">All Products</NavLink>
                    <NavLink to="/products/business-and-economics" className={"side-bar-active"}>Business and Economics</NavLink>
                    <NavLink to="/products/classics">Classics</NavLink>
                    <NavLink to="/products/education">Education</NavLink>
                    <NavLink to="/products/history" >History</NavLink>
                    <NavLink to="/products/sci-fi-and-fantasy" >Science Fiction and Fantasy</NavLink>

                </section>

                <ProductsPage title={"Business and Economics"} tagdata={"BusinessEconomics"}/>

                <div className="footer">
                    <div className="inner-foot">
                        <div className="footer-items">
                            <div className='col1'>
                                <h1><a href="WingIT.html">Nūlakam</a></h1>
                                <p className='p-tag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet beatae hic voluptas
                                    nesciunt architecto.
                                    Minus adipisci architecto quis veniam itaque exercitationem soluta, id est odio impedit tempora
                                    distinctio.</p>
                                <div className="social">
                                    <a href=""><i title="Go to site's Facebook page"><FaFacebookF /></i></a>
                                    <a href=""><i title="Go to site's Twitter page"><FaTwitter /></i></a>
                                    <a href=""><i title="Go to site's Instagram page"><FaInstagram /></i></a>
                                    <a href="https://www.linkedin.com/in/jrs2002/"><i title="Go to site's LinkedIn page"><IoLogoLinkedin /></i></a>
                                    <a href="https://github.com/JRS296"><i title="Go to site's GitHub page"><IoLogoGithub /></i></a>
                                    <a href="https://jrs296.github.io/JRS-Studios/"><i title="Go to site's Owner's page"><BsPersonFillGear /></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="footer-items" id="col1">
                            <h2>Quick Links</h2>
                            <div className="border-foot"></div>
                            <ul>
                                <a href="">
                                    <li>Home</li>
                                </a>
                                <a href="">
                                    <li>About Us</li>
                                </a>
                                <a href="">
                                    <li>Services</li>
                                </a>
                                <a href="">
                                    <li>Legal</li>
                                </a>
                            </ul>
                        </div>

                        <div className="footer-items" id="col2">
                            <h2>Contact Us</h2>
                            <div className="border-foot"></div>
                            <ul>
                                <li><i><FaLocationDot /></i> XYZ, Bangalore, India</li>
                                <li><i><BsFillTelephoneFill /></i> 080-123456789</li>
                                <li><i><IoIosMail /></i> jonathan@jrsstudios.com</li>
                            </ul>

                        </div>

                        <div className="footer-items">
                            <h1>Our NewsLetter</h1>
                            <div className="border-foot"></div>
                            <p className='p-tag'>Please do consider subscribing.</p>
                            <form className="news-form">
                                <input type="text" className="txtbox" placeholder="Enter Your Email" />
                                <input type="submit" className="sub-btn" value="Submit" />
                            </form>
                        </div>

                    </div>
                    <div className="footer-bottom">
                        <center>
                            <span className="credits">Designed by <a href="https://jrs296.github.io/JRS-Studios/">JRS Studios</a> │ </span>
                            <span>&copy; 2023 All rights Reserved │ </span>
                            <span> DevRev Hiring Test</span>
                        </center>
                    </div>
                </div>

            </div>
        </div>
    );
}