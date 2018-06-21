import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Header from './organisms/header';
import Home from 'async!../routes/home';
import Profile from 'async!../routes/profile';
import Main from '../components/organisms/main';
import PersonalMenu from '../components/organisms/personalMenu';
import { connect } from 'preact-redux'
import reducer from '../reducer'
import * as actions from '../actions'

//import * as firebase from 'firebase'
//import 'firebase/firestore'
//import config from '../../../conf/firebase'

@connect(reducer, actions)
class App extends Component {
	handleRoute = e => { this.currentUrl = e.url; };
	render() {
		return (
			<div id="app">
				<Header />
                <Main>
                    <Router onChange={this.handleRoute}>
                        <Home path="/"/>
                        <Profile path="/profile/" user="me" />
                        <Profile path="/profile/:user" />
                    </Router>
                </Main>
                <PersonalMenu />
			</div>
		);
	}
}

export default App
