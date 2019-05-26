import React from 'react'
import { Card, Reveal, Form, Input, Button, Image } from 'semantic-ui-react'


const Login = () => {
    
    return (
        
        
            <Card.Group>
            <Card>
                <Card.Content>
                    <Reveal animated='move right'>
                        <Reveal.Content visible>
                            <h3>Sign Up</h3>
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Form>
                                <Form.Field
                                    id='form-input-control-username'
                                    control={Input}
                                    label='Username:'
                                />
                                <Form.Field
                                    id='form-input-control-password'
                                    control={Input}
                                    label='Password'
                                />
                                <Button type='submit'>Sign Up</Button>
                            </Form>
                        </Reveal.Content>                
                    </Reveal>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Reveal animated='move left'>
                        <Reveal.Content visible>
                            {/* <h3>Sign In</h3> */}
                            <Image src='policomp/PoliComp-Frontend/policomp/src/compass2.jpeg' size='large' />

                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Form>
                                <Form.Field
                                    id='form-input-control-username'
                                    control={Input}
                                    label='Username:'
                                />
                                <Form.Field
                                    id='form-input-control-password'
                                    control={Input}
                                    label='Password'
                                />
                                <Button type='submit'>Sign In</Button>
                            </Form>
                        </Reveal.Content>
                    </Reveal>
                </Card.Content>
            </Card>
        </Card.Group>

    )

}

export default Login