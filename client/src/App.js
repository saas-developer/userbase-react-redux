import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import {
	Route
} from 'react-router-dom';
import HomePage from './HomePage';
import Register from './account/Register';
import ResetPassword from './account/ResetPassword';
import Login from './account/Login';
import Logout from './account/Logout';
import Header from './header/Header'
import { NotificationContainer } from 'react-notifications';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/dist/react-notifications.css';
import './App.scss';

class App extends React.Component {
  state = {
	user: null
  }

  render() {
	return (
        <Provider store={store} >
    	  <div className="app">
            <NotificationContainer />
    		<header className="app-header">
    		  <Header />
    		</header>
    		<div className="app-container">
    		  <Route exact path="/" component={HomePage} />
    		  <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
    		  <Route exact path="/register" component={Register} />
    		  <Route exact path="/account/reset-password" component={ResetPassword} />
    		</div>
    	  </div>
        </Provider>
	);
  }
}

export default App;
