import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style.css';
import * as actions from '../../../actions'
import reducer from '../../../reducer'
import firebase from "firebase/app";
import "firebase/auth";
import ContentsHeader from '../../../components/molecules/contentsHeader'

@connect(reducer, actions)
class ManagementBilling extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navs: [
                {
                    id: '',
                    title: 'Day',
                    current: true
                },
                {
                    id: '',
                    title: 'Month',
                    current: false
                },
                {
                    id: '',
                    title: 'Year',
                    current: false
                }
            ],
            data: [
                {
                    id: '',
                    title: '',
                    type: 'Quotation/Invoice/Paid',
                    client: '',
                    dueQuotation: '',
                    dueInvoice: ''
                }
            ]
        }
    }
    componentWilMount() {
    }

    render() {
        return (
            <div class={style.r}>
                <ContentsHeader title="Billing" navs={this.state.navs} />
                <div class={style.items}>
                    <p>this is home page</p>
                </div>
            </div>
            )
    }
}

export default ManagementBilling
