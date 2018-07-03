import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import LOGO from '../../../assets/logo.svg'
import BACK from '../../../assets/icons/icon-back.svg'
import ADD from '../../../assets/add.svg';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
import AddTask from '../../../components/molecules/addTask'
import AddProject from '../../../components/molecules/addProject'
import AddDoc from '../../../components/molecules/addDoc'

@connect(reducer, actions)
class WorkSpace extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section class={style.r} style={this.props.s.visibility.workSpace ? {opacity: 1, zIndex: 1} : {opacity: 0, zIndex: -1}}>
                <div class={style.ws} style={this.props.s.visibility.workSpace ? { bottom: 48} : {buttom: '-1000'}}>
                    { this.props.s.type.workSpace === 'Task' && <AddTask/>}
                    { this.props.s.type.workSpace === 'Project' && <AddProject/>}
                    { this.props.s.type.workSpace === 'Doc' && <AddDoc/>}
                    <button onclick={() => this.props.openWorkSpace(true)} class={style.close}><img class={style.closeImg} src={ADD} width="32" height="32" alt="Add" />{this.props.title}</button>
                </div>
            </section>
            )
        }
}

export default WorkSpace;
