import './App.css';
import './App.scss';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './pages/Videoarea/Videoarea'
import Upload from './pages/Upload/Upload'




class App extends React.Component {

render() {
      return (
  <Router>
    <Header/>
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path='/upload' exact component={Upload}/>
        <Route path='/videos/:id' component={Home}/>
    </Switch>
  </Router>
    )
  }
}


export default App;
