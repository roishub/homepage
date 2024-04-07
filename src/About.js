import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './About.css'; // Import your CSS file for styling
import img from './assets/ty.png'

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about-content">
                <h2>Welcome to Type Sprint!</h2>
                <p>
                    Type Sprint is a fun and interactive web application designed to help children enhance their typing skills while enjoying engaging stories and challenging exercises.
                </p>
                <p>
                    Our platform offers a variety of features, including story-based typing exercises with different difficulty levels tailored for kids, voice typing functionality for transcription practice, real-time feedback systems, and multiplayer modes for collaborative learning experiences.
                </p>
                <p>
                    Whether your child is just starting to learn typing or looking to improve their skills, Type Sprint provides a supportive and enjoyable environment for them to practice and progress.
                </p>
                <p>
                    Our team of experts has carefully curated a collection of stories and exercises that are not only entertaining but also educational. Each typing exercise is designed to improve accuracy, speed, and typing technique, ensuring that children develop essential skills while having fun.
                </p>
                <p>
                    With our voice typing feature, children can practice transcription by speaking into the application, which converts their spoken words into text. This feature not only helps improve typing proficiency but also enhances language and listening skills.
                </p>
                <p>
                    Furthermore, our real-time feedback system provides immediate correction and guidance during typing exercises, allowing children to learn from their mistakes and make continuous progress.
                </p>
                <p>
                    Type Sprint also offers multiplayer modes where children can compete with friends or join collaborative typing challenges. This fosters a sense of community and encourages teamwork while learning.
                </p>
                <p>
                    Join us on Type Sprint today and embark on an exciting journey to improve your child's typing skills in a fun and engaging way!
                </p>
            </div>
            <div className="about-image">
                <img src={img} alt="About Type Sprint" />
            </div>\
            <div className="return-home-button">
                <Link to="/">Return Home</Link>
            </div>
        </div>
    );
}

export default AboutPage;
