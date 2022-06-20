import '../css/Resume.css';

const ResumePL = () => {
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
                <p>Jestem absolwentem Akademii Górniczo-Hutniczej w Krakowie, gdzie na kierunku Mechanika i Budowa Maszyn zdobyłem tytuł inżyniera. Mimo to od prawie roku zajmuję się nauką programowania poprzez realizację wielu kursów. Mam już za sobą stworzone pierwsze strony internetowe, część z nich można zobaczyć na moim <a class="link" rel="noreferrer" target="_blank" href="http://github.com/Bartek0074">GitHubie</a>. Obecnie zajmuję się tworzeniem interfejsu graficznego aplikacji internetowej w bibliotece React. Jestem osobą pracowitą, szybko uczącą się i gotową na nowe wyzwania.</p>
            </div>
            <hr />
            <div className="grid">
                <div className="experience">
                    <h2 className='heading'>doświadczenie zawodowe</h2>
                    <h3 className='subheading'>Conrad Electronic Sp z o.o.</h3>
                    <p>02.2020 - 03.2020</p>
                    <ul>
                        <li>Doradztwo techniczne</li>
                        <li>Sporządzanie ofert handlowych</li>
                        <li>Kontakt z klientem</li>
                    </ul>
                </div>
                <div className="education">
                    <h2 className="heading">edukacja</h2>
                    <h3 className='subheading'>Akademia Górniczo-Hutnicza w Krakowie</h3>
                    <p>10.2017 - 02.2021</p>
                    <ul>
                        <li>Kierunek: Mechanika i Budowa Maszyn</li>
                        <li>Poziom wykształcenia: inżynier</li>
                    </ul>
                </div>
                <div className="skills">
                    <h2 className="heading">umiejętności</h2>
                    <div className="skillsBox">
                        <h3 className="subheading">Techniczne</h3>
                        <ul>
                            <li>Znajomość technologii HTML5, CSS3 i SASS (BEM)</li>
                            <li>Znajomość założeń RWD</li>
                            <li>Podstawowa znajomość języków JavaScript i Java</li>
                            <li>Podstawowa znajomość biblioteki React.js</li>
                            <li>Znajomość Gulp</li>
                            <li>Znajomość GIT</li>
                        </ul>
                    </div>
                    <div className="skillsBox">
                        <h3 className="subheading">Miękkie</h3>
                        <ul>
                            <li>Kreatywność</li>
                            <li>Umiejętność pracy w zespole</li>
                            <li>Samodyscyplina</li>
                            <li>Dobra organizacja pracy</li>
                        </ul>
                    </div>
                </div>
                <div className="languages">
                    <h2 className="heading">języki</h2>
                    <ul>
                        <li>Angielski (B2)</li>
                    </ul>
                </div>
                <div className="interests">
                    <h2 className="heading">zainteresowania</h2>
                    <ul>
                        <li>Sport</li>
                        <li>Wycieczki górskie</li>
                        <li>Geografia</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default ResumePL