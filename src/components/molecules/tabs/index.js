import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
import SEARCH from '../../../assets/icons/icon-search-w.svg'
import CLOSE from '../../../assets/icons/icon-close-w.svg'

@connect(reducer, actions)
class Tabs extends Component {
	constructor(props) {
		super(props)
        this.searchOn = this.searchOn.bind(this)
        this.state = {
            searchIcon: true,
            navs: this.props.navs,
            position: {
                left: 0,
                width: 0
            }
        }
    }
    componentDidMount() {
        let t = document.getElementById('header-nav-items').children
        this.setState({position: { width: t[0].clientWidth, left: 0 }})
    }
    searchOn = (e) => {
        this.setState({searchIcon: !this.state.searchIcon})
    }
    render() {
        let Items = this.state.navs.map((item) => {
            return (
                <li class={ item.current ? style.current : null}>{item.title}</li>
            )
        })
		return (
            <nav class={style.r}>
                <ul id="header-nav-items">
                    {Items}
                    <li class={style.line} style={this.state.position}></li>
                </ul>
                {!this.state.searchIcon ? <div class={style.search}><input type="text" value="" placeholder="Search Projects" /></div> : null}
                <div class={style.searchIcon}>
                    <img onclick={this.searchOn} class={this.state.searchIcon ? style.searchIconImg : style.searchIconImgFalse } src={SEARCH} width="20" height="20" alt="Search" />
                    <img onclick={this.searchOn} class={this.state.searchIcon ? style.closeIconImg : style.closeIconImgFalse } src={CLOSE} width="16" height="16" alt="Close" />
                </div>
            </nav>
		)
	}
}

export default Tabs;
