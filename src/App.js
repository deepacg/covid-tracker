import logo from './logo.svg';
import './App.css';
import react, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import India from './Components/India'
import World from './Components/World'
import States from './Components/States'
import Header from './Components/Header'

class App extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <>
        <div className="container-fluid">
          
          <Router>
          <Header/>
            <Switch>
              <Route exact path='/covid-tracker'>
                <India/>
              </Route>
              <Route path='/covid-tracker/india'>
                <India/>
              </Route>
              <Route path='/covid-tracker/world'>
                <World/>
              </Route>
              <Route path='/covid-tracker/states'>
                <States/>
              </Route>
            </Switch>
          </Router>
        </div>
      </>
    )
  }
}

export default App;
