import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style.css';
import reducer from '../../../reducer'
import * as actions from '../../../actions'

@connect(reducer, actions)
class AddTask extends Component {
	constructor(props) {
		super(props)
    }
    componentDidMount() {
        document.getElementById('add-task-title').focus()
    }
    render() {
        return (
            <section class={style.r}>
                <div class={style.in}>
                    <h1><span>Add</span>Task</h1>
                    <div class={style.title}>
                        <input id="add-task-title" type="text" value="" placeholder="Task Name" />
                    </div>
                    <div class={style.info}>
                    </div>
                    <div class={style.description}>
                        <textarea placeholder="Description"></textarea>
                    </div>
                </div>
            </section>
            )
        }
}

export default AddTask
