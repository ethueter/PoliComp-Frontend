import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import NavBar from './components/NavBar';
import Login from './components/Login'
import { Switch, Route} from 'react-router-dom'
import { Header } from 'semantic-ui-react'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      token: ''
    }
  }

  newSession = (user) => {
    console.log(user)
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(token => console.log(token))

  }

  handleSubmit = (user) => {
    
    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(newUser => {
        newUser.password = user.password
         this.newSession(newUser)
      })

  }
  

  

  

  render() {
    
    return (
      <div className="App">
        <div>
          <Header size='huge'>Political Compass</Header>
          <Header as='h3'>Read It.  Rate It.  Find Your Way.</Header>
        </div>
        <NavBar />
        <Switch>
          <Route exact path='/login' render={() => <Login handleSubmit={this.handleSubmit}/>} />
          <Route path='/' component={MainContainer} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
