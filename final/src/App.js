import React from 'react';
import MovieGrid from './components/MovieGrid';
import Carousel from './components/Carousel';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Link,Switch} from "react-router-dom"
import "./index.css"
import HomePage from './components/HomePage';
// import Link from '@material-ui/core/Link';


function App() {
  return (
    <div id="main" className="app">
    
   
    <Router>
      
    <NavBar></NavBar>

    <Switch>
    {/* <Route path="/home"  component={Dashboard}/>  */}
    {/* <Route path="/"  component={Dashboard}/> */}
    <Route path="/gamify" component={HomePage}/>
    <Route path="/"  component={Dashboard}/>

    </Switch>
    
    
    </Router>
    </div>
  );
}

function Dashboard() {
  return (
    <div  >
       <Carousel></Carousel>
      <MovieGrid></MovieGrid> 
    
    </div>
  ) 
}

export default App;
