import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import reducer from '../../../reducer'
import * as actions from '../../../actions'

@connect(reducer, actions)
class Contents extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section class={style.r}>
                {this.props.children}
            </section>
            )
    }
}

export default Contents;
