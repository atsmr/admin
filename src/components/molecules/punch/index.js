import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style.css';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
import PLAY from '../../../assets/icons/icon-play.svg'

@connect(reducer, actions)
class Punch extends Component {
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
            <div class={style.r}>
                <div class={style.w}>
                    <div class={style.left}>
                        <img src={PLAY} width="15" height="15" alt="Play" />
                    </div>
                    <div class={style.right}>
                        <p class={style.timer}>00:00:00</p>
                    </div>
                </div>
            </div>
            )
	}
}

export default Punch;
