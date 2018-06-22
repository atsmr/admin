import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
import SideBar from '../sidebar'

@connect(reducer, actions)
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            w: 0
        }
    }
    componentDidMount() {
        let win = window.innerWidth
        let arr = [];
        this.setState({
            w: win
        })
        let l = document.getElementById('main').children
        for(let i=0; i < l.length; i++ ) {
            if(i === 0) {
                arr.push(0)
            } else {
                arr.push(win)
            }
        }
        this.props.changeMainSec(arr)
        let that = this;
        document.onkeydown = function(e) {
            e = e || window.event;
            if (e.ctrlKey && e.keyCode == 78) {
                that.props.changeMainSec([-1440, 0])
                that.props.currentHeaderNav([35,120])
                that.props.changePath('/docs/')
            } else if(e.ctrlKey && e.keyCode == 80) {
                that.props.changeMainSec([0, 1440])
                that.props.currentHeaderNav([45,25])
                that.props.changePath('/')
            }
        }
    }
    render() {
        return (
            <div class={style.switcher} style={ this.props.s.path === '/' ? { background: '#101010'} : { background: '#fff'}}>
                <div id="main" class={style.wrap}>
                    <section style={{left: this.props.s.position.main[0] + 'px'}}>
                        <div class={style.inr}>
                            <SideBar />
                            {this.props.children}
                        </div>
                    </section>
                    <section style={{left: this.props.s.position.main[1] + 'px'}}>
                        <div class={style.inr}>
                        </div>
                    </section>
                </div>
            </div>
       )
    }
}
export default Main;
