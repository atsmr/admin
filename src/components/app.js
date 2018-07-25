import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Header from './organisms/header';
import Home from 'async!../routes/home';
import Projects from 'async!../routes/projects';
import Marketing from 'async!../routes/marketing';
import MarketingAnalysis from 'async!../routes/marketing/analysis';
import Management from 'async!../routes/management';
import Support from 'async!../routes/support';
import Profile from 'async!../routes/profile';
import Docs from 'async!../routes/docs';
import Main from '../components/organisms/main';
import PersonalMenu from '../components/organisms/personalMenu';
import WorkSpace from '../components/organisms/workSpace';
import Login from '../components/pages/login';
import Loading from '../components/pages/loading';
import Search from '../components/molecules/search';
import AddList from '../components/molecules/addList';
import ButtonAdd from '../components/atoms/buttonAdd';
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
                that.props.login(true)// login bypas
                that.setState({checkLogin: true})

                that.db.collection("people").where('user', '==', true).onSnapshot(function(docs) {
                    let users = []
                    let currentUser = {}
                    let setLang
                    docs.forEach(function(doc) {
                            doc.data().uid === uid && doc.data().setLanguage === doc.data().language ? setLang = doc.data().setLanguage : null
                      let hide = doc.data()
                      users.push(hide)
                      that.props.fetchUsers(users, currentUser)
                    })
                //    docs.forEach(function(doc) {
                //        doc.data().uid === uid && doc.data().setLanguage === doc.data().language ? currentUser = doc.data() : null
                //        doc.data().language === setLang ? users.push(doc.data()) : null
                //    })
                //    that.props.fetchUsers(users, currentUser)
                })
            } else {
                that.setState({checkLogin: true})
            }
        })
        this.state = {
            checkLogin: false
        }
    }

    handleRoute = e => { this.currentUrl = e.url }

    render() {
        if(this.props.s.login && this.state.checkLogin ) {
            return (
                <div id="app">
                    <Search />
                    <Header />
                    <Main>
                        <Router onChange={this.handleRoute}>
                            <Home path="/"/>
                            <Profile path="/profile/" user="me" />
                            <Profile path="/profile/:user" />
                            <Docs path="/docs/" />
                            <Projects path="/projects/" />
                            <Marketing path="/marketing/" />
                            <MarketingAnalysis path="/marketing/analysis" />
                            <Management path="/management/" />
                            <Support path="/support/" />
                        </Router>
                    </Main>
                    <WorkSpace />
                    <ButtonAdd />
                    <AddList />
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
