import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style';
import * as actions from '../../../actions'
import reducer from '../../../reducer'

@connect(reducer, actions)
class CircleChart extends Component {
	constructor(props) {
		super(props)
    }
    componentDidMount() {
        //let c = document.getElementById('r')
        //let ctx = canvas.getContext('2d')

        //let w = canvas.width
        //let h = canvas.height

        //ctx.biginPath()
        //ctx.strokeStyle = '#fff'
        //ctx.arc(x,y,radius,start_angle, end_angle, clockwise)
        //ctx.stroke()
    }
    render() {
		return (
            <div class={style.r}>
                <canvas id="r"></canvas>
            </div>
		)
	}
}

export default CircleChart;
