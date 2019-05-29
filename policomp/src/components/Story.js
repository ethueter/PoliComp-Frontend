import React from 'react';


class Story extends React.Component {
    

    render() {
        return(

            <li onClick={()=>this.props.handleRead(this.props.story)}>{this.props.story.title}</li>
        )
    }

}

export default Story