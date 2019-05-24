import React from 'react';
import Story from './Story'
class MainContainer extends React.Component {
    
    render() {
        return(
            <div>
                <ul>
                    {this.props.articles.map(article => <Story story={article}/>)}
                </ul>

            </div>


        )
    }
}

export default MainContainer