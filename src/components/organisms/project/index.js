import { h, Component } from 'preact';
import { route } from 'preact-router';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
//import * as firebase from 'firebase'
import Task from '../../../components/organisms/task/'

@connect(reducer, actions)
class Project extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class={style.r}>
                <section class={style.content}>{this.props.projectId}</section>
                <section class={style.widget}>
                    <Task id={this.props.taskId} />
                    {this.props.id}
                </section>
            </div>
            )
    }
}

export default Project;

