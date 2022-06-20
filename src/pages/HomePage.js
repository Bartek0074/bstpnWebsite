import React from 'react';
import Resume from '../components/Resume';
import Error from '../components/Error';


class HomePage extends React.Component {
    
    state = {
        error: "yes"
    };

    timing(){
        setInterval(() => {
          this.setState({
            error: "no"
          })
        }, 700)
      }

    render() {
        this.timing()
        return(
            <>
            {this.state.error==="yes" ? <Error/> : <Resume/>}
            </> 
        )
    }
}

export default HomePage