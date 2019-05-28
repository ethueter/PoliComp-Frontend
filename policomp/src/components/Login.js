import React from 'react'
import { Card, Form, Input, Button } from 'semantic-ui-react'


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    
    render() {

        return (
        
        
            <Card.Group>
            <Card>
                <Card.Content>
                            <Form className='sign-up' onSubmit={() => this.props.handleSubmit(this.state)}>
                                <Form.Field
                                    id='form-input-control-su-username'
                                    control={Input}
                                    label='Username:'
                                    name='username'
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <Form.Field
                                    id='form-input-control-su-email'
                                    control={Input}
                                    label='Email'
                                    name='email'
                                    onChange={(e)=> this.handleChange(e)}
                                />
                                <Form.Field
                                    id='form-input-control-su-password'
                                    control={Input}
                                    type='password'
                                    label='Password'
                                    name='password'
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <Button type='submit'>Sign Up</Button>
                            </Form>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>                  
                            <Form className='sign-in' onSubmit={()=>this.props.newSession(this.state)}>
                            <Form.Field
                                id='form-input-control-su-username'
                                control={Input}
                                label='Username:'
                                name='username'
                                onChange={(e) => this.handleChange(e)}
                            />
                            <Form.Field
                                id='form-input-control-su-email'
                                control={Input}
                                label='Email'
                                name='email'
                                onChange={(e) => this.handleChange(e)}
                            />
                            <Form.Field
                                id='form-input-control-su-password'
                                control={Input}
                                type='password'
                                label='Password'
                                name='password'
                                onChange={(e) => this.handleChange(e)}
                            />
                            <Button type='submit'>Sign In</Button>
                            </Form>       
                </Card.Content>
            </Card>
        </Card.Group>
        )}

}

export default Login