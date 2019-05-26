
import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const FullStory = (props) => (
    
    
    <Modal trigger={<Button>Read It</Button>}>
        <Modal.Header>Profile Picture</Modal.Header>
        <Modal.Content image scrolling>
            <Image size='medium' src={props.article.urlToImage} wrapped />

            <Modal.Description>
                <Header>{props.article.title}</Header>
                <p>{props.article.content}</p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button primary>
                RATE IT <Icon name='chevron right' />
            </Button>
        </Modal.Actions>
    </Modal>
)

export default FullStory