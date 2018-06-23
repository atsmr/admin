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
import config from '../conf/firebase'
import firebase from "firebase/app";
import 'firebase/firestore';

@connect(reducer, actions)
class App extends Component {
    constructor(props) {
        super(props)
        let that = this
        firebase.initializeApp(config)
        this.db = firebase.firestore()
        this.db.settings({timestampsInSnapshots: true})

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                let uid = user.uid
                that.props.login(true)
                that.setState({checkLogin: true})
                that.db.collection("people").where('user', '==', true).onSnapshot(function(docs) {
                    let users = []
                    let currentUser = {}
                    docs.forEach(function(doc) {
                        if (doc.data().uid === uid) {
                            currentUser = doc.data()
                        }
                        users.push(doc.data());
                    });
                    // TODO:: Add people
                    //that.db.collection('people').doc().set(currentUser)
                    that.props.fetchUsers(users, currentUser)
                })
            } else {
                that.setState({checkLogin: true})
            }
        })
        this.state = {
            checkLogin: false
        }
    }

    handleRoute = e => { this.currentUrl = e.url; };

    render() {
        if(this.props.s.login && this.state.checkLogin ) {
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
        } else if (this.state.checkLogin && !this.props.s.login ) {
            return <Login />
        } else {
            return <Loading />
       }
    }
}

export default App

//that.db.collection('people').doc().set(doc.data())

//firebase.auth().signOut().then(function() {
//  // Sign-out successful.
//}).catch(function(error) {
//  // An error happened.
//})
