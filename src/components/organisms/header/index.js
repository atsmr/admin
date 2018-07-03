import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import LOGO from '../../../assets/logo.svg'
import * as actions from '../../../actions'
import reducer from '../../../reducer'
import Button from '../../atoms/Button'
import ICON_ADD from '../../../assets/icons/icon-add-bl.svg'

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
        if(txt == 'Works') {
            this.props.changeMainSec([0, 1440])
        } else {
            this.props.changeMainSec([-1440, 0])
        }
        for(let i = 0; i < lists.length; i++) {
            if(lists[i].children[0].innerText === txt) {
                lists[i].children[0].classList.add('on')
                w = lists[i].children[0].clientWidth
                p += 25
                txt.toLowerCase() === 'works' ? this.props.changePath('/') : this.props.changePath('/' + txt.toLowerCase() + '/')
            } else if (i == 0) {
                lists[i].children[0].classList.remove('on')
                p += lists[i].children[0].clientWidth + 50
                txt.toLowerCase() === 'works' ? this.props.changePath('/') : this.props.changePath('/' + txt.toLowerCase() + '/')
            }
        }
        this.props.currentHeaderNav([w,p])
    }

	render() {
		return (
            <header class={this.props.s.path == "/" ? style.dark : style.light }>
                <div class={style.inr}>
                    <img class={style.logo} src={LOGO} width="26" height="26" alt="FamilyLand, Inc." />
                    <nav>
                        <ul>
                            <li><Link activeClassName={style.active} onclick={this.current} href="/">Works</Link></li><li><Link activeClassName={style.active} onclick={this.current} activeClassName={style.active} href="/docs/">Docs</Link></li><li class={style.current} style={{ left: this.props.s.position.headerNav[1] + 'px', width: this.props.s.position.headerNav[0] + 'px'}}></li>
                        </ul>
                    </nav>
                </div>
			</header>
		)
	}
}

export default Header;
