import React from 'react';
import Story from '../components/Story'


class StoryContainer extends React.Component {

    render() {
        return(
            <div>
                <ul>
                    {this.props.articles.map(article => <Story story={article} />)}
                </ul>

            </div>

        )
    }


}

export default StoryContainer