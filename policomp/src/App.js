import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import NavBar from './components/NavBar';
import Login from './components/Login'
import { Switch, Route} from 'react-router-dom'
import { Header } from 'semantic-ui-react'



class App extends React.Component {

  

  

  

  render() {
    
    return (
      <div className="App">
        <div>
          <Header size='huge'>Political Compass</Header>
          <Header as='h3'>Read It.  Rate It.  Find Your Way.</Header>
        </div>
        <NavBar />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/' component={MainContainer} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
