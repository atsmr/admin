import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import LOGO from '../../../assets/logo.svg'
import * as actions from '../../../actions'
import reducer from '../../../reducer'
//import * as firebase from 'firebase'

@connect(reducer, actions)
class PersonalMenu extends Component {
    constructor(props) {
        super(props)
        this.open = this.open.bind(this)
    }

    open = () => {
        this.props.openPersonalMenu(this.props.s.visibility.personalMenu)
    }

    render() {
        return (
            <section class={ this.props.s.visibility.personalMenu ? style.rOpen : style.r }>
                <div class={style.wrap}>
                    <div class={style.main}>
                        <section class={style.calendar}>
                            <header>
                                <h1>June<span>2018</span></h1>
                            </header>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Sun</td>
                                        <td>Mon</td>
                                        <td>Tue</td>
                                        <td>Wed</td>
                                        <td>Thu</td>
                                        <td>Fri</td>
                                        <td>Sat</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class={style.holiday}><span class={style.day}>1</span></td>
                                        <td><span class={style.day}>2</span></td>
                                        <td><span class={style.day}>3</span></td>
                                        <td><span class={style.day}>4</span></td>
                                        <td><span class={style.day}>5</span></td>
                                        <td><span class={style.day}>6</span></td>
                                        <td class={style.holiday}><span class={style.day}>7</span></td>
                                    </tr>
                                    <tr>
                                        <td class={style.holiday}><span class={style.day}>8</span></td>
                                        <td><span class={style.day}>9</span></td>
                                        <td><span class={style.day}>10</span></td>
                                        <td><span class={style.day}>11</span></td>
                                        <td><span class={style.day}>12</span></td>
                                        <td><span class={style.day}>13</span></td>
                                        <td class={style.holiday}><span class={style.day}>14</span></td>
                                    </tr>
                                    <tr>
                                        <td class={style.holiday}><span class={style.day}>15</span></td>
                                        <td><span class={style.day}>16</span></td>
                                        <td><span class={style.day}>17</span></td>
                                        <td><span class={style.day}>18</span></td>
                                        <td><span class={style.day}>19</span></td>
                                        <td><span class={style.day}>20</span></td>
                                        <td class={style.holiday}><span class={style.day}>21</span></td>
                                    </tr>
                                    <tr>
                                        <td class={style.holiday}><span class={style.day}>22</span></td>
                                        <td><span class={style.day}>23</span></td>
                                        <td><span class={style.day}>24</span></td>
                                        <td><span class={style.day}>25</span></td>
                                        <td><span class={style.day}>26</span></td>
                                        <td><span class={style.day}>27</span></td>
                                        <td class={style.holiday}><span class={style.day}>28</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </div>
                </div>
                <div class={style.button}>
                    <button onclick={this.open}></button>
                </div>
            </section>
            )
    }
}

export default PersonalMenu;
