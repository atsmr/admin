import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style.css';
import reducer from '../../../reducer'
import * as actions from '../../../actions'
import Input from '../../../components/atoms/input'
import Select from '../../../components/atoms/select'
import UNKNOWN from '../../../assets/icons/icon-anonymous.jpg'
import firebase from "firebase/app";
import 'firebase/firestore';

@connect(reducer, actions)
class AddProject extends Component {
	constructor(props) {
		super(props)
        this.update = this.update.bind(this)
        this.onKeyChange = this.onKeyChange.bind(this)
        this.db = firebase.firestore()
        this.initId = this.db.collection('tasks').doc().id
        this.state = {
            tasks: [
                {
                    id: this.initId,
                    category: null,
                    title: ''
                }
            ],
            project: {
                id: '',
                title: '',
                tasks: [ this.initId ]
            }
        }
    }
    update = () => {
        console.log('update')
    }
    onKeyChange = (e) => {
        let pushId = this.db.collection('tasks').doc().id
        if(e.keyCode === 13 && e.target.value) {
            this.setState(s => ({
                tasks: [...s.tasks, {id: pushId, title: e.target.value} ],
                project: {
                    tasks: [...s.project.tasks, pushId ]
                }
            }))
        } else if(e.keyCode === 8 && !e.target.value) {
            // TODO: Filter result is false!!
            this.setState(s => ({
                tasks: s.tasks.filter(task => task.id !== e.target.dataset.key),
                project: {
                    tasks: s.tasks.filter(task => task !== e.target.dataset.key)
                }
            }))
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            document.getElementById('add-task-title').focus()
        },100)
    }

    render() {
        let Tasks = this.state.tasks.map((task,i) => {
            return (
                <Input type="editableList" key={task.id} dataKey={task.id} dataIndex={i} placehodler={task.title} onkeydown={this.onKeyChange} />
                )
        })
        if(this.props.s.type.workSpace === 'Project') {
            this.update()
        }
        return (
            <section class={style.r}>
                <div class={style.wrap}>
                    <div class={style.in}>
                        <h1><span>Add</span>Project</h1>
                        <div class={style.title}>
                            <input id="add-task-title" type="text" value="" placeholder="Project Name" />
                        </div>
                        <div class={style.info}>
                            <div class={style.types}>
                                <p class={style.label}>Type</p>
                                <div class={style.typesInr}>
                                    <Select options={this.state.options} />
                                </div>
                            </div>
                            <div class={style.assigned}>
                                <p class={style.label}>Managed by</p>
                                <div>
                                    <ul>
                                        <li>
                                            <img src={this.props.i.thumbnail ? this.props.i.thumbnail : UNKNOWN } width="32" height="32" alt="" />
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
                            <ul id="items">
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
