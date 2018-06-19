import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Header from './organisms/header';
import Home from 'async!../routes/home';
import Profile from 'async!../routes/profile';
//import * as firebase from 'firebase'
//import 'firebase/firestore'
//import config from '../../../conf/firebase'
import { connect } from 'preact-redux'
import reducer from '../reducer'
import * as actions from '../actions'

@connect(reducer, actions)
class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}

export default App
