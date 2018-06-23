import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import * as actions from '../../../actions'
import reducer from '../../../reducer'

@connect(reducer, actions)
class Avatar extends Component {
	constructor(props) {
		super(props)
        this.state = {
            userFetched: false
        }
    }
    componentWillReceiveProps(p) {
        if(p.s.fetched.users) {
        }
    }
    render() {
		return (
            <div>
            </div>
		)
	}
}

export default Avatar;
