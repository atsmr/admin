import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import * as actions from '../../../actions'
import reducer from '../../../reducer'

@connect(reducer, actions)
class Task extends Component {
	constructor(props) {
		super(props)
    }
    render() {
        const tasks = this.props.tasks
		return (
            <section class={style.r}>
                pfdsafdsa
            </section>
		)
	}
}

export default Task;
