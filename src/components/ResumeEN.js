import '../css/Resume.css';

const ResumeEN = () => {
    return(
        <>
        <div className="resumeContainer">
            <div className="header">
                <div className="headerName">
                    <h1 className='name'>Bartosz Stępniak</h1>
                </div>
                <div className="headerContact">
                    <ul>
                        <li><i class="fa-solid fa-phone"></i> +48 533 205 528</li>
                        <li><i class="fa-solid fa-envelope"></i> bartosz98stepniak@gmail.com</li>
                        <li><i class="fa-brands fa-internet-explorer"></i> <a rel="noreferrer" href="http://bstpn.pl" target="_blank">bstpn.pl</a></li>
                        <li><i class="fa-brands fa-github"></i> <a rel="noreferrer" href="http://github.com/Bartek0074" target="_blank">github.com/Bartek0074</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="about">
                <p>I studied at the University of Science and Technology in Cracow. I graduated in mechanical engineering. I have been learning and improving my programming skills for almost a year by completing many courses. I already created a few websites, you can see them on my <a class="link" rel="noreferrer" target="_blank" href="http://github.com/Bartek0074">GitHub</a>. Currently, I am developing a UI for web application using React.js. I am hardworking, learning fast and ready for new challenges.</p>
            </div>
            <hr />
            <div className="grid">
                <div className="experience">
                    <h2 className='heading'>work experience</h2>
                    <h3 className='subheading'>Conrad Electronic Sp z o.o.</h3>
                    <p>02.2020 - 03.2020</p>
                    <ul>
                        <li>Technical consultancy</li>
                        <li>Preparation of commerial offers</li>
                        <li>Contact with the customer</li>
                    </ul>
                </div>
                <div className="education">
                    <h2 className="heading">education</h2>
                    <h3 className='subheading'>AGH University of Science and Technology in Cracow</h3>
                    <p>10.2017 - 02.2021</p>
                    <ul>
                        <li>Field of study: Mechanical Engineering</li>
                        <li>Degree: enginner</li>
                    </ul>
                </div>
                <div className="skills">
                    <h2 className="heading">skills</h2>
                    <div className="skillsBox">
                        <h3 className="subheading">Technical</h3>
                        <ul>
                            <li>Knowledge of HTML5, CSS3 and SASS (BEM) technologies</li>
                            <li>Knowledge of Responsive Web Design</li>
                            <li>Basic knowledge of JavaScript and Java languages</li>
                            <li>Basic knowledge of React.js</li>
                            <li>Knowledge of Gulp</li>
                            <li>Knowledge of GIT</li>
                        </ul>
                    </div>
                    <div className="skillsBox">
                        <h3 className="subheading">Soft</h3>
                        <ul>
                            <li>Creativity</li>
                            <li>Teamwork</li>
                            <li>Discipline</li>
                            <li>Good work organization</li>
                        </ul>
                    </div>
                </div>
                <div className="languages">
                    <h2 className="heading">languages</h2>
                    <ul>
                        <li>English (B2)</li>
                    </ul>
                </div>
                <div className="interests">
                    <h2 className="heading">interests</h2>
                    <ul>
                        <li>Sport</li>
                        <li>Mountain hikes</li>
                        <li>Geography</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default ResumeEN