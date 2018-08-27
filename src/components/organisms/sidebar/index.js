import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import LOGO from '../../../assets/logo.svg'
import BACK from '../../../assets/icons/icon-back.svg'
import * as actions from '../../../actions'
import reducer from '../../../reducer'
//import * as firebase from 'firebase'
import Avatar from '../../molecules/avatar'
import Punch from '../../molecules/punch'

@connect(reducer, actions)
class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
        this.evalFirstUrls = this.evalFirstUrls.bind(this)
        this.evalSecondUrls = this.evalSecondUrls.bind(this)
        this.evalThirdUrls = this.evalThirdUrls.bind(this)
        this.constCurrent = this.constCurrent.bind(this)
        this.defaltFontSize = 18
        this.secondFontSize = 16
        this.state = {
            back: {
                top: 65,
                left: -20
            },
            current: { left: 0, top: 0 },
            secondNav: [],
            thirdNav: [],
            works: [
                {
                    children: [],
                    current: false,
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
                            current: true,
                            children: [],
                            href: '/marketing/',
                            styles: {},
                            title: 'Summary',
                        },
                        {
                            current: false,
                            children: [],
                            href: '/marketing/analysis/',
                            styles: {},
                            title: 'Analysis',
                        },
                        {
                            current: false,
                            children: [],
                            href: '/marketing/research/',
                            styles: {},
                            title: 'Research',
                        },
                        {
                            current: false,
                            children: [],
                            href: '/marketing/strategies/',
                            styles: {},
                            title: 'Strategies',
                        },
                        {
                            current: false,
                            children: [],
                            href: '/marketing/internet/',
                            styles: {},
                            title: 'Internet',
                        },
                        {
                            current: false,
                            children: [
                                {
                                    current: false,
                                    href: '/marketing/direct/telemarketing/',
                                    styls: {},
                                    title: 'Telemarketing'
                                },
                                {
                                    current: false,
                                    href: '/marketing/direct/mail/',
                                    styls: {},
                                    title: 'Mail'
                                }
                            ],
                            href: '/marketing/direct/',
                            styles: {},
                            title: 'Direct',
                        },
                        {
                            current: false,
                            children: [],
                            href: '/marketing/services/',
                            styles: {},
                            title: 'Services',
                        },
                        {
                            current: false,
                            children: [],
                            href: '/marketing/pricing/',
                            styles: {},
                            title: 'Pricing',
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
                    current: false,
                    href: '/management/',
                    title: 'Management',
                    styles: {},
                    children: [
                        {
                            current: true,
                            children: [],
                            href: '/management/',
                            styles: {},
                            title: 'Summary',
                        },
                        {
                            current: false,
                            children: [],
                            href: '/management/shifts/',
                            styles: {},
                            title: 'Shifts',
                        }
                    ],
                }
            ]
        }
    }

    evalFirstUrls = (pathname) => {
        this.state.works.map((list, i) => {
            if (list.title.toLowerCase() === pathname.replace(/\//g, '')) {
                let s = this.state.works
                s[i].current = true
                this.setState(states => ({
                    ...states,
                    current: { left : -100, top: 71 + 46.5 * i },
                    works: s
                })
                )
                setTimeout(()=>{ this.setState({current: { left : 0, top: 71 + 46.5 * i}}) },500)
            } else if(pathname === '/') {
                let s = this.state.works
                s[0].current = true
                this.setState(states => ({
                    ...states,
                    current: { left : -100, top: 71},
                    works: s
                })
                )
                setTimeout(()=>{ this.setState({current: { left : 0, top: 71}}) },500)
            } else {
                this.evalSecondUrls(pathname)
            }
        })
    }

    evalSecondUrls = (pathname) => {
    }

    evalThirdUrls = () => {
    }

    constCurrent = () => {
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
        const pathname = window.location.pathname
        this.evalFirstUrls(pathname)
    }

    click = (e, nextList) => {
        if (nextList.children != 0) {
            for (let i=0; i < this.state.works.length; i++) {
                if (this.state.works[i].title.toLowerCase() === e.target.innerText.toLowerCase()){
                    this.state.works[i].styles = {
                        fontSize: 28,
                        color: '#333',
                        lineHeight: 1.6,
                        left: 60,
                        top: 55
                    }
                } else{
                    this.state.works[i].styles = {
                        display: 'none'
                    }
                }
            }
            this.state.works
            for(let i=0; i < nextList.children.length; i++) {
                if (i === 0) {
                    nextList.children[i].styles = {
                        left: 60,
                        fontSize: 16,
                        top: 108
                    }
                } else {
                    nextList.children[i].styles = {
                        left: 60,
                        fontSize: 16,
                        top: 108 + 16 * i + 30 * i
                    }
                }
            }
            this.setState(states => (
                {
                    ...states,
                    secondNav: nextList.children,
                    back: { top: 65, left: 28},
                    current: { top: 71 + 47}
                }
            ))
        } else {
            for(let i=0; i < this.state.works.length; i++) {
                if (this.state.works[i].title.toLowerCase() === e.target.innerText.toLowerCase()) {
                    let w = this.state.works[i].current = true
                    this.setState(w)
                    this.setState(states => (
                        {
                            ...states,
                            secondNav: this.state.works[i].children,
                            current: { top: 72 + 46 * i}
                        }
                    ))
                } else {
                    let w = this.state.works[i].current = false
                    this.setState(w)
                }
            }
        }
    }

    render() {
        const FirstNav = this.state.works.map((list) => { return <li class={ list.current ? style.on : ''} ><Link onclick={(e) => this.click(e, list)} style={list.styles} href={list.href}>{list.title}</Link></li> })
        const SecondNav = this.state.secondNav.map((list) => { return <li class={ list.current ? style.on : ''} ><Link onclick={this.click} style={list.styles} href={list.href}>{list.title}</Link></li> })
        const ThirdNav = this.state.thirdNav.map((list) => {})
        return (
            <aside class={style.side}>
            <div class={style.inr}>
            <nav>
            <ul style={{position: 'relative'}}>
            {FirstNav}
            <ul class={style.secondNav} style={{opacity: 0}}>{SecondNav}</ul>
            <ul class={style.thirdNav} style={{opacity: 0}}>{ThirdNav}</ul>
            </ul>
            <div class={style.currentBar} style={this.state.current}></div>
            <div class={style.back} style={this.state.back}><img src={BACK} width="24" height="24" alt="Back" /></div>
            </nav>
            </div>
            <Avatar />
            <Punch />
            </aside>
        )
    }
}

export default Sidebar;

