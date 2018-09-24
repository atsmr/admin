import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style.css';
import reducer from '../../../reducer'
import * as actions from '../../../actions'
import Input from '../../../components/atoms/input'
import Select from '../../../components/atoms/select'
import Avatar from '../../../components/molecules/avatar'
import UNKNOWN from '../../../assets/icons/icon-anonymous.jpg'
import firebase from "firebase/app";
import 'firebase/firestore';
import ADD from '../../../assets/add.svg';

@connect(reducer, actions)
class AddProject extends Component {
    constructor(props) {
        super(props)
        //this.onKeyChange = this.onKeyChange.bind(this)
        this.titleKeyChange = this.titleKeyChange.bind(this)
        this.setTask = this.setTask.bind(this)
        this.descKeyChange = this.descKeyChange.bind(this)
        this.db = firebase.firestore()
        this.initId = this.db.collection('tasks').doc().id
        this.state = {
            project: {
                title: '',
                description: '',
                team: []
            },
        }
    }

    titleKeyChange = (e) => {
        if(e.key === 'Control' || e.key == 'Shift' || e.key === 'Meta' || e.key === 'Enter' || e.key === 'Tab' || e.key === 'Down' || e.key === 'Up' || e.key === 'ArrowLeft' || e.key === 'Right' || undefined) {
        } else if (e.key === 'Backspace') {
            this.props.updateProjectTitle(this.props.s.set.project.title.slice(0, -1))
        } else {
            this.props.updateProjectTitle(this.props.s.set.project.title + e.key)
        }
        setTimeout(()=>{
            e.target.focus()
        }, 45)
    }

    descKeyChange = (e) => {
        if(e.key === 'Control' || e.key == 'Shift' || e.key === 'Meta' || e.key === 'Enter' || e.key === 'Tab' || e.key === 'Down' || e.key === 'Up' || e.key === 'ArrowLeft' || e.key === 'Right' || undefined) {
        } else if (e.key === 'Backspace') {
            this.props.updateProjectDescription(this.props.s.set.project.description.slice(0, -1))
        } else {
            this.props.updateProjectDescription(this.props.s.set.project.description + e.key)
        }
        setTimeout(()=>{
            e.target.focus()
        }, 45)
    }

    setTask = (e) => {
        let uid = this.db.collection('tasks').doc().id
        let obj = {
            id: uid,
            title: e.target.value,
            description: '',
            complete: false,
            assigned: [],
            attachments: [],
            author: [],
            startDate: '',
            endDate: '',
            dueDate: '',
            modified: '',
            created: '',
            comments: [],
            refTime: '',
            resTime: '',
            dependencies: {
                prev: '',
                next: ''
            },
            requiredRole: []
        }
        switch(e.keyCode) {
            case 13:
                let t = document.getElementById('add-task')
                if(this.props.s.set.tasks.length === 1 && this.props.s.set.tasks[0].title === '') {
                    e.target.value ? this.props.updateProjectFirstTask(obj) : null
                } else {
                    e.target.value ? this.props.updateProjectTask(obj) : null
                }
                setTimeout(() => {
                    t.disabled = false
                    t.focus()
                    e.target.value = ''
                }, 35)
                break
            case 8:
                break
            default:
                return
                break
        }
    }

    componentDidMount() {
        setTimeout(()=>{ document.getElementById('add-task-title').focus() },100)
    }

    render() {
        let Tasks = this.props.s.set.tasks.map((task,i) => {
            return (
                <Input type="editableList" key={task.id} dataKey={task.id} value={task.title} dataIndex={i} placehodler={task.title} onkeydown={this.setTask} />
            )
        })

        let Avatars = false
        if(this.props.s.set.project.team.length !== 0) {
            Avatars = this.props.s.set.project.team.map((uid,i) => {
                return (
                    <li class={style.teamList}>
                        <div class={style.teamListWrap}>
                            <img src={this.props.u[uid].thumbnail} width="26" height="auto" alt="" />
                            <span class={style.teamListClose}><img src={ADD} width="10" height="10" alt="" /></span>
                        </div>
                    </li>
                )
            })
        }

        return (
            <section class={style.r}>
                <div class={style.wrap}>
                    <div class={style.in}>
                        <h1><span>Add</span>Project</h1>
                        <div class={style.title}>
                            <input id="add-task-title" key="projectTitle" type="text" placeholder="Project Name" value={this.props.s.set.project.title} onkeydown={this.titleKeyChange} />
                        </div>
                        <div class={style.info}>
                            <div class={style.assigned}>
                                <p class={style.label}>Producer</p>
                                <div>
                                    <Avatar src={this.props.i.thumbnail ? this.props.i.thumbnail : UNKNOWN } name={eval('this.props.i.firstName.' + this.props.i.setLanguage) + ' ' + eval('this.props.i.lastName.' + this.props.i.setLanguage)}  />
                                </div>
                            </div>
                            <div class={style.assigned}>
                                <p class={style.label}>Assignee</p>
                                <div class={style.addAvatars}>
                                    <ul class={style.avatarItemsWrap}>
                                        {Avatars ? Avatars : null}
                                    </ul>
                                    <Avatar type="add" />
                                </div>
                            </div>
                        </div>
                        <div class={style.description}>
                            <textarea placeholder="Description" value={this.props.s.set.project.description} onkeydown={this.descKeyChange} ></textarea>
                        </div>
                    </div>
                    <div class={style.tasks}>
                        <header>
                            <h1>Tasks</h1>
                        </header>
                        <div class={style.items}>
                            <ul id="items">
                                {Tasks}
                                <Input id="add-task" type="editableList" key="add" dataKey="add" placehodler="Add task" onkeydown={this.setTask} />
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AddProject
