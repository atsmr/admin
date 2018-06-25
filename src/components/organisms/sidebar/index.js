import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import LOGO from '../../../assets/logo.svg'
import * as actions from '../../../actions'
import reducer from '../../../reducer'
//import * as firebase from 'firebase'
import Avatar from '../../molecules/avatar'

@connect(reducer, actions)
class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.List
        this.Sublist
        this.click = this.click.bind(this)
        this.defaltFontSize = 18 // Font size
        this.secondFontSize = 16 // Font size
        this.state = {
            current: {
                left: -42,
                top: 72
            },
            works: [
                {
                    children: [],
                    current: true,
                    title: 'Dashboard',
                    href: '/',
                    styles: {}
                },
                {
                    title: 'Projects',
                    children: [],
                    styles: {},
                    current: false,
                    href: '/projects/'
                },
                {
                    current: false,
                    href: '/marketing/',
                    styles: {},
                    title: 'Marketing',
                    children: [
                        {
                            current: false,
                            children: [],
                            href: '/',
                            styles: {},
                            title: 'Summary',
                        },
                        {
                            current: false,
                            children: [],
                            href: '/',
                            styles: {},
                            title: 'Analysis',
                        },
                        {
                            current: false,
                            children: [],
                            href: '/',
                            styles: {},
                            title: 'Research',
                        },
                        {
                            current: false,
                            children: [],
                            href: '/',
                            styles: {},
                            title: 'Strategies',
                        },
                        {
                            current: false,
                            children: [],
                            href: '/',
                            styles: {},
                            title: 'Internet',
                        },
                        {
                            current: false,
                            children: [],
                            href: '/',
                            styles: {},
                            title: 'Direct',
                        },
                        {
                            current: false,
                            children: [],
                            href: '/',
                            styles: {},
                            title: 'Services',
                        },
                        {
                            current: false,
                            children: [],
                            href: '/',
                            styles: {},
                            title: 'Pricing',
                        },
                        {
                            current: false,
                            children: [],
                            href: '/',
                            styles: {},
                            title: 'Summary',
                        }
                    ]
                },
                {
                    children: [],
                    current: false,
                    href: '/support/',
                    title: 'Support',
                    styles: {}
                },
                {
                    children: [],
                    current: false,
                    href: '/management/',
                    title: 'Management',
                    styles: {}
                }
            ]
        }
    }

    componentWillMount() {
        let styles
        let top = 60
        for(let i=0; i < this.state.works.length; i++) {
            styles = this.state.works[i].styles.left = top
            styles = this.state.works[i].styles.fontSize = this.defaltFontSize
            if (i === 0) {
                styles = this.state.works[i].styles.top = top
            } else {
                styles = this.state.works[i].styles.top = top + 16 * i + 30 * i
            }
        }


    }

    componentDidMount() {
        setTimeout(()=>{ this.setState({current: { left : 0, top: 72}}) },500)
    }

    click = (e) => {
        for(let i=0; i < this.state.works.length; i++) {
            if (this.state.works[i].title === e.target.innerText) {
                let w = this.state.works[i].current = true
                this.setState({current: { top: 72 + 46 * i}})
                this.setState(w)
            } else {
                let w = this.state.works[i].current = false
                this.setState(w)
            }
        }
    }

    render() {
        this.Lists = this.state.works.map((list) => { return <li class={ list.current ? style.on : ''} ><Link onclick={this.click} style={list.styles} href={list.href}>{list.title}</Link></li> })
        return (
            <aside class={style.side}>
                <div class={style.inr}>
                    <nav>
                        <ul style={{position: 'relative'}}>
                            { this.Lists }
                            <ul>
                                { this.Sublists }
                            </ul>
                        </ul>
                        <div class={style.currentBar} style={this.state.current}></div>
                    </nav>
                </div>
                <Avatar />
            </aside>
            )
        }
}

export default Sidebar;

