
import React from 'react'
import Rating from './Rating'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const FullStory = (props) => (
    
    
    <Modal trigger={<Button size='mini'>Read It</Button>}>
        <Modal.Header>Profile Picture</Modal.Header>
        <Modal.Content image scrolling>
            <Image size='medium' src={props.article.urlToImage} wrapped />

            <Modal.Description>
                <Header>{props.article.title}</Header>
                <p>{props.article.content}</p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Rating article={props.article}/>
        </Modal.Actions>
    </Modal>
)

export default FullStory