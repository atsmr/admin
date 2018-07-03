import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
import SideBar from '../sidebar'
import Contents from '../contents'

@connect(reducer, actions)
class Main extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
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
            } else if(e.ctrlKey && e.keyCode == 70) {
                that.props.openSearch(that.props.s.visibility.search)
            } else if(e.keyCode == 27) {
                that.props.s.visibility.search ? that.props.openSearch(that.props.s.visibility.search) : null
            }
        }
        document.getElementById('search').addEventListener("focusout", (e) => {
            e && that.props.s.visibility.search ? that.props.openSearch(that.props.s.visibility.search) : null
        })
    }
    render() {
        return (
            <div class={style.switcher} style={ this.props.s.path === '/' ? { background: '#000'} : { background: '#fff'}}>
                <div id="main" class={style.wrap}>
                    <section style={{left: this.props.s.position.main[0] + 'px', position: 'relative'}}>
                        <div class={style.inr}>
                            <SideBar/>
                            <Contents>
                                {this.props.children}
                            </Contents>
                        </div>
                    </section>
                    <section style={{left: this.props.s.position.main[1] + 'px', position: 'relative'}}>
                        <div class={style.inr}>
                        </div>
                    </section>
                </div>
            </div>
       )
    }
}
export default Main;
