
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Signin from './Signin.jsx';
import Signup from './Signup.jsx';
import Home from './Home.jsx';
import { HashRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

//


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      v : false
    }
    this.toggle = this.toggle.bind(this)
    this.MySignin = this.MySignin.bind(this)
  }

  toggle(){
    var val = !this.state.v
    this.setState({v : val})
  }

  MySignin(props){
      return (
        <Signin
          toggle={this.toggle} v={this.state.v}
          {...props}
        />
      );
    }

  render(){
  return (<Router >
  <HashRouter>
    <div >
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand " href="#" style={{color:'#E9AB17'}}>Handy Neighbors</a>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signin">Signin</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
        </div>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/signin" render={this.MySignin} />
      <Route path="/signup" component={Signup} />
    
    </div>
    </HashRouter>
  </Router>
  
)}
};

ReactDOM.render(<Main />, document.getElementById('route'));

