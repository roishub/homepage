import React from 'react'
import { Link } from 'react-router-dom'
import stars from './assets/stars.png';
import moon from './assets/moon.png';
import mountains_behind  from './assets/mountains_behind.png';
import type1 from './assets/Type1.png';
import multi from './assets/multi.png';
import kids from './assets/kids.png';
import voice from './assets/voice.png';
import type from './assets/typing.png';
import keyboard from './assets/keyboaard.png';
import joystick from './assets/joystick.png';
import book from './assets/book.png';
import badge from './assets/badge.svg';
import { useEffect } from 'react';
import './HomePage.css';

const App = ({ user })=> {
    useEffect(() => {
        // Handle any necessary updates when the user context changes
        
        const handleScroll = () => {
            const stars = document.getElementById('stars');
            const moon = document.getElementById('moon');
            const mountainsBehind = document.getElementById('mountains_behind');
            const text = document.getElementById('text');
            const btn = document.getElementById('btn');
            let value = window.scrollY;
            if (stars) {
              stars.style.left = value * 0.25 + 'px';
            }
            if (moon) {
                moon.style.top = value * 1.05 + 'px';
            }
            if (mountainsBehind) {
                mountainsBehind.style.top = value * 0.5 + 'px';
            }
            if (text) {
                text.style.marginRight = value * 5 + 'px';
            }
            if (btn) {
                btn.style.marginTop = value * 1.5 + 'px';
            }
        
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },)

    return (
        <div>
            <div>           
                <div>
                    <header>
                        <h1 className="logo">TypeSprint</h1>
                        <ul>
                            <li><a href="https://testyourskill.netlify.app/" className="active">Test your Skills</a></li>
                            <li><a href="https://testyourskill.netlify.app/">Multiplayer</a></li>
                            <li><a href="https://poetic-gelato-14aa56.netlify.app" >VoiceTyping</a></li>
                            <li><Link to="/about" activeClassname="active" className="about">About</Link></li>
                        </ul>
                    </header>
                </div>              
                <section>
                    <img src={stars} alt="Stars" />
                    <img src={moon} id="moon" alt="Moon" />
                    <img src={mountains_behind} id="mountains_behind" alt="Mountains Behind" />
                    <h2 id="text">TypeSprint</h2>
                    <a href="https://kidsmode.netlify.app/" id="btn">Get Started</a>
                    <div>
                        <div id="clouds3" className="clouds"></div>
                        <div id="clouds1" className="clouds"></div>
                        <div id="clouds2" className="clouds"></div>
                    </div>
                </section>
                <div className="container1S" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                    <div className="left" style={{ flex: '0 0 auto', marginRight: '20px' }}>
                        <img src={type1} alt="YourImage" style={{ maxWidth: '100%', marginLeft: '120px', height: 'auto', display: 'block' }} />
                    </div>
                    <div className="right" style={{ flex: 1, padding: '200px', textAlign: 'left' }}>
                        <h3 className="heading" style={{ fontSize: '2.5em', marginBottom: '10px' }}>WHAT IS TYPINGSPRINT?</h3>
                        <p className="caption">
                            Introducing "Type Sprint" - the interactive typing tool for kids! Enhance typing skills through fun stories and challenges.
                            Perfect for children, typists, and transcribers. Join us in fostering communication and digital literacy today!
                        </p>
                    </div>
                </div>
                <div className="ser">
                    <h2 className="section__header" style={{ fontSize: '3.5em', fontWeight: 'bold', color: '#000000'}}>Our Services</h2>
                    <p className="section__description">
                        Discover our exciting features for the Type Speed Analyzer game!
                    </p>
                    <section className="section__container service__container" id="service">
                        <div className="service__grid">
                            <div className="service__card">
                                <img src={kids} alt="Kids Mode" />
                                <br />
                                <h4>Kids Mode</h4>
                                <p>Make typing practice fun and engaging for children!</p>
                            </div>
                            <div className="service__card">
                                <img src={type} alt="Test your skills" />
                                <br />
                                <h4>Test your skills</h4>
                                <p>Improve and track your typing speed</p>
                            </div>
                            <div className="service__card">
                                <img src={multi} alt="Multiplayer mode" />
                                <br />
                                <h4>Multiplayer Mode</h4>
                                <p>Compete with friends or others in real-time typing challenges!</p>
                            </div>
                            <div className="service__card">
                                <img src={voice} alt="Voice Typing" />
                                <br />
                                <h4>Voice Typing</h4>
                                <p>Experience hands-free typing with voice recognition!</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="wrapper">
                    <h2 className="section-heading">How it helps?</h2>
                    <div className="container">
                        <div className="row">
                            <div className="column">
                                <div className="point">
                                    <img src={keyboard} alt="Icon 1" class="icon" />
                                    <div className="point-content">
                                        <p>Improves Typing Speed and Accuracy:</p>
                                        <p>Engaging typing exercises and challenges in the game help users enhance their typing speed and accuracy.</p>
                                    </div>
                                </div>
                                <div className="point">
                                    <img src={book} alt="Icon 2" class="icon" />
                                    <div className="point-content">
                                        <p>Enhances Digital Literacy:</p>
                                        <p>Teaches fundamental digital literacy skills crucial in today's technology-driven world.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="point">
                                    <img src={joystick} alt="Icon 3" class="icon" />
                                    <div className="point-content">
                                        <p>Encourages Learning through Gameplay:</p>
                                        <p>Integrates educational content with gaming elements to make learning enjoyable and interactive.</p>
                                    </div>
                                </div>
                                <div className="point">
                                    <img src={badge} alt="Icon 4" class="icon" />
                                    <div className="point-content">
                                        <p>Builds Confidence and Motivation:</p>
                                        <p>Incremental progress tracking and achievements boost users' confidence in their typing abilities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <footer className="footer">
                        <article>
                            <h2>Test your skills Today</h2>
                            <a href="/">
                                <button id="reg">
                                    <p>Sign Up Free</p>
                                    <span className="material-symbols-outlined"> trending_flat </span>
                                </button>
                            </a>
                        </article>
                        <div class="container">
                            <div className="footer__links col1">
                                <Link to="/about" activeClassname="active" className="about">About</Link>
                                
                            </div>
                            <div className="footer__copyright">
                                &copy; TypeSprint. All Rights Reserved.
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );

}   

export default App; 