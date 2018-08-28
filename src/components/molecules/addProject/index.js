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
import config from'../../../conf/firebase'
import ADD from '../../../assets/add.svg';

@connect(reducer, actions)
class AddProject extends Component {
    constructor(props) {
        super(props)
        this.update = this.update.bind(this)
        this.onKeyChange = this.onKeyChange.bind(this)
        this.db = firebase.firestore()
        this.initId = this.db.collection('tasks').doc().id
        this.state = {
            member: false,
            assignedMember: [
            ],
            tasks: [
                {
                    //  id: null,
                    category: null,
                    title: null
                }
            ],
            users: [
            ],
            project: {
                title: null,
                description: null,
            }
        }

    }

    update = () => {
        console.log('update')
    }
    
    onKeyChange = (e) => {
        //  let pushId = this.db.collection('tasks').doc().id
        if(e.keyCode === 13 && e.target.value) {
            console.log(e.target.value);
            this.setState(s => ({
                tasks: [...s.tasks, {title: e.target.value} ],
            }))
        } else if(e.keyCode === 8 && !e.target.value) {
            let target = document.getElementById('items')

            if(this.state.tasks.length !== 1) {
                this.setState(s => ({
                    tasks: s.tasks.filter(task => task.id !== e.target.dataset.key),
                    project: {
                        tasks: s.tasks.filter(task => task !== e.target.dataset.key)
                    }
                }))
                let input = target.children[target.children.length - 2].children[0].children[2].children[0]
                input.disabled = false
                input.focus()
            } else {
                this.props.showMessage('error','You should type any text!')
                setTimeout(()=>{
                    this.props.hideMessage(false)
                    let input = target.children[target.children.length - 1].children[0].children[2].children[0]
                    input.disabled = false
                    setTimeout(()=> {
                        input.focus()
                    }, 10)
                }, 1500)
            }
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

    componentWillMount(){
        /*  
      var citiesRef = this.db.collection('users');
      var allCities = citiesRef.get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let users = doc.data();
            console.log(users);
            this.setState(s => ({users:[...s.users, users]}))
          });
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
        */
    }

    componentDidMount() {
        document.getElementById('add-task-title').focus()
        setTimeout(()=>{
            document.getElementById('add-task-title').focus()
        },100)
    }

    render() {
        if (this.props.s.set.project) {
            let pushId = this.db.collection('tasks').doc().id
            let DataTasks = {};
            let Timestamp = new Date();
            let DataProjects = this.state.project;
            let AssignedMember = this.state.assignedMember;

            DataTasks.tasks = this.state.tasks.slice(1);
            DataTasks.createTime = Timestamp
            DataTasks.projectId = pushId

            DataProjects.createTime = Timestamp
            DataProjects.assignedMember = AssignedMember

            this.db.collection('projects').doc(pushId).set(DataProjects).catch(function(error) {
                console.error("Error writing document: ", error);
            });
            this.db.collection('tasks').doc().set(DataTasks).catch(function(error) {
                console.error("Error writing document: ", error);
            });

            this.props.pushProjectData(false)
            this.props.openWorkSpace(true)
        }

        let Tasks = this.state.tasks.map((task,i) => {
            return (
                <Input type="editableList" key={task.id} dataKey={task.id} dataIndex={i} placehodler={task.title} onkeydown={this.onKeyChange} />
            )
        })

        let assignedMemberView = this.state.assignedMember.map((z) => {
            return (
                <li>
                    <img src={this.props.i.thumbnail ? this.props.i.thumbnail : UNKNOWN } width="32" height="32" alt="" />
                    <p class={style.name} > {z.name}</p>
                </li>
            )
        })
        let userNameList = this.props.u.map((user) => {
            return (
                <li onclick={() => {this.setState({
                    member: !this.state.member,
                    assignedMember: this.state.assignedMember.concat([{email: user.email, name: user.handleName}])
                })}}>
                <img src={this.props.i.thumbnail ? this.props.i.thumbnail : UNKNOWN } width="32" height="32" alt="" /> 
                <p class={style.name} > {user.handleName}</p>
            </li>
            )
        })

        if(this.props.s.type.workSpace === 'Project') {
            this.update()
        }

        let assignedMember;
        if (this.state.member) {
            assignedMember =  <div class={style.list}> <ul > {userNameList} </ul> </div>
        }
        let btn_class = this.state.member ? style.plusx : style.plus ;

            return (
                <section class={style.r}>
                    <div class={style.wrap}>
                        <div class={style.in}>
                            <h1><span>Add</span>Project</h1>
                            <div class={style.title}>
                                <input 
                                    id="add-task-title" 
                                    placeholder="Title Name"  
                                    type="text" 
                                    value={this.state.project.title}  
                                    onChange={(e) => this.setState({project:{...this.state.project,title: e.target.value}})}
                                />
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
                                    <div onclick={() => this.setState({member: !this.state.member})} >
                                        <img src={ADD} class={btn_class} />
                                    </div >
                                    <ul>
                                        {assignedMemberView}
                                    </ul>
                                    {assignedMember}
                                </div>
                            </div>
                            <div class={style.description}>
                                <textarea
                                    placeholder="Description"
                                    value={this.state.project.description}
                                    onChange={(e) => this.setState({project:{...this.state.project,description: e.target.value}})}>
                                </textarea>
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
