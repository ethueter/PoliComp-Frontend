import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
export default class NavBar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
            
                {
                localStorage.getItem('token') ?
                        <Menu.Item
                            as={Link}
                            to='/'
                            name='login'
                            active={activeItem === 'login'}
                            onClick={this.handleItemClick}>
                            Logout
                        </Menu.Item> : 
                                <Menu.Item
                                    as={Link}
                                    to='/login'
                                    name='login'
                                    active={activeItem === 'login'}
                                    onClick={this.handleItemClick}>
                                    Login
                        </Menu.Item>
                }
                
                    <Menu.Item 
                    as={Link}
                    to='/'
                    name='home' 
                    active={activeItem === 'home'} 
                    onClick={this.handleItemClick}>
                        Home
                    </Menu.Item>
                
                <Menu.Item
                    name='profile'
                    active={activeItem === 'profile'}
                    onClick={this.handleItemClick}>
                    Profile
                </Menu.Item>
                <Menu.Item
                    name='sources'
                    active={activeItem === 'sources'}
                    onClick={this.handleItemClick}>
                    News Sources
                </Menu.Item>
            </Menu>
            
        )
    }
} 