import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style.css';
import reducer from '../../../reducer'
import * as actions from '../../../actions'

@connect(reducer, actions)
class AddList extends Component {
	constructor(props) {
		super(props)
    }
    render() {
        return (
            <div class={style.r} style={this.props.s.visibility.addList ? { right: 60 } : { right: '-100%' }}>
                <nav>
                    <ul>
                        <li onclick={() => this.props.openWorkSpace(this.props.s.visibility.workSpace, 'Project')}>Project</li>
                        <li onclick={() => this.props.openWorkSpace(this.props.s.visibility.workSpace, 'Doc')}>Doc</li>
                    </ul>
                </nav>
            </div>
            )
        }
}

export default AddList;
