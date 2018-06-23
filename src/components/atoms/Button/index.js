import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import ADD from '../../../assets/add.svg';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
//import * as firebase from 'firebase'

@connect(reducer, actions)
class Button extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
		<button class={ this.props.s.test ? style.dark: style.light }><img class={style.add} src={ADD} width="2" height="2" alt="+" />{this.props.title}</button>
		)
	}
}

export default Button;
