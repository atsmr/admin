import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
import Tabs from '../../../components/molecules/tabs'

@connect(reducer, actions)
class Contentsheader extends Component {
	constructor(props) {
		super(props)
    }
    render() {
		return (
            <header class={style.r}>
                <h1>{ this.props.title }</h1>
                {this.props.navs ? <Tabs navs={this.props.navs} /> : null}
            </header>
		)
	}
}

export default Contentsheader;
