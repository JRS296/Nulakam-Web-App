import React, { useEffect, useState } from 'react'
import '../components/Categories/CSS/login.css';
import { AiFillHome } from "react-icons/ai"
import client from "../api/client"
import { useNavigate } from 'react-router-dom';

export default function Account() {
    const navigate = useNavigate();

    useEffect(() => {

        const loginBtn = document.querySelectorAll('.login-btn');
        const registerBtn = document.querySelectorAll('.reg-btn');
        const lostPassBtn = document.querySelectorAll('.lost-pass-btn');
        const termsOfServiceBtn = document.querySelectorAll('.TOS-btn');

        const box = document.getElementById("box");
        const loginForm = document.getElementById("F1");
        const registerForm = document.getElementById("F2");
        const lostPassForm = document.getElementById("F3");
        const termsOfService = document.getElementById("F4");

        registerBtn.forEach(button => {
            button.addEventListener('click', function () {
                box.classList.add("slide1");
                registerForm.classList.remove("form-hidden");
                loginForm.classList.add("form-hidden");
                lostPassForm.classList.add("form-hidden");
                termsOfService.classList.add("form-hidden");
            });
        });

        loginBtn.forEach(button => {
            button.addEventListener('click', function () {
                box.classList.remove("slide1");
                registerForm.classList.add("form-hidden");
                loginForm.classList.remove("form-hidden");
                lostPassForm.classList.add("form-hidden");
                termsOfService.classList.add("form-hidden");
            });
        });

        lostPassBtn.forEach(button => {
            button.addEventListener('click', function () {
                registerForm.classList.add("form-hidden");
                loginForm.classList.add("form-hidden");
                lostPassForm.classList.remove("form-hidden");
                termsOfService.classList.add("form-hidden");
            });
        });

        termsOfServiceBtn.forEach(button => {
            button.addEventListener('click', function () {
                registerForm.classList.add("form-hidden");
                loginForm.classList.add("form-hidden");
                lostPassForm.classList.add("form-hidden");
                termsOfService.classList.remove("form-hidden");
            });
        });
    }, [])

    const [userFname, setUserFname] = useState('');
    const [userLname, setUserLname] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPwd, setUserPwd] = useState('');

    const handleSubmitSignUp = async (e) => {
        e.preventDefault();
        const user = {
            fname: userFname,
            lname: userLname,
            email: userEmail,
            pwd: userPwd,
        };

        if (user.fname == '') alert("Add First name Bhai");
        else if (user.lname == '') alert("Add Last name Bhai");
        else if (user.email == '') alert("Add Email Bhai");
        else if (user.pwd == '') alert("Add Password Bhai");
        else {
            try {
                const { data } = await client.post(`/user/signup`, user);
                console.log(data);
                alert('User successfully created');
                setUserEmail('');
                setUserFname('');
                setUserLname('');
                setUserPwd('');
                navigate('/account');
            } catch (error) {
                const { response } = error;
                if (response?.data) {
                    return response.data
                }
                return { error: error.message || error };
            }
        }
    }

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        const user = {
            email: userEmail,
            pwd: userPwd,
        };

        if (user.email == '') alert("Add Email Bhai");
        else if (user.pwd == '') alert("Add Password Bhai");
        else {
            console.log("test");
            try {
                const data = await client.post(`/user/login`, user);
                // console.log(data);
                // console.log("test");
                alert('User successfully Signed In');
                setUserEmail('');
                setUserFname('');
                setUserLname('');
                setUserPwd('');
                localStorage.setItem("token", data.data.token);
                navigate('/');
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className='account'>
            <div className='body'>
                <div className="background">
                    <div className={"box"} id="box">
                        <div className="left">
                            <h1>Nūlakam</h1>
                            <h3>Create Account</h3>
                            <center><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Omnis necessitatibus ipsum quae sequi ea dicta provident
                                ratione nihil, asperiores officiis, odio, quibusdam laborum
                                nisi beatae cum unde corrupti tempore. Hic?</p></center>
                            <button type="button" className={"reg-btn"}>Register</button>
                        </div>
                        <div className="right">
                            <h3>Have an account?</h3>
                            <center><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Omnis necessitatibus ipsum quae sequi ea dicta provident
                                ratione nihil, asperiores officiis, odio, quibusdam laborum
                                nisi beatae cum unde corrupti tempore. Hic?</p></center>
                            <button type="button" className="login-btn">Login</button>
                        </div>
                        <div className="form">
                            <form className="register-form" id="F1" onSubmit={handleSubmitLogin}>
                                <h3>Login</h3>
                                <div className="form-group">
                                    <input type="email" placeholder="Email" className="form-control" value={userEmail}
                                        onChange={({ target }) => {
                                            setUserEmail(target.value);
                                            if (!userEmail.trim()) return;
                                        }} />
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="Password" className="form-control" value={userPwd}
                                        onChange={({ target }) => {
                                            setUserPwd(target.value);
                                            if (!userPwd.trim()) return;
                                        }} />
                                </div>
                                {/* <div className="form-group">
                                    <label for="check"><input type="checkbox" id="check" /> Remember Me</label>

                                </div> */}
                                <center><button type="submit" className="submit-btn">Login</button></center>
                                <p><a href="#" className="TOS-btn">Terms of Service</a> | <a href="#" className="lost-pass-btn">Forgot your password?</a></p>
                            </form>

                            <form className="register-form form-hidden" id="F2" onSubmit={handleSubmitSignUp}>
                                <h3>Register</h3>
                                <div className="form-group">
                                    <input type="text" placeholder="First Name*" className="form-control" value={userFname}
                                        onChange={({ target }) => {
                                            setUserFname(target.value);
                                            if (!userFname.trim()) return;
                                        }} />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Last Name*" className="form-control" value={userLname}
                                        onChange={({ target }) => {
                                            setUserLname(target.value);
                                            if (!userLname.trim()) return;
                                        }} />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email" className="form-control" value={userEmail}
                                        onChange={({ target }) => {
                                            setUserEmail(target.value);
                                            if (!userEmail.trim()) return;
                                        }} />
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="Password" className="form-control" value={userPwd}
                                        onChange={({ target }) => {
                                            setUserPwd(target.value);
                                            if (!userPwd.trim()) return;
                                        }} />
                                </div>

                                <center><button type="submit" className="submit-btn">Register</button></center>
                                <p><a href="#" className="TOS-btn">Terms of Service</a> | <a href="#" className="lost-pass-btn">Forgot your password?</a></p>
                            </form>

                            <div className="register-form form-hidden" id="F3">
                                <h3>Forgot your Password?</h3>
                                <h5>Don't worry, we've got you covered. Type in your email below, and we'll send one bearing details
                                    on how you may reset your password.</h5>

                                <div className="form-group">
                                    <input type="email" placeholder="Email" className="form-control" />
                                </div>

                                <center><button type="submit" className="submit-btn">Send Email</button></center>
                                <p><a href="#" className="TOS-btn">Terms of Service</a> | <a href="#" className="login-btn">Login</a></p>
                            </div>

                            <div className="terms-form form-hidden" id="F4">
                                <h2>Terms of Service</h2>
                                <p className="small">Last modified: September 30th, 2020</p><span><a href="#" className="login-btn link">Return to Login</a></span>
                                <h3>Welcome to jonathan@jrsstudios.com!</h3>
                                <p>These terms and conditions outline the rules and regulations for the use of Aggarwal
                                    Enterprises's
                                    Website, located at Website.com.</p>
                                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use
                                    Nulakam if you do not
                                    agree to take all of the terms and conditions stated on this page.</p>

                                <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer
                                    Notice and all
                                    Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and
                                    compliant
                                    to the Company's
                                    terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company.
                                    “Party”, “Parties”,
                                    or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and
                                    consideration of payment
                                    necessary to undertake the process of our assistance to the Client in the most appropriate
                                    manner
                                    for the express purpose
                                    of meeting the Client's needs in respect of provision of the Company's stated services, in
                                    accordance with and subject to,
                                    prevailing law of Netherlands. Any use of the above terminology or other words in the singular,
                                    plural, capitalization
                                    and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

                                <h3>Cookies</h3>
                                <p>We employ the use of cookies. By accessing Nūlakam, you agreed to use cookies in agreement with
                                    the
                                    Aggarwal Enterprises's Privacy Policy.</p>

                                <p>Most interactive websites use cookies to let us retrieve the user's details for each visit.
                                    Cookies
                                    are used by our website to
                                    enable the functionality of certain areas to make it easier for people visiting our website.
                                    Some of
                                    our affiliate/advertising
                                    partners may also use cookies.</p>

                                <h3>License</h3>
                                <p>Unless otherwise stated, Aggarwal Enterprises and/or its licensors own the intellectual property
                                    rights for all material on Nūlakam.
                                    All intellectual property rights are reserved. You may access this from Nūlakam for your own
                                    personal use subjected to restrictions
                                    set in these terms and conditions.</p>

                                <h3>You must not:</h3>

                                <p>Republish material from Nūlakam</p>
                                <p>Sell, rent or sub-license material from Nūlakam</p>
                                <p>Reproduce, duplicate or copy material from Nūlakam</p>
                                <p>Redistribute content from Nūlakam</p>
                                <p>This Agreement shall begin on the date hereof.</p>

                                <p>Parts of this website offer an opportunity for users to post and exchange opinions and
                                    information in
                                    certain areas of the website.
                                    Aggarwal Enterprises does not filter, edit, publish or review Comments prior to their presence
                                    on
                                    the website. Comments do not reflect
                                    the views and opinions of Aggarwal Enterprises,its agents and/or affiliates. Comments reflect
                                    the
                                    views and opinions of the person who
                                    post their views and opinions. To the extent permitted by applicable laws, Aggarwal Enterprises
                                    shall not be liable for the Comments or
                                    for any liability, damages or expenses caused and/or suffered as a result of any use of and/or
                                    posting of and/or appearance of the
                                    Comments on this website.</p>

                                <p>Aggarwal Enterprises reserves the right to monitor all Comments and to remove any Comments which
                                    can
                                    be considered inappropriate,
                                    offensive or causes breach of these Terms and Conditions.</p>

                                <h3>You warrant and represent that:</h3>

                                <p>You are entitled to post the Comments on our website and have all necessary licenses and consents
                                    to
                                    do so;</p>
                                <p>The Comments do not invade any intellectual property right, including without limitation
                                    copyright,
                                    patent or trademark of any third party;</p>
                                <p>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful
                                    material which is an invasion of privacy</p>
                                <p>The Comments will not be used to solicit or promote business or custom or present commercial
                                    activities or unlawful activity.</p>
                                <p>You hereby grant Aggarwal Enterprises a non-exclusive license to use, reproduce, edit and
                                    authorize
                                    others to use, reproduce and edit any of your
                                    Comments in any and all forms, formats or media.</p>

                                <h3>Hyperlinking to our Content</h3>
                                <h4>The following organizations may link to our Website without prior written approval:</h4>

                                <p>Government agencies;
                                    Search engines;
                                    News organizations;
                                    Online directory distributors may link to our Website in the same manner as they hyperlink to
                                    the
                                    Websites of other listed businesses; and
                                    System wide Accredited Businesses except soliciting non-profit organizations, charity shopping
                                    malls, and charity fundraising groups which
                                    may not hyperlink to our Web site.</p>
                                <p>These organizations may link to our home page, to publications or to other Website information so
                                    long as the link: (a) is not in any way deceptive;
                                    (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its
                                    products and/or services; and (c) fits within
                                    the context of the linking party's site.</p>

                                <h3>We may consider and approve other link requests from the following types of organizations:</h3>

                                <p>commonly-known consumer and/or business information sources;
                                    dot.com community sites;
                                    associations or other groups representing charities;
                                    online directory distributors;
                                    internet portals;
                                    accounting, law and consulting firms; and
                                    educational institutions and trade associations.</p>

                                <p>We will approve link requests from these organizations if we decide that: (a) the link would not
                                    make
                                    us look unfavorably to ourselves
                                    or to our accredited businesses; (b) the organization does not have any negative records with
                                    us;
                                    (c) the benefit to us from the visibility
                                    of the hyperlink compensates the absence of Aggarwal Enterprises; and (d) the link is in the
                                    context
                                    of general resource information.</p>

                                <p>These organizations may link to our home page so long as the link: (a) is not in any way
                                    deceptive;
                                    (b) does not falsely imply sponsorship,
                                    endorsement or approval of the linking party and its products or services; and (c) fits within
                                    the
                                    context of the linking party's site.</p>

                                <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to
                                    our
                                    website, you must inform us by sending
                                    an e-mail to Aggarwal Enterprises. Please include your name, your organization name, contact
                                    information as well as the URL of your site,
                                    a list of any URLs from which you intend to link to our Website, and a list of the URLs on our
                                    site
                                    to which you would like to link.
                                    Wait 2-3 weeks for a response.</p>

                                <h3>Approved organizations may hyperlink to our Website as follows:</h3>

                                <p>By use of our corporate name; or
                                    By use of the uniform resource locator being linked to; or By use of any other description of
                                    our
                                    Website being linked to that makes sense
                                    within the context and format of content on the linking party's site. No use of Aggarwal
                                    Enterprises's logo or other artwork will be allowed
                                    for linking absent a trademark license agreement.</p>

                                <h3>iFrames</h3>
                                <p>Without prior approval and written permission, you may not create frames around our Webpages that
                                    alter in any way the visual presentation or
                                    appearance of our Website.</p>

                                <h3>Content Liability</h3>
                                <p>We shall not be hold responsible for any content that appears on your Website. You agree to
                                    protect
                                    and defend us against all claims that is
                                    rising on your Website. No link(s) should appear on any Website that may be interpreted as
                                    libelous,
                                    obscene or criminal, or which infringes,
                                    otherwise violates, or advocates the infringement or other violation of, any third party rights.
                                </p>

                                <h3>Reservation of Rights</h3>
                                <p>We reserve the right to request that you remove all links or any particular link to our Website.
                                    You
                                    approve to immediately remove all links
                                    to our Website upon request. We also reserve the right to amen these terms and conditions and
                                    it's
                                    linking policy at any time. By continuously
                                    linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                                </p>

                                <h3>Removal of links from our website</h3>
                                <p>If you find any link on our Website that is offensive for any reason, you are free to contact and
                                    inform us any moment. We will consider
                                    requests to remove links but we are not obligated to or so or to respond to you directly.</p>

                                <p>We do not ensure that the information on this website is correct, we do not warrant its
                                    completeness
                                    or accuracy; nor do we promise to ensure
                                    that the website remains available or that the material on the website is kept up to date.</p>

                                <h3>Disclaimer</h3>
                                <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and
                                    conditions relating to our website and the
                                    use of this website. Nothing in this disclaimer will:</p>

                                <p>limit or exclude our or your liability for death or personal injury;<br></br>
                                    limit or exclude our or your liability for fraud or fraudulent misrepresentation;<br></br>
                                    limit any of our or your liabilities in any way that is not permitted under applicable law; or
                                    <br></br>
                                    exclude any of our or your liabilities that may not be excluded under applicable. <br></br>
                                    The limitations and prohibitions of liability set in this Section and elsewhere in this
                                    disclaimer:
                                    (a) are subject to the preceding paragraph;
                                    and (b) govern all liabilities arising under the disclaimer, including liabilities arising in
                                    contract, in tort and for breach of statutory duty.</p>

                                <p>As long as the website and the information and services on the website are provided free of
                                    charge,
                                    we will not be liable for any loss or
                                    damage of any nature</p>

                                <p>
                                    <center><a href="#" className="login-btn">Back to Login</a></center>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="home">
                        <a href="/" className="return-btn"><i title="Return to site's home page"><AiFillHome /></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}