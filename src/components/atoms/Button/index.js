import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
//import * as firebase from 'firebase'

@connect(reducer, actions)
class Button extends Component {
	constructor(props) {
		super(props)
		console.log(this.props)
		console.log(this.props)
	}
	render() {
		return (
			<button class={ this.props.s.test ? style.dark: style.light }>{this.props.title}</button>
		)
	}
}

export default Button;
