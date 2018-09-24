import { h, Component } from 'preact';
import { route } from 'preact-router';
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
        this.secondClick = this.secondClick.bind(this)
        this.current = this.current.bind(this)
        this.default = this.default.bind(this)
        this.gotoSecond = this.gotoSecond.bind(this)
        this.backFirst = this.backFirst.bind(this)
        this.initNav = this.initNav.bind(this)
        this.dispatchWorks = this.dispatchWorks.bind(this)
        this.initSecondNav = this.initSecondNav.bind(this)
        this.defaltFontSize = 18
        this.secondFontSize = 16
        this.state = {
            back: { top: 65, left: -20 },
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
                        },
                        {
                            current: false,
                            children: [],
                            href: '/management/billing/',
                            styles: {},
                            title: 'Billing',
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
                }))
                setTimeout(()=>{ this.setState({current: { left : 0, top: 71 + 46.5 * i}}) },500)
            } else if(pathname === '/') {
                let s = this.state.works
                s[0].current = true
                this.setState(states => ({
                    ...states,
                    current: { left : -100, top: 71},
                    works: s
                }))
                setTimeout(()=>{ this.setState({current: { left : 0, top: 71}}) },500)
            }
        })
    }

    dispatchWorks = (arr, i) => {
        for(let j = 0; j < arr.length; j++) {
            if(i === j) {
                arr[j].styles = {
                    fontSize: 28,
                    color: '#333',
                    lineHeight: 1.6,
                    letterSpacing: '1px',
                    left: 60,
                    top: 55
                }
            } else {
                arr[j].styles = {
                    display: 'none'
                }
            }
        }
        return arr
    }

    initNav = pathname => {
        let dir, index = 0

        this.state.works.map((e,i) => {
            if(pathname.match(e.href) !== null && e.href !== '/' && e.children.length !== 0) {
                dir = 1
                e.children.map((elm, j) => {
                    if(elm.href === pathname) {
                        index = j
                    }
                })

                this.setState(s => ({
                    ...s,
                    back: { top: 65, left: 28},
                    current: { top: 71 + 47 * (index + 1)},
                    secondNav: this.initSecondNav(e, index),
                    works: this.dispatchWorks([...s.works], i)
                }))
            } else if(e.href === pathname) {
                e.current = true
                this.setState(s => ({
                    current: { left : -100, top: 71 + 46.5 * i },
                }))
                setTimeout(()=>{ this.setState({current: { left : 0, top: 71 + 46.5 * i}}) },500)
            }
        })
    }

    initSecondNav = (elements, index) => {
        let children =  elements.children
        for(let i=0; i < children.length; i++) {
            if(i === index) {
                children[i].current = true
                children[i].styles = {
                    left: 60,
                    fontSize: 16,
                    top: 108 + 16 * i + 30 * i
                }
            } else {
                children[i].current = false
                children[i].styles = {
                    left: 60,
                    fontSize: 16,
                    top: 108 + 16 * i + 30 * i
                }
            }
        }
        return children
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
        this.initNav(pathname)
    }


    gotoSecond = (states, index) => {
        states.map((s,i) => {
            if(i === index) {
                s.styles = {
                    fontSize: 28,
                    color: '#333',
                    lineHeight: 1.6,
                    letterSpacing: '1px',
                    left: 60,
                    top: 55
                }
            } else {
                s.styles = {
                    display: 'none'
                }
            }
        })
        return states
    }

    backFirst = (states, index) => {
        states.map((s,i) => {
            if(i === 0) {
                s.current = true,
                    s.styles = {
                        fontSize: 16,
                        lineHeight: 1.6,
                        letterSpacing: '1px',
                        left: 60,
                        top: 71 + 47 * i
                    }
            } else {
                s.current = false,
                    s.styles = {
                        fontSize: 16,
                        lineHeight: 1.6,
                        letterSpacing: '1px',
                        left: 60,
                        top: 71 + 47 * i
                    }
            }
        })
        return states
    }

    default = (states, index) => {
        states.map((s,i) => {
            s.styles = { display: 'none' }
        })
        return states
    }

    current = (states,index) => {
        states.map((s,i) => {
            if(i === index) {
                s.current = true
            } else {
                s.current = false
            }
        })
        return states
    }

    click = (e, nextList, dir) => {
        const works = this.state.works
        let items, index

        for(let i=0; i < works.length; i++) {
            if(works[i].title === nextList.title) {
                index = i
            } else {
                if(works[i].children.length !== 0) {
                    works[i].children.map((s,i) => {
                    })
                }
            }
        }

        if(dir === 0) {
            if(nextList.styles.fontSize === 28) {
                this.setState(s => ({
                    ...s,
                    current: { left : 0, top: 71 },
                    back: { top: 65, left: -20 },
                    secondNav: this.default([...s.secondNav], index),
                    works: this.backFirst([...s.works], index)
                }))
                return
            }

            switch(nextList.href.match(/\//gm).length) {
                case 1: // First Dir & First Object
                    this.setState(s => ({
                        ...s,
                        current: { top: 71 },
                        works: this.current([...s.works], index)
                    }))
                    break
                case 2: // First Directory
                    if(nextList.children.length !== 0) {
                        this.setState(s => ({
                            ...s,
                            secondNav: this.initSecondNav(nextList),
                            back: { top: 65, left: 28},
                            current: { top: 71 + 47 },
                            works: this.gotoSecond([...s.works], index)
                        }))
                    } else {
                        this.setState(s => ({
                            ...s,
                            current: { top: 71 + 47 * index },
                            works: this.current([...s.works], index)
                        }))
                    }
                    break
                default:
                    break
            }
        }
    }

    secondClick = (currentList, index, depth) => {
        this.setState(s => ({
            ...s,
            secondNav: this.current([...s.secondNav], index),
            current: { top: 118 + 46 * index },
        }))
    }

    render() {
        const FirstNav = this.state.works.map((list) => { return <li class={ list.current ? style.on : ''} ><Link onclick={(e) => this.click(e, list, 0)} style={list.styles} href={list.back ? '/' : list.href}>{list.title}</Link></li> })
        const SecondNav = this.state.secondNav.map((list, i) => { return <li class={ list.current ? style.on : ''} ><Link onclick={(e) => this.secondClick(this.state.secondNav, i, 1)} style={list.styles} href={list.href}>{list.title}</Link></li> })
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
