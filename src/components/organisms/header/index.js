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
        this.current = this.current.bind(this)
	}
    current = (e) => {
        let arr = [];
        let p = 0, w = 0;
        let index;
        let txt = e.target.innerText
        let target = e.target.parentNode.parentNode.children
        let lists = Array.from(target)
        lists.pop()
        for(let i = 0; i < lists.length; i++) {
            if(lists[i].children[0].innerText === txt) {
                w = lists[i].children[0].clientWidth
                p += 25
                break
            } else {
                p += lists[i].children[0].clientWidth + 50
            }
        }
        console.log(p)
        this.props.currentHeaderNav([w,p])
    }
	render() {
        console.log(this.props.s.position.headerNav)
		return (
            <header class={ this.props.s.page === "/" ? style.dark : style.light }>
                <div class={style.inr}>
                    <img class={style.logo} src={LOGO} width="26" height="26" alt="FamilyLand, Inc." />
                    <nav>
                        <ul>
                            <li><Link onclick={this.current} activeClassName={style.active} href="/">Works</Link></li>
                            <li><Link onclick={this.current} activeClassName={style.active} href="/">Docs</Link></li>
                            <li class={style.current} style={{ left: this.props.s.position.headerNav[1] + 'px', width: this.props.s.position.headerNav[0] + 'px'}}></li>
                        </ul>
                    </nav>
                    <Button title="Add" />
                </div>
			</header>
		)
	}
}

export default Header;
