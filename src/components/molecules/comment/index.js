import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import { connect } from 'preact-redux'
import style from './style'
import * as actions from '../../../actions'
import reducer from '../../../reducer'

@connect(reducer, actions)
class Comment extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let t = document.querySelector('textarea');
        t.addEventListener('keydown', autosize);
        function autosize(){
            let el = this
            setTimeout(function() {
                el.style.cssText = 'height:auto; padding:0'
                el.style.cssText = 'height:' + (el.scrollHeight - 25) + 'px'
            }, 0)
        }
    }

    render() {
        return (
            <section class={style.r}>
                <img src={this.props.i.thumbnail} width="46" height="46" alt="" />
                <textarea rows="1" placeholder="Send Cmd + Enter"></textarea>
            </section>
        )
    }
}

export default Comment
