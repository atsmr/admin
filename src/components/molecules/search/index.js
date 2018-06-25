import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import * as actions from '../../../actions'
import reducer from '../../../reducer'

@connect(reducer, actions)
class Search extends Component {
	constructor(props) {
		super(props)
        this.state = {
            userFetched: false
        }
    }
    componentWillReceiveProps(p) {
        let input = document.getElementById('search')
        input.focus()
    }
    render() {
		return (
            <section class={style.r} style={ this.props.s.visibility.search ? {top: 0} : null }>
                <input id="search" type="text" value="" placehodler="" />
            </section>
		)
	}
}

export default Search;
