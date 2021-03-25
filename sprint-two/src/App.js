import './App.css';
import './App.scss';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Components/Header';
import Videoarea from './pages/Videoarea'
import Upload from './pages/Upload'




export class App extends React.Component {


render() {
      return (
  <Router>
    <Header/>
    <Switch>
        <Route path="/" exact component={Videoarea}/>
        <Route path='/upload' exact component={Upload}/>
    </Switch>
  </Router>
    )
  }
}


export default App;
