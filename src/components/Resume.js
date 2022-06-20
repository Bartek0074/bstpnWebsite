import React from 'react';
import ResumeEN from '../components/ResumeEN';
import FlagEN from '../components/FlagEN';
import ResumePL from '../components/ResumePL';
import FlagPL from '../components/FlagPL';
import '../css/ResumeBoth.css'

class Resume extends React.Component {
    
    state = {
        language: "polish",
    };

    handleLanguage = () =>{
        if(this.state.language === "polish"){
            this.setState({
                language: "english"
            });
        }
        else{
            this.setState({
                language: "polish"
            });
        }
        
    }
    
    render() {
        return(
            <>
            <div className="language">
                {this.state.language==="polish" ? <p className="language__text">Would you like to see my resume in English? <FlagEN/><span className="language__btn" onClick={this.handleLanguage}>click here</span></p> : <p className="language__text">Czy chcesz obejrzeć CV w języku polskim? <FlagPL/> <span className="language__btn" onClick={this.handleLanguage}>kliknij tutaj</span></p>}
            </div>
                {this.state.language==="polish" ? <ResumePL/> : <ResumeEN/>}
            </> 
        )
    }
}

export default Resume