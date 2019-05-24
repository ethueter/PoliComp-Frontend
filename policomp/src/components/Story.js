import React from 'react';


class Story extends React.Component {

    render() {
        return(

            <li>{this.props.story.source.name}</li>
        )
    }

}

export default Story