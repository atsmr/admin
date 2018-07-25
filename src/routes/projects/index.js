import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { connect } from 'preact-redux'
import style from './style.css';
import * as actions from '../../actions'
import reducer from '../../reducer'
import firebase from "firebase/app";
import "firebase/auth";
import ContentsHeader from '../../components/molecules/contentsHeader'
import Project from '../../components/organisms/project'

@connect(reducer, actions)
class Projects extends Component {
    constructor(props) {
        super(props)
        this.getTitle = this.getTitle.bind(this)
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
            items: []
        }
    }
    componentWillMount() {
        let data = [
            {
                id: '1',
                title: 'Amore MIYAKOJIMA',
                type: 'Web Creation',
            },
            {
                id: '2',
                title: 'Macbee Planet Robee Crawler',
                type: 'Web Creation',
            },
            {
                id: '3',
                title: 'Amore MIYAKOJIMA',
                type: 'Web Creation',
            },
            {
                id: '4',
                title: 'Macbee Planet Robee Crawler',
                type: 'Web Creation',
            },
            {
                id: '5',
                title: 'Amore MIYAKOJIMA',
                type: 'Web Creation',
            },
            {
                id: '6',
                title: 'Macbee Planet Robee Crawler',
                type: 'Web Creation',
            },
            {
                id: '7',
                title: 'Amore MIYAKOJIMA',
                type: 'Web Creation',
            },
            {
                id: '8',
                title: 'Macbee Planet Robee Crawler',
                type: 'Web Creation',
            },
            {
                id: '9',
                title: 'Amore MIYAKOJIMA',
                type: 'Web Creation',
            },
            {
                id: '10',
                title: 'Macbee Planet Robee Crawler',
                type: 'Web Creation',
            },
            {
                id: '11',
                title: 'Macbee Planet Robee Crawler',
                type: 'Web Creation',
            },
            {
                id: '12',
                title: 'Macbee Planet Robee Crawler',
                type: 'Web Creation',
            },
            {
                id: '13',
                title: 'Macbee Planet Robee Crawler',
                type: 'Web Creation',
            },
            {
                id: '14',
                title: 'Macbee Planet Robee Crawler',
                type: 'Web Creation',
            }
        ]
        this.setState((state) => {
            state.items = data
        })
    }

    getTitle = (id) => {
        let title;
        this.state.items.filter((item) => {
            item.id === id ? title = item.title : null
        })
        return title
    }

    render({id}) {
        let ProjectItems
        if(this.state.items.length != 0) {
            let items = this.state.items
            ProjectItems  = items.map((item) => {
                return (
                    <Link href={'/projects/' + item.id + '/'}>
                        <li>
                            <p class={style.cat}>{item.type}</p>
                            <h2>{id}{item.title}</h2>
                        </li>
                    </Link>
                    )
            })
    }

    if(id === "0") {
        return (
            <div class={style.r}>
                <ContentsHeader title={this.getTitle(id) ? this.getTitle(id) : 'Projects'} navs={this.state.navs}/>
                <div class={style.items}>
                    <ul>
                        {ProjectItems}
                    </ul>
                </div>
            </div>
            )
    } else {
        return (
            <div class={style.r}>
                <ContentsHeader title={this.getTitle(id)} navs={this.state.navs}/>
                <div class={style.items}>
                    <Project projectId={id} />
                </div>
            </div>
            )
        }
    }
}

export default Projects
