import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style.css';
import reducer from '../../../reducer'
import * as actions from '../../../actions'
import Input from '../../../components/atoms/input'
import UNKNOWN from '../../../assets/icons/icon-anonymous.jpg'
import firebase from "firebase/app";
import 'firebase/firestore';
import config from'../../../conf/firebase'

@connect(reducer, actions)
class AddProject extends Component {
	constructor(props) {
		super(props)
        this.onKeyChange = this.onKeyChange.bind(this)
        this.db = firebase.firestore()
        this.state = {
            tasks: [
                {
                    id: this.db.collection('tasks').doc().id,
                    title: ''
                }
            ]
        }

    }
    pushData = () => {
        document.getElementById('add-task-title').focus()
        var Data = {
            managerName: "hideaki",
            assignedName: "hideaki",
            description: "hideaki",
            dateExample: new Date(),
            arrayTasks: [5, true, 'hello'],
        };
        this.db.collection('projects').doc().set(Data).catch(function(error) {
                console.error("Error writing document: ", error);
        });
    }
    onKeyChange = (e) => {
        if(e.keyCode === 13 && e.target.value !== null) {
            this.setState(s => ({
                tasks: [...s.tasks, {id: this.db.collection('tasks').doc().id, title: e.target.value} ]
            }))
        }
    }
    componentDidMount() {
    }

    render() {
        console.log(this.state.tasks)
        let Tasks = this.state.tasks.map((task) => {
            return (
                <Input type="editableList" key={task.id} placehodler={task.title} onkeydown={this.onKeyChange} />
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
                                        <li> <img src={this.props.i.thumbnail ? this.props.i.thumbnail : UNKNOWN } width="32" height="32" alt="" /> </li>
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
