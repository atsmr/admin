import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import LOGO from '../../../assets/logo.svg'
import * as actions from '../../../actions'
import reducer from '../../../reducer'
//import * as firebase from 'firebase'

@connect(reducer, actions)
class Header extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<header class={style.default}>
				<h1>This is H1</h1>
				<img src={LOGO} width="32" height="32" alt="FamilyLand, Inc." />
				<nav>
					<Link activeClassName={style.active} href="/">Home</Link>
					<Link activeClassName={style.active} href="/profile">Me</Link>
					<Link activeClassName={style.active} href="/profile/john">John</Link>
				</nav>
			</header>
		)
	}
}

export default Header;
