import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import style from './style'
import Logo from '../../../assets/logo.svg'

export default class Loading extends Component {
    render() {
        return (
            <section class={style.i}>
                <div>
                    <img src={Logo} width="38" alt=""/>
                    <p>LOADING</p>
                </div>
            </section>
        )
    }
}
