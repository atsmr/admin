import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Header from './organisms/header';
import Home from 'async!../routes/home';
import Profile from 'async!../routes/profile';
import Docs from 'async!../routes/docs';
import Main from '../components/organisms/main';
import PersonalMenu from '../components/organisms/personalMenu';
import Login from '../components/pages/login';
import Loading from '../components/pages/loading';
import { connect } from 'preact-redux'
import reducer from '../reducer'
import * as actions from '../actions'
import firebase from "firebase/app";
import config from '../conf/firebase.js'
//import 'firebase/firestore'

@connect(reducer, actions)
class App extends Component {
    constructor(props) {
        super(props)
        this.staet = {
            checkLogin: false
        }
    }
    componentWillMount() {
        firebase.initializeApp(config);
        let that = this;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                that.props.login(true)
                console.log(user.name)
                that.setState({checkLogin: true})
            } else {
            }
        })
    }

    handleRoute = e => { this.currentUrl = e.url; };
	render() {
        if(this.props.s.login) {
            return (
                <div id="app">
                    <Header />
                    <Main>
                        <Router onChange={this.handleRoute}>
                            <Home path="/"/>
                            <Profile path="/profile/" user="me" />
                            <Profile path="/profile/:user" />
                            <Docs path="/docs/" />
                        </Router>
                    </Main>
                    <PersonalMenu />
                </div>
                )
        } else if(this.state.checkLogin) {
            return <Login />
        } else {
            return <Loading />
        }
	}
}

export default App
