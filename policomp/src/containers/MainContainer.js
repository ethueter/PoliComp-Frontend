import React from 'react';
import Story from '../components/Story'
import NavBar from '../components/NavBar'


class MainContainer extends React.Component {
    
    render() {
        return(
            <div>
                <NavBar />
            
                <div>
                    <ul>
                        {this.props.articles.map(article => <Story story={article}/>)}
                    </ul>

                </div>
            </div>


        )
    }
}

export default MainContainer