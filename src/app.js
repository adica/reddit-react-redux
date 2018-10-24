import React from 'react';
import Nav from './components/nav/nav';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Registration from './components/user/registration';
import Links from './components/links/links';
import './app.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validUser: false,
            username: ''
        };

        this.usernameChanged = this.usernameChanged.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    usernameChanged(e) {
        this.setState({ username: e.target.value });
    }

    createUser() {
        if (this.state.username) {
            this.setState({ validUser: true });
        }
    }

    render() {
        return (
            <Router>
                <div className="reddit-app">

                    <h1>Reddit {this.state.validUser}</h1>
                    <Nav />

                    <Route exact path="/" render={() => (
                        <React.Fragment>
                            {this.state.validUser && (
                                <Redirect to="/links" />
                            )}

                            {!this.state.validUser && (
                                <Registration
                                    username={this.state.username}
                                    usernameChanged={this.usernameChanged}
                                    createUser={this.createUser}
                                />
                            )}
                        </React.Fragment>
                    )} />

                    <Route path="/links" render={() => (
                        <React.Fragment>
                            {!this.state.validUser && (
                                <Redirect to="/" />
                            )}
                            {this.state.validUser && (
                                <Links />
                            )}
                        </React.Fragment>
                    )} />

                </div>
            </Router>
        );
    }
}

export default App;
