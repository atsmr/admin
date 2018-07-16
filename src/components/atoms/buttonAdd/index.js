import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import ADD from '../../../assets/add.svg';
import reducer from '../../../reducer'
import * as actions from '../../../actions'
import firebase from "firebase/app";
import 'firebase/firestore';
import AddProject from '../../molecules/addProject/index.js'

@connect(reducer, actions)
class ButtonAdd extends Component {
	constructor(props) {
		super(props)
        this.db = firebase.firestore()
        this.click = this.click.bind(this)
        this.state = {
            title: '',
            style: {
                opacity: 1,
                right: 60,
                transform: ''
            }
        }
	}
    click = (e) => {
        if(this.props.s.visibility.addList) {
            this.props.openAddList(this.props.s.visibility.addList)
        } else if(!this.props.s.visibility.addList) {
            this.props.openAddList(this.props.s.visibility.addList)
        }
    }
    pushProjectData(){}
	render() {
		return (
            <button onclick={this.click} class={style.r}
                style={this.props.s.visibility.addList ? {right: 115, transform: 'rotate(-45deg)'} : this.props.s.type.workSpace === 'Project' || this.props.s.type.workSpace === 'Doc' ? {right: 120, transform: '', width: 120, borderRadius: 30} : {right: 60, transform: ''} }
            >
                {!this.props.s.type.workSpace ? <img class={style.add} src={ADD} width="30" height="30" alt="Add" />: null}
                {this.props.s.type.workSpace ? <p class={style.addText} >Add</p> : null}
            </button>
		)
	}
}

export default ButtonAdd;
