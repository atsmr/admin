import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import LOGO from '../../../assets/logo.svg'
import * as actions from '../../../actions'
import reducer from '../../../reducer'
import Button from '../../atoms/Button'
//import * as firebase from 'firebase'

@connect(reducer, actions)
class Header extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<header class={ this.props.s.test ? style.dark: style.light }>
				<div class={style.inr}>
					<img class={style.logo} src={LOGO} width="26" height="26" alt="FamilyLand, Inc." />
				<nav>
					<Link activeClassName={style.active} href="/">Works</Link>
					<Link activeClassName={style.active} href="/profile">Docs</Link>
				</nav>
				<Button title="Add" />
				</div>
			</header>
		)
	}
}

export default Header;
