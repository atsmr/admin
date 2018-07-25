import { h, Component } from 'preact';
import { route } from 'preact-router';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
//import * as firebase from 'firebase'

@connect(reducer, actions)
class Project extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section>{this.props.projectId}</section>
        )
    }
}

export default Project;

