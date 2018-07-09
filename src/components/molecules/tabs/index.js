import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import * as actions from '../../../actions'
import reducer from '../../../reducer'

@connect(reducer, actions)
class Tabs extends Component {
	constructor(props) {
		super(props)
        this.state = {
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
            </nav>
		)
	}
}

export default Tabs;
