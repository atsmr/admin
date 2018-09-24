import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style.css';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
import UNKNOWN from '../../../assets/icons/icon-anonymous.jpg'
import firebase from "firebase/app";
import "firebase/auth";

@connect(reducer, actions)
/*
 * @Params size {String} There are has three size 's', 'm', 'l'
 * @Params name {String} If it's true,  You'll get name.
 * @Params title {String} If it's true, You'll get title.
 * @Params click {bool} If it's true, You'll can click and get onClick event.
 */
class Avatar extends Component {
    constructor(props) {
        super(props)
        this.addTeamMember = this.addTeamMember.bind(this)
        this.logout = this.logout.bind(this)
        this.add = this.add.bind(this)
        this.state = {
            add: false
        }
    }

    add = () => {
        this.setState({ add: true })
    }

    logout = () => {
        firebase.auth().signOut().then(function() {
            location.reload()
            console.log('Logout')
        }).catch(function(error) {
            console.log(error)
        })
    }

    addTeamMember = (e) => {
        let key = e.target.dataset.uid

        if(this.props.s.set.project.team.length !== 0) {
            // TODO: そもそもリストに表示しないほうが吉か
            if(this.props.s.set.project.team.indexOf(key) >= 0) {
                this.props.showMessage('error','Already assigned!')
                setTimeout(()=>{
                    this.props.hideMessage()
                }, 1500)
                this.setState({ add: false})
            } else {
                this.props.updateTeamMember(e.target.dataset.uid)
                this.setState({ add: false})
            }
        } else {
            this.props.updateTeamMember(e.target.dataset.uid)
        }
    }

    render() {
        let Users = Object.keys(this.props.u).map((key, value, i) => {
            return (
                <li key={this.props.u[key].uid} class={style.addListItems} onclick={this.addTeamMember}>
                    <div data-uid={this.props.u[key].uid} class={style.addListItemsWrap}></div>
                    <div class={style.addListItemsInr}>
                        <img src={this.props.u[key].thumbnail} width="26" height="auto" alt="" />
                        <div class={style.addListItemsRight}>
                            <p>{this.props.u[key].firstName[this.props.i.setLanguage] + ' ' + this.props.u[key].lastName[this.props.i.setLanguage]}</p>
                        </div>
                    </div>
                </li>
            )
        })

        if(this.props.title && this.props.name) {
            return (
                <div class={style.r}>
                    <div class={style.w}>
                        <div class={style.img}>
                            { this.props.i.thumbnail ? <img src={this.props.i.thumbnail} width="26" height="26" alt="" /> : <img src={UNKNOWN} width="26" height="26" alt="" /> }
                        </div>
                        <div class={style.info}>
                            <p class={style.title}>{this.props.i.title}</p>
                            <p class={style.name}>{eval('this.props.i.firstName.' + this.props.i.setLanguage) + ' ' + eval('this.props.i.lastName.' + this.props.i.setLanguage)}</p>
                        </div>
                    </div>
                    <ul class={style.subMenu}>
                        <li><Link href="/">Setting</Link></li>
                        <li onclick={this.logout}>Logout</li>
                    </ul>
                </div>
            )
        } else if(this.props.type === 'add') {
            return (
                <div class={style.withAddRoot}>
                    <div class={style.withAddWrap}>
                        <div class={ this.state.add ? [style.withAddThumbnail, style.lock].join(' ') : style.withAddThumbnail} style={this.state.add ? { width: 180, borderRadius: 26 } : null} onclick={this.add} >
                            <div class={style.withAddInputWrap}>
                                <img src={UNKNOWN} width="26" height="26" alt="" />
                                {this.state.add ? <div class={style.withAddInput}><input id="input-team-add" type="text" value="" placeholder="Search Team Member" autofocus/></div> : null}
                            </div>
                            <div class={style.withAddTooltipWrap}>
                                <span class={style.withAddTooltip}>Add</span>
                            </div>
                        </div>
                        <div class={style.withAddList} style={this.state.add ? {display: 'block'} : null}>
                            <div class={style.withAddListInr}>
                                <ul>
                                    {Users}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if(this.props.name) {
            return (
                <div class={style.withNameRoot}>
                    <div class={style.withNameWrap}>
                        <div class={style.withNameThumbnail}>
                            { this.props.i.thumbnail ? <img src={this.props.src} width="26" height="26" alt="" /> : <img src={UNKNOWN} width="26" height="26" alt="" /> }
                        </div>
                        <div class={style.withNameString}>
                            <p>{this.props.name}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div class={style.r}>
                    <div class={style.w}>
                        <div class={style.img}>
                            { this.props.i.thumbnail ? <img src={this.props.i.thumbnail} width="26" height="26" alt="" /> : <img src={UNKNOWN} width="26" height="26" alt="" /> }
                        </div>
                        <div class={style.info}>
                            <p class={style.title}>{this.props.i.title}</p>
                            <p class={style.name}>{eval('this.props.i.firstName.' + this.props.i.setLanguage) + ' ' + eval('this.props.i.lastName.' + this.props.i.setLanguage)}</p>
                        </div>
                    </div>
                    <ul class={style.subMenu}>
                        <li><Link href="/">Setting</Link></li>
                        <li onclick={this.logout}>Logout</li>
                    </ul>
                </div>
            )
        }
    }
}

export default Avatar;
