import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import ADD from '../../../assets/add.svg';
import reducer from '../../../reducer'
import * as actions from '../../../actions'

@connect(reducer, actions)
class ButtonAdd extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
            <button onclick={() => this.props.openAddList(this.props.s.visibility.addList)} class={style.r} style={this.props.s.visibility.addList ? { right: 115, transform: 'rotate(-45deg)'} : this.props.s.visibility.workSpace ? { opacity: 0, right: 115, bottom: 600} : {right: 60}} ><img class={style.add} src={ADD} width="32" height="32" alt="Add" />{this.props.title}</button>
		)
	}
}

export default ButtonAdd;
