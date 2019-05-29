
import React from 'react'
import Rating from './Rating'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class FullStory extends React.Component {
    state = { open: false }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open } = this.state
        return(
            <Modal 
                open={open}
                onOpen={this.open}
                onClose={this.close}
                trigger={<Button size='mini'>Read It</Button>}>
                <Modal.Header>Profile Picture</Modal.Header>
                <Modal.Content image scrolling>
                    <Image size='medium' src={this.props.article.urlToImage} wrapped />

                    <Modal.Description>
                        <Header>{this.props.article.title}</Header>
                        <p>{this.props.article.content}</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Rating article={this.props.article} close={this.close}/>
                </Modal.Actions>
            </Modal>
    )}
}

export default FullStory