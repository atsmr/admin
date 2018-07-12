import { h, Component, options } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import DOWN from '../../../assets/icons/icon-down.svg'
import * as actions from '../../../actions'
import reducer from '../../../reducer'

@connect(reducer, actions)
class Select extends Component {
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
        this.choose = this.choose.bind(this)
        this.state = {
            open: false,
            set: 'Choose',
            options: [
                {
                    id: 'fdshaofdsjad',
                    type: 'Solution',
                    title: 'Web Creation'
                },
                {
                    id: 'fdshaofdsjaa',
                    type: 'Design',
                    title: 'Web Renewal'
                },
                {
                    id: 'fdshaofdsjd',
                    type: 'Consulting',
                    title: 'Web Consulting'
                }
            ]
        }
    }
    click = (e) => {
        this.setState({
            open: true
        })
    }
    choose = (e) => {
        this.setState({set: e.target.innerText, open: false})
    }
    render() {
        const Options = this.state.options.map((option)=>{ return <li key={option.id} onclick={this.choose} class={style.list}>{option.title}</li> })
        return (
            <div class={style.r}>
                <p class={style.set} onclick={this.click}>{this.state.set}<img src={DOWN} width="7.5" height="4.63" alt="Down" /></p>
                <div class={style.options}>
                    { this.state.open ? <ul>{Options}</ul> : null}
                </div>
            </div>
        )
    }
}

export default Select
