import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import style from './style'
import Logo from '../../../assets/logo.svg'
//import * as firebase from 'firebase'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
        this.signUp = this.signUp.bind(this)
        this.state = {
            signUp: false,
            laoding: false
        }
    }

    login = () => {
        console.log('clicked')
        this.setState({
            loading: true
        })
        let form = document.forms.login,
            email = form.email.value,
            password = form.password.value

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(function(error) {
                var errorCode = error.code
                var errorMessage = error.message
                console.log(errorCode)
                console.log(errorMessage)
            })
    }

    signUp = () => {
        this.setState({
            signUp: true
        })
    }

    kd = e => {
        e.keyCode === 13? this.login() : null
    }

    render() {
        return (
            <div class={style.i} style={this.state.signUp ? 'max-width: 680px': null}>
                <section>
                    <div class={style.loginSec}>
                        <img src={Logo} alt=""/>
                        { this.state.signUp ? <h1>Welcome!<span>Sign up to contenue</span><span>to FamilyLand, Inc.</span></h1> : <h1>Welcome Back,<span>Log in to contenue</span><span>to FamilyLand</span></h1>}
                        <div class={this.state.signUp ? style.none : ''}>
                            <form name="login">
                                <input type="email" name="email" placeholder="E-mail" />
                                <input type="password" name="password" placeholder="Password" onkeydown={this.kd}/>
                            </form>
                            <p>Don't have an account? <span class={style.signup} onClick={this.signUp}>Contact to Admin</span></p>
                        </div>
                    </div>
                </section>
            </div>
            )
}
}
