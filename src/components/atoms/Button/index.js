import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import ADD from '../../../assets/add.svg';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
//import * as firebase from 'firebase'

@connect(reducer, actions)
class Button extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
            <button class={style.r} style={ this.props.s.visibility.addList ? {right: 115} : {right: 60}} onclick={() => this.props.openAddList(this.props.s.visibility.addList)}>
                <img src={ICON_ADD} width="20" height="20" alt="FamilyLand, Inc." style={this.props.s.visibility.addList ? {transform: 'rotate(-45deg)' } : null } />
            </button>
            )
}
}

export default Button;
