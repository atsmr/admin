import { h, Component } from 'preact';
import { route } from 'preact-router';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
import Task from '../../../components/organisms/task/'
import Input from '../../../components/atoms/input'
import Chat from '../../../components/organisms/chat'

@connect(reducer, actions)
class Project extends Component {
    constructor(props) {
        super(props)
        this.editor = this.editor.bind(this)
        this.state = {
            enterRap: 38
        }
    }

    editor = (e) => {
        if(e.keyCode === 13) {
            this.setState(s => ({ enterRap: s.enterRap + 12 }))
        }
    }

    render() {
        console.log(this.state.enterRap)
        return (
            <section class={style.default}>
                <section class={style.content}>
                    <div class={style.contentWrap}>
                        <div class={style.items}>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        <Input type="editableList" placehodler="any task" disabled/>
                        </div>
                    </div>
                </section>
                <section class={style.comments}>
                    <div class={style.commentsWrap}>
                        <div class={style.commentField} style={{height: 'calc(100% - ' + this.state.enterRap + 'px)'}}>
                            <Chat />
                        </div>
                        <div class={style.commentInput} style={{height: this.state.enterRap}}>
                                <div class={style.commentInputAvatar}>
                                    <img src={this.props.i.thumbnail} width="23" height="23" alt="" />
                                </div>
                                <p onkeydown={this.editor} contentEditable="true">C</p>
                        </div>
                    </div>
                </section>
                <section class={style.summary}>
                    <div class={style.summaryWrap}>
                        <Task id={this.props.taskId} />
                        <p>{this.props.id}</p>
                    </div>
                </section>
            </section>
            )
    }
}

export default Project;
