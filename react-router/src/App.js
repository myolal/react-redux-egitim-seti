import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

const News = ({ match }) => {
	return(<h1>News page: { match.params.id }</h1>)
};

const Profile = () => {
	return(<h1>Profile Page: Mehmet Seven</h1>)
};

const Error = () => {
	return(<div>This page was not found.</div>)
};

class App extends Component {
  state = {
    loggedIn: false
  };

	onClickButton = () => {
	  this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  };

  render() {
    return (
			<Router>
        <div>
          <NavLink activeClassName="activelink" exact to="/">Homepage</NavLink> <br/>
          <NavLink activeClassName="activelink" exact to="/contact">Contact</NavLink> <br/>
          <NavLink activeClassName="activelink" exact to="/news/2">News</NavLink> <br/>
          <NavLink activeClassName="activelink" exact to="/profile">Profile</NavLink>

					<br/><br/>

					<input
            type="button"
            onClick={this.onClickButton}
            value={ this.state.loggedIn ? 'Logout': 'Login' }
          />

					<Switch>
						<Route path="/" exact render={
							() => {
								return(<h1>Home page</h1>)
							}
						} />

						<Route path="/contact" exact strict render={
							() => {
								return(<h1>Contact page</h1>)
							}
						} />

						<Route path="/news/:id" exact strict component={News} />

						<Route path="/profile" exact strict render={ () => (
							this.state.loggedIn ? ( <Profile/>) : (<Redirect to="/" />)
						)} />

						<Route component={Error}></Route>
					</Switch>
        </div>
      </Router>
    );
  }
}

export default App;
