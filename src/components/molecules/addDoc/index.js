import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style.css';
import reducer from '../../../reducer'
import * as actions from '../../../actions'

@connect(reducer, actions)
class AddDoc extends Component {
	constructor(props) {
		super(props)
    }
    render() {
        return (
            <section class={style.r}>
                <div class={style.in}>
                    <h1><span>Add</span>Doc</h1>
                </div>
            </section>
            )
        }
}

export default AddDoc
