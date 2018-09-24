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
        this.initProjects = this.initProjects.bind(this)
        this.db = firebase.firestore()
        this.state = {
            navs: [
                {
                    id: '',
                    title: 'Workspace',
                    current: true
                },
                {
                    id: '',
                    title: 'Status',
                    current: false
                },
                {
                    id: '',
                    title: 'Team',
                    current: false
                }
            ],
            items: [
                {
                    id: '1',
                    title: 'Amore Miyakojima'
                },
                {
                    id: '2',
                    title: 'Amore Miyakojima'
                }
            ]
        }
        this.initProjects()
    }

    initProjects = () => {
        let that = this
        this.db.collection('projects').limit(10).onSnapshot(function(querySnapshot) {
            let projects = {};
            querySnapshot.forEach(function(doc) {
                projects[doc.id] = doc.data()
            })
            that.props.initProjects(projects)
        })
    }

    getTitle = (id) => {
        let title
        let obj = this.props.s.data.projects[id];
        if(obj) {return obj.title}
    }

    componentWillMount() {
        let data = this.props.s.data.projects
        this.setState((state) => {
            state.items = data
        })
    }

    render({id}) {
        let ProjectItems
        if(Object.keys(this.props.s.data.projects).length != 0) {
            let items = this.props.s.data.projects
            ProjectItems  = Object.keys(items).map((key) => {
                let Team = items[key].team.map((person, i)=>{return <li><img src={this.props.u[person].thumbnail} width="23" height="23" alt="" /></li>})
                return (
                    <Link href={'/projects/' + key + '/'}>
                        <li class={style.itemsList}>
                            <p class={style.cat}>{items[key].type}</p>
                            <h2>{items[key].title}</h2>
                            <div class={style.avatarPosition}>
                                <ul class={style.teamAvatars}>
                                    {Team}
                                </ul>
                            </div>
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
                        <Project id={id} />
                    </div>
                </div>
            )
        }
    }
}

export default Projects
