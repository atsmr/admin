import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style.css';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
import UNKNOWN from '../../../assets/icons/icon-anonymous.jpg'
import firebase from "firebase/app";
import "firebase/auth";

@connect(reducer, actions)
class Avatar extends Component {
	constructor(props) {
		super(props)
        this.hover = this.hover.bind(this)
        this.out = this.out.bind(this)
        this.logout = this.logout.bind(this)
        this.state = {
            h: {
                height: 31
            },
            visibility: false
        }

    }
    hover = (e) => {
        this.setState({
            h: {
                height: 100
            },
            visibility: true
        })
    }
    out = (e) => {
        this.setState({
            h: {
                height: 31
            },
            visibility: false
        })
    }
    logout = () => {
        firebase.auth().signOut().then(function() {
            location.reload()
            console.log('Logout')
        }).catch(function(error) {
            console.log(error)
        })
    }
    render() {
        return (
            <div class={style.r}>
                <div class={style.w}>
                    <div class={style.img}>
                        { this.props.i.thumbnail ? <img src={this.props.i.thumbnail} width="26" height="26" alt="" /> : <img src={UNKNOWN} width="26" height="26" alt="" /> }
                    </div>
                    <div class={style.info}>
                        <p class={style.title}>{this.props.i.title}</p>
                        <p class={style.name}>{this.props.i.firstName ? this.props.i.setLanguage === 'en-US' ? this.props.i.firstName + ' ' + this.props.i.lastName : this.props.i.lastName + ' ' + this.props.i.firstName : null } </p>
                    </div>
                </div>
                <ul class={style.subMenu}>
                    <li><Link href="/">Setting</Link></li>
                    <li onclick={this.logout}>Logout</li>
                </ul>
            </div>
            )
        }
}

export default Avatar;
