import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store from './Store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './Components/NotFound';
import About from './Components/Header/About';
import Contact from './Components/Header/Contact';
import Login from './Components/Login';
import Compare from './Components/Compare/Compare';
import LoginCompare from './Components/LoginCompare';

Store.subscribe(() => {
    console.log(Store.getState());
})

class MyRoute extends React.Component {
    render() {
      var { Component, path, exact, passedProps } = this.props;
      return (
        <Route
          path={path}
          exact={exact}
          render={props => <Component {...props} {...passedProps} />}
        />
      );
    }
  };

ReactDOM.render(
    <Provider store={Store}>
        <Router >
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/compare" component={Compare}/>
                <MyRoute path="/stats" Component={Login} />
                <MyRoute path="/comparestats/:username1/:username2" Component={LoginCompare}/>
                <Route component={Notfound} />
            </Switch>
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
