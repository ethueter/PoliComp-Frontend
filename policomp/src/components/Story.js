import React from 'react';
import FullStory from './FullStory'

class Story extends React.Component {

    handleClick= () => {
        console.log('test')
        return < FullStory article={ this.props.story }/>
    }

    render() {
        return(

            <li onClick={()=>FullStory}>{this.props.story.title}</li>
        )
    }

}

export default Story