import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import { connect } from 'preact-redux'
import style from './style'
import * as actions from '../../../actions'
import reducer from '../../../reducer'

@connect(reducer, actions)
class Chart extends Component {
	constructor(props) {
		super(props)
    }

    componentDidMount() {
        let canvas = document.getElementsByClassName(style.circle)[0]
        let ctx = canvas.getContext('2d')

        let diam = 80
        canvas.width = diam
        canvas.height = diam

        // Init Results
        let setRatio = this.props.ratio
        let deg = 360 / 100 * setRatio
        let radian = deg * Math.PI / 180
        let text
        let text_width

        // Outer
        ctx.beginPath()
        ctx.strokeStyle = '#333'
        ctx.lineWidth = 1
        ctx.arc(canvas.width/2, canvas.height/2, (canvas.width/2) - 1, 0, Math.PI*2, false)
        ctx.stroke()

        // Inner
        ctx.beginPath()
        ctx.strokeStyle = '#fff'
        ctx.lineWidth = 1
        ctx.arc(canvas.width/2, canvas.height/2, (canvas.width/2) - 1, 0 - 90*Math.PI/180, radian - 90*Math.PI/180, false)
        ctx.stroke()

        // Text
        ctx.fillStyle = '#fff'
        ctx.font = '28px Helvetica'
        text = Math.floor(deg/360*100)
        text_width  = ctx.measureText(text).width
        ctx.fillText(text, canvas.width/2 - text_width/2, canvas.height/2 + 10)
    }

    render() {
        let type = this.props.type
        if(type === 'circle') {
            return (
                <div class={style.r} style={{display: 'inline-block'}}>
                    <canvas key={this.props.key} class={style.circle}></canvas>
                </div>
            )
        } else if (type === 'line') {
            return (
                <div key={this.props.key} class={style.r} style={{display: 'inline-block'}}>
                </div>
            )
        }
	}
}

export default Chart
