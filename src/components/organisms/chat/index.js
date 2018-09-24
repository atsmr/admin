import { h, Component } from 'preact'
import { route } from 'preact-router'
import { connect } from 'preact-redux'
import style from './style'
import * as actions from '../../../actions'
import reducer from '../../../reducer'

@connect(reducer, actions)
class Chat extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section class={style.r}>
                <div class={style.scroll}>
                    <ul class={style.chatItems}>
                        <li>What are you doing?</li>
                        <li>Just coding!</li>
                        <li>了解です。</li>
                        <li>進捗どうですか?</li>
                        <li>まぁまぁです。</li>
                        <li>了解です。</li>
                        <li>進捗どうですか?</li>
                        <li>まぁまぁです。</li>
                        <li>了解です。</li>
                        <li>進捗どうですか?</li>
                        <li>まぁまぁです。</li>
                        <li>了解です。</li>
                        <li>進捗どうですか?</li>
                        <li>まぁまぁです。</li>
                        <li>了解です。</li>
                        <li>進捗どうですか?</li>
                        <li>まぁまぁです。</li>
                        <li>了解です。</li>
                        <li>進捗どうですか?</li>
                        <li>まぁまぁです。</li>
                        <li>了解です。</li>
                        <li>進捗どうですか?</li>
                        <li>ままぁまぁですまぁまぁですまぁまぁですまぁまぁですぁまぁです。ぼちぼちでんなぁー</li>
                        <li>了解です。</li>
                        <li>進捗どうですか?</li>
                        <li>まぁまぁです。</li>
                        <li>了解です。</li>
                        <li>進捗どうですか?</li>
                        <li>まぁまぁです。</li>
                        <li>了解です。</li>
                        <li>進捗どうですか?</li>
                        <li>まぁまぁです。</li>
                        <li>了解です。</li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Chat;
