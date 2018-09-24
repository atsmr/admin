import { h, Component } from 'preact';
import { connect } from 'preact-redux'
import style from './style.css';
import reducer from '../../../reducer'
import * as actions from '../../../actions'

@connect(reducer, actions)
class ProjectSummary extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section class={style.default}>
                <input class={style.title} type="text" value="" placeholder="Any title" />
            </section>
        )
    }
}

export default ProjectSummary;
