import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style.css';
import * as actions from '../../actions'
import reducer from '../../reducer'
import firebase from "firebase/app";
import "firebase/auth";
import ContentsHeader from '../../components/molecules/contentsHeader'
import Chart from '../../components/molecules/chart'

@connect(reducer, actions)
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navs: [
                {
                    id: '',
                    title: 'Day',
                    current: true
                },
                {
                    id: '',
                    title: 'Month',
                    current: false
                },
                {
                    id: '',
                    title: 'Year',
                    current: false
                }
            ]
        }
    }

    render() {
        return (
            <div class={style.r}>
                <ContentsHeader title="Dashboard" navs={this.state.navs} />
                <div class={style.items}>
                    <Chart key="1ssjfaafsak3fdsafdsaf" type="circle" ratio="90" />
                    <Chart key="20fdsa8dfsafdsajfds" type="circle" ratio="50" />
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>this is home page</p>
                    <p>hoge is home page</p>
                </div>
            </div>
            )
    }
}

export default Home
