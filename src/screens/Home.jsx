import '../App.css';
import React, { useRef } from 'react'
import $ from 'jquery'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart, FaSearch, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { BsFillTelephoneFill, BsPersonFillGear } from 'react-icons/bs';
import { IoIosMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const autoScroll = () => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    $(document).ready(function () {
        $(window).on('scroll', function () {
            if ($(window).scrollTop()) {
                $("header").addClass('bgc');
                $(".main-txt").addClass("fade-out");
            } else {
                $("header").removeClass('bgc');
                $(".main-txt").removeClass("fade-out");
            }
        });
    });

    const handleLogOut = (e) => {
        e.preventDefault();
        const conf = window.confirm("Are you sure you want to logout?");
        if(conf) localStorage.removeItem("token");
        navigate('/');
    }

    return (
        <div>
            <div className='section-1'>
                <header>
                    <div className="logo-grid">
                        <h2><NavLink to="/" className={"logo"}>Nūlakam</NavLink></h2>
                    </div>

                    <SearchBar />

                    <div className="nav-grid">
                        <nav>
                            <NavLink to="/" className={"active"}>Home</NavLink>
                            <NavLink to="/products">Products</NavLink>
                            {localStorage.getItem("token") ? <a onClick={handleLogOut} style={{cursor: 'pointer'}}>Logout</a> : <NavLink to="/account" >Login</NavLink>}
                            <NavLink to="/cart" ><FaShoppingCart /></NavLink>
                        </nav>
                    </div>
                </header>
                <div className="main-txt">
                    <h3> From<br></br> Shakespeare, <br></br>to Hemingway,<br></br> Dickens to Tolstoy,<br></br> We have it All...</h3>
                    <button className="exp-now" onClick={autoScroll}>Explore Now &#x2192;</button>
                </div>
            </div>

            <div ref={scrollRef} className="section-2" id="sec2">
                <div className="subsec2">
                    <h1 >Who we are</h1>
                    <p>Welcome to Nūlakam - Where Stories Come to Life. At Nūlakam, we believe in the transformative power of words, the magic of storytelling, and the endless adventures that await within the pages of a book. Established with a deep love for literature and a passion for connecting readers with the finest literary treasures, we are more than just a bookstore; we are your gateway to a world of imagination and knowledge.

                        Our journey began Nūlakam when a group of avid bookworms came together with a shared dream: to create a haven for book lovers of all ages and interests. Since then, we have been on a mission to curate a diverse collection of books that cater to every taste, from timeless classics to contemporary bestsellers, and from niche genres to popular series.

                        But we are more than just a place to buy books. We are a community of readers, a space for literary exploration, and a source of inspiration for book enthusiasts. Our team of passionate bibliophiles is dedicated to providing personalized recommendations, hosting engaging book discussions, and fostering a love for reading in the hearts of our customers.

                        Beyond our carefully selected books, we offer a warm and welcoming environment for you to browse, discover, and lose yourself in the world of words. Whether you prefer the comforting scent of printed pages or the convenience of e-books, Nūlakam is here to cater to your reading preferences.

                        Thank you for joining us on this literary journey. We invite you to explore our shelves, connect with fellow book lovers, and embark on countless literary adventures. Together, let's celebrate the joy of reading and keep the magic of books alive.

                        Discover the world of words with Nūlakam where every book tells a story, and every reader finds a home.</p>

                    <NavLink className="exp-now2" to="/products">Go to Products</NavLink>

                    <h1>Reviews</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br></br>
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br></br>
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <br></br>
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <br></br>
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non <br></br>
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <h1>Offers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br></br>
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br></br>
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <br></br>
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <br></br>
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non <br></br>
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            <div class="footer">
                <div className="inner-foot">
                    <div className="footer-items">
                        <div className='col1'>
                            <h1><a href="WingIT.html">Nūlakam</a></h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet beatae hic voluptas
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
                        <p>Please do consider subscribing.</p>
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
    );
}