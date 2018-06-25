import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style.css';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
import UNKNOWN from '../../../assets/icons/icon-anonymous.jpg'

@connect(reducer, actions)
class Avatar extends Component {
	constructor(props) {
		super(props)
        this.state = {
            userFetched: false
        }
    }
    componentWillReceiveProps(p) {
        if(p.s.fetched.users) {
        }
    }
    render() {
		return (
            <div class={style.r}>
                <div class={style.img}>
                    { this.props.i.thumbnail ? <img src={this.props.i.thumbnail} width="26" height="26" alt="" /> : <img src={UNKNOWN} width="26" height="26" alt="" /> }
                </div>
                <div class={style.info}>
                    <p class={style.title}>{this.props.i.title}</p>
                    <p class={style.name}>{this.props.i.firstName ? this.props.i.setLanguage === 'en-US' ? this.props.i.firstName + ' ' + this.props.i.lastName : this.props.i.lastName + ' ' + this.props.i.firstName : null } </p>
                </div>
            </div>
		)
	}
}

export default Avatar;
