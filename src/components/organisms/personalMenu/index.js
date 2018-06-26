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
        this.click = this.click.bind(this)
        this.state = {
            type: 'month'
        }
    }

    open = () => {
        this.props.openPersonalMenu(this.props.s.visibility.personalMenu)
    }
    click = (type) => {
        this.setState({ type: type })
    }

    render() {
        const Month = (
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
            )
        const Week = (
            <table>
                <thead>
                    <th></th>
                    <th>San</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fir</th>
                    <th>Sat</th>
                </thead>
                <tbody>
                    <tr>
                        <td>00</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>01</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>02</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>03</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>04</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>05</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>06</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>07</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>08</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>09</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>10</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>11</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>12</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>13</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>14</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>15</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>16</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>17</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>18</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>19</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>20</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>21</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>22</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class={style.time}>23</td>
                        <td class={style.holiday}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            )
        return (
            <section class={ this.props.s.visibility.personalMenu ? style.rOpen : style.r }>
                <div class={style.wrap}>
                    <div class={style.main}>
                        <section class={style.calendar}>
                            <header>
                                <h1>June<span>2018</span></h1>
                                <nav class={style.gn}>
                                    <ul>
                                        <li class={style.current} style={this.state.type === 'month' ? { background: '#fff', color: '#000'}: null} onclick={() => this.click('month')}>Month</li>
                                        <li style={this.state.type === 'week' ? { background: '#fff', color: '#000'}: null} onclick={() => this.click('week')}>Week</li>
                                        <li style={this.state.type === 'day' ? { background: '#fff', color: '#000'}: null} onclick={() => this.click('day')}>Day</li>
                                    </ul>
                                </nav>
                            </header>
                            { this.state.type === 'month' ? Month : this.state.type === 'week' ? Week : null }
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
