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
            <aside class={style.side}>
                <div class={style.inr}>
                    <nav>
                        <ul>
                            <li><Link activeClassName={style.active} href="/">Dashboard</Link></li>
                            <li><Link activeClassName={style.active} href="/profile">Marketing</Link></li>
                            <li><Link activeClassName={style.active} href="/">Projects</Link></li>
                            <li><Link activeClassName={style.active} href="/profile">Management</Link></li>
                            <li><Link activeClassName={style.active} href="/">Support</Link></li>
                        </ul>
                    </nav>
                </div>
            </aside>
            )
    }
}

export default Sidebar;
