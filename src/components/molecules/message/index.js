import { h, Component } from 'preact';
import { connect } from 'preact-redux'
import style from './style.css';
import reducer from '../../../reducer'
import * as actions from '../../../actions'

@connect(reducer, actions)
class Message extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section class={this.props.s.data.message.type === 'error' ? style.error : style.success} style={this.props.s.visibility.message ? {bottom: 0} : {bottom: '-48px'}}>
            <div class={style.inr}>
                <p>{this.props.s.data.message.txt}</p>
            </div>
            </section>
        )
    }
}

export default Message;
