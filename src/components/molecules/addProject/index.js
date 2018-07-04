import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style.css';
import reducer from '../../../reducer'
import * as actions from '../../../actions'
import Input from '../../../components/atoms/input'

@connect(reducer, actions)
class AddProject extends Component {
	constructor(props) {
		super(props)
        this.state = {
            tasks: [
                {
                    id: 0,
                    title: 'new title'
                },
                {
                    id: 1,
                    title: 'new second title'
                }
            ]
        }
    }
    componentDidMount() {
        document.getElementById('add-task-title').focus()
    }
    render() {
        let Tasks = this.state.tasks.map((task) => {
            return (
                <Input type="editableList" placehodler={task.title}/>
                )
        })
        return (
            <section class={style.r}>
                <div class={style.wrap}>
                    <div class={style.in}>
                        <h1><span>Add</span>Project</h1>
                        <div class={style.title}>
                            <input id="add-task-title" type="text" value="" placeholder="Project Name" />
                        </div>
                        <div class={style.info}>
                            <div class={style.assigned}>
                                <p class={style.label}>Managed by</p>
                                <div>
                                    <ul>
                                        <li>
                                            <img src={this.props.i.thumbnail} width="32" height="32" alt="" />
                                            <p class={style.name}>{this.props.i.firstName + ' ' + this.props.i.lastName}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class={style.assigned}>
                                <p class={style.label}>Assignee</p>
                                <div>
                                    <ul>
                                        <li>
                                            <img src={this.props.i.thumbnail} width="32" height="32" alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class={style.description}>
                            <textarea placeholder="Description"></textarea>
                        </div>
                    </div>
                    <div class={style.tasks}>
                        <header>
                            <h1>Tasks</h1>
                        </header>
                        <div class={style.items}>
                            <ul>
                                {Tasks}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            )
    }
}

export default AddProject
