import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import LOGO from '../../../assets/logo.svg'
import * as actions from '../../../actions'
import reducer from '../../../reducer'
//import * as firebase from 'firebase'

@connect(reducer, actions)
class Sidebar extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
      <nav>
      <div class={style.sidenav}>
        <ul> 
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>

      <div class={style.main}>
      </div>
      </nav>
    )
	}
}

export default Sidebar;
