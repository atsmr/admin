import { h, Component, options } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import ADD from '../../../assets/add.svg';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
import UNKNOWN from '../../../assets/icons/icon-anonymous.jpg'
import CHECK from '../../../assets/icons/icon-check.svg'

@connect(reducer, actions)
class Input extends Component {
    constructor(props) {
        super(props)
        this.editableListClick = this.editableListClick.bind(this)
        this.onBlur = this.onBlur.bind(this)
        this.state = {
            placeholder: this.props.placeholder,
            disabled: true
        }
    }
    editableListClick = (e) => {
        this.setState({ disabled: false })
        setTimeout(() => {
            e.target.focus()
        }, 1)
    }
    onBlur = (e) => {
        this.setState({ disabled: true })
    }
    componentDidMount() {
        this.setState({disabled: false})
        if (this.props.s.visibility.workSpace) {
        setTimeout(()=> {this.refs.focus()}, 1)
        }
    }
    render() {
        if (this.props.type === 'editableList') {
            return (
                <div class={this.state.disabled ? style.editableList : style.editableListFocus} onclick={this.editableListClick}>
                    <div class={style.wrap}>
                        <div class={style.draggable}></div>
                        <div class={style.avatar}>
                            { this.props.i.thumbnail ? <img src={this.props.i.thumbnail} width="26" height="26" alt="" /> : <img src={UNKNOWN} width="26" height="26" alt="" /> }
                        </div>
                        <div class={style.title}>
                            <input id={this.props.id} data-key={this.props.dataKey} data-index={this.props.dataIndex} value={this.props.value} key={this.props.key} ref={c => {this.refs=c} } type="text" placeholder={'Write a task name'} onkeydown={this.props.onkeydown} disabled={this.state.disabled} onblur={this.onBlur}/></div>
                        <div class={style.check}>
                            <button><img src={CHECK} width="13" height="10" alt="" /></button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Input;
