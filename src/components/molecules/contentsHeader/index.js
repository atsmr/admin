import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import * as actions from '../../../actions'
import reducer from '../../../reducer'

@connect(reducer, actions)
class Contentsheader extends Component {
	constructor(props) {
		super(props)
    }
    render() {
		return (
            <header class={style.r}>
                <h1>{ this.props.title }</h1>
            </header>
		)
	}
}

export default Contentsheader;
