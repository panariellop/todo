import React, {Fragment} from 'react';

class About extends React.Component{

    aboutStyle = {
        marginLeft: '15px',
        marginRight: '15px',
    }

    render(){
        return(
            <Fragment>
                <h1 style = {{textAlign: 'center'}}>About Todos:</h1>

                <p style = {this.aboutStyle}>Piero Panariello Sept. 2020 (c)</p>
                <p style = {this.aboutStyle}>This application is built using React. It uses local storage to remember your todos, which means they will be remembered next time you open the application.</p>

            </Fragment>
        )
    }
}

export default About; 