import React from 'react'
import { Button, Icon, Modal, Form, Checkbox, Segment } from 'semantic-ui-react'

class NestedModal extends React.Component {
    state = { open: false }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open } = this.state

        return (
            <Modal
                open={open}
                onOpen={this.open}
                onClose={this.close}
                size='small'
                trigger={
                    <Button primary icon>
                        Submit Rating <Icon name='right chevron' />
                    </Button>
                }
            >
                <Modal.Header>Modal #2</Modal.Header>
                <Modal.Content>
                    <p>That's everything!</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button icon='check' content='All Done' onClick={this.close} />
                </Modal.Actions>
            </Modal>
        )
    }
}

class RatingModal extends React.Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })

    render() {

        return(
    
    <Modal trigger={<Button>Multiple Modals</Button>}>
        <Modal.Header>Rate It!</Modal.Header>
        <Modal.Content image>
            <div className='image'>
                <Icon name='right arrow' />
            </div>
            <Modal.Description>
                <p>Please choose the level of political bias you felt the story demonstrated. Once you submit your rating you can see the source of the story.</p>
            </Modal.Description>
            <Segment>
            <Form>
                <Form.Field>
                    <Checkbox
                        radio
                        label='Far Left'
                        name='checkboxRadioGroup'
                        value='5'
                        checked={this.state.value === '5'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='Kinda Left'
                        name='checkboxRadioGroup'
                        value='10'
                        checked={this.state.value === '10'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='Center'
                        name='checkboxRadioGroup'
                        value='15'
                        checked={this.state.value === '15'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='Kinda Right'
                        name='checkboxRadioGroup'
                        value='20'
                        checked={this.state.value === '20'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='Far Right'
                        name='checkboxRadioGroup'
                        value='25'
                        checked={this.state.value === '25'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
            </Form>
            </Segment>
        </Modal.Content>
        <Modal.Actions>
            <NestedModal />
        </Modal.Actions>
    </Modal>
    
        
    )}
}

export default RatingModal