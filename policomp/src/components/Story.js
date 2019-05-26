import React from 'react';
import FullStory from './FullStory'

class Story extends React.Component {
    

    render() {
        return(

            <li onClick={()=>this.props.handleRead(this.props.story)}>{this.props.story.title}<FullStory article={this.props.story}/></li>
        )
    }

}

export default Story