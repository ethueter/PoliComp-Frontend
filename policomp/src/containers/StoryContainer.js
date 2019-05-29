import React from 'react';
import Story from '../components/Story';


class StoryContainer extends React.Component {

    render() {
        return(
            <div>
                
                <ul style={{overflow: 'auto', maxHeight: 500}}>
                    {this.props.articles.map(article => <Story story={article} handleRead={this.props.handleRead} />)}
                </ul>

            </div>

        )
    }


}

export default StoryContainer
