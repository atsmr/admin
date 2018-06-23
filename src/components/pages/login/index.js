import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import style from './style'
import Logo from '../../../assets/logo.svg'
import firebase from 'firebase/app';
import 'firebase/auth';
import { connect } from 'preact-redux'
import reducer from '../../../reducer'
import * as actions from '../../../actions'

@connect(reducer, actions)
class Login extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
        this.err = this.err.bind(this)
        this.state = {
            errMsg: ''
        }
    }
    success = () => {
        console.log('Success')
    }
    err = (msg) => {
        this.setState({errMsg: msg})
        console.log(msg)
    }
    login = () => {
        let that = this;
        let form = document.forms.login, email = form.email.value, password = form.password.value
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            error ? that.err(error.message) : that.success()
        })
    }
    kd = e => {
        e.keyCode === 13 ? this.login() : null
    }
    render() {
        return (
            <div class={style.i} style={this.state.signUp ? 'max-width: 680px': null}>
                <section>
                    <div class={style.loginSec}>
                        <img src={Logo} alt=""/>
                        <h1>Welcome Back,<span>Log in to contenue</span><span>to FamilyLand</span></h1>
                        <div class={this.state.signUp ? style.none : ''}>
                            <form name="login">
                                <input type="email" name="email" placeholder="E-mail" />
                                <input type="password" name="password" placeholder="Password" onkeydown={this.kd}/>
                                <p class={style.errorMassage}>{this.state.errMsg}</p>
                            </form>
                            <p style={{fontSize: 11}}>Don't have an account? <span class={style.signup}>Contact to Admin</span></p>
                        </div>
                    </div>
                </section>
            </div>
       )
    }
}
export default Login
