import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import ADD from '../../../assets/add.svg';
import reducer from '../../../reducer'
import * as actions from '../../../actions'
import firebase from "firebase/app";
import 'firebase/firestore';
import AddProject from '../../molecules/addProject'

@connect(reducer, actions)
class Button extends Component {
    constructor(props) {
        super(props)
        this.db = firebase.firestore()
        this.click = this.click.bind(this)
        this.state = {
            title: '',
            style: {
                opacity: 1,
                right: 60,
                tr: ''
            }
        }
    }

    click = (e) => {
        let that = this
        switch(this.props.s.type.workSpace) {
            case 'Project':
                let tasks = this.props.s.set.tasks
                let project = this.props.s.set.project
                tasks.map((task, i) => {
                    this.db.collection('tasks').add(task).then(ref => {
                        console.log('Added document with ID: ', ref.id);
                    })
                })
                this.db.collection('projects').add(project).then(ref => {
                    console.log('Added document with ID: ', ref.id);
                })
                that.props.toggleAddList(this.props.s.visibility.addList)
                this.props.openWorkSpace(true)
                that.props.toggleAddList(!this.props.s.visibility.addList)
            default:
                console.log('default exec')
        }
        this.props.toggleAddList(this.props.s.visibility.addList)
    }

    render() {
        if(this.props.type === 'add') {
            return (
                <button onclick={this.click} class={style.r}
                    style={this.props.s.visibility.addList ? {right: 115, transform: 'rotate(-45deg)'} : this.props.s.type.workSpace === 'Project' || this.props.s.type.workSpace === 'Doc' ? {right: 120, transform: '', width: 120, borderRadius: 30} : {right: 60, transform: ''} }
                >
                    {!this.props.s.type.workSpace ? <img class={style.add} src={ADD} width="30" height="30" alt="Add" />: null}
                    {this.props.s.type.workSpace ? <p class={style.addText}>Add</p> : null}
                </button>
            )
        } else {
            return (
                <button class={style.r} style={ this.props.s.visibility.addList ? {right: 115} : {right: 60}} onclick={() => this.props.openAddList(this.props.s.visibility.addList)}>
                    <img src={ICON_ADD} width="20" height="20" alt="FamilyLand, Inc." style={this.props.s.visibility.addList ? {transform: 'rotate(-45deg)' } : null } />
                </button>
            )
        }
    }
}

export default Button;
