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
        this.onKeyChange = this.onKeyChange.bind(this)
        this.db = firebase.firestore()
        this.initId = this.db.collection('tasks').doc().id
        this.state = {
            member: false,
            name: "",
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

    onKeyChange = (e) => {
      //  let pushId = this.db.collection('tasks').doc().id
        if(e.keyCode === 13 && e.target.value) {
            console.log(e.target.value);
            this.setState(s => ({
                tasks: [...s.tasks, {title: e.target.value} ],
            }))
        }


        else if(e.keyCode === 8 && !e.target.value) {
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

          DataTasks.tasks = this.state.tasks.slice(1);
          DataTasks.createTime = Timestamp
          DataTasks.projectId = pushId

          DataProjects.createTime = Timestamp

          this.db.collection('projects').doc(pushId).set(DataProjects).catch(function(error) {
            console.error("Error writing document: ", error);
          });
          this.db.collection('tasks').doc().set(DataTasks).catch(function(error) {
            console.error("Error writing document: ", error);
          });

          this.props.pushProjectData(false)
          this.props.openWorkSpace(true)
        }

        console.log(this.state, 'state');
        console.log(this.props,'this props');

        let Tasks = this.state.tasks.map((task,i) => {
            return (
                <Input type="editableList" key={task.id} dataKey={task.id} dataIndex={i} onkeydown={this.onKeyChange} />
            )
        })
        let userNameList = this.props.u.map((user) => {
            return (
              <li onclick={() => {this.setState({member: !this.state.member,name: user.handleName})}}> 
              <img src={this.props.i.thumbnail ? this.props.i.thumbnail : UNKNOWN } width="32" height="32" alt="" /> 
              <p class={style.name} > {user.handleName}</p>
              </li>
            )
        })
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
