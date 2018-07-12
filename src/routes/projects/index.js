import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style.css';
import * as actions from '../../actions'
import reducer from '../../reducer'
import firebase from "firebase/app";
import "firebase/auth";
import ContentsHeader from '../../components/molecules/contentsHeader'

@connect(reducer, actions)
class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navs: [
                {
                    id: '',
                    title: 'Active',
                    current: true
                },
                {
                    id: '',
                    title: 'Pending',
                    current: false
                },
                {
                    id: '',
                    title: 'Archives',
                    current: false
                }
            ],
            items: [
                {
                    id: '',
                    title: 'Amore MIYAKOJIMA',
                    type: 'Web Creation',
                },
                {
                    id: '',
                    title: 'Macbee Planet Robee Crawler',
                    type: 'Web Creation',
                },
                {
                    id: '',
                    title: 'Amore MIYAKOJIMA',
                    type: 'Web Creation',
                },
                {
                    id: '',
                    title: 'Macbee Planet Robee Crawler',
                    type: 'Web Creation',
                },
                {
                    id: '',
                    title: 'Amore MIYAKOJIMA',
                    type: 'Web Creation',
                },
                {
                    id: '',
                    title: 'Macbee Planet Robee Crawler',
                    type: 'Web Creation',
                },
                {
                    id: '',
                    title: 'Amore MIYAKOJIMA',
                    type: 'Web Creation',
                },
                {
                    id: '',
                    title: 'Macbee Planet Robee Crawler',
                    type: 'Web Creation',
                },
                {
                    id: '',
                    title: 'Amore MIYAKOJIMA',
                    type: 'Web Creation',
                },
                {
                    id: '',
                    title: 'Macbee Planet Robee Crawler',
                    type: 'Web Creation',
                },
                {
                    id: '',
                    title: 'Macbee Planet Robee Crawler',
                    type: 'Web Creation',
                },
                {
                    id: '',
                    title: 'Macbee Planet Robee Crawler',
                    type: 'Web Creation',
                },
                {
                    id: '',
                    title: 'Macbee Planet Robee Crawler',
                    type: 'Web Creation',
                },
                {
                    id: '',
                    title: 'Macbee Planet Robee Crawler',
                    type: 'Web Creation',
                }
            ]
        }
    }

    render() {
        let items = this.state.items;
        let ProjectItems = items.map((item) => {
            return (
                <li>
                    <p class={style.cat}>{item.type}</p>
                    <h2>{item.title}</h2>
                </li>
                )
        })
        return (
            <div class={style.r}>
                <ContentsHeader title="Projects" navs={this.state.navs} />
                <div class={style.items}>
                    <ul>
                        { ProjectItems }
                    </ul>
                </div>
            </div>
            )
    }
}

export default Projects
