import { createStore } from 'redux'

let ACTIONS = {
    UPDATE_TEAM_MEMBER: ({s, ...state}, {id}) => ({
        s: {
            ...s,
            set: {
                ...s.set,
                project: {
                    ...s.set.project,
                    team: [...s.set.project.team, id]
                }
            }
        },
        ...state
    }),
    INIT_PROJECTS: ({s, ...state}, {obj}) => ({
        s: {
            ...s,
            data: {
                ...s.data,
                projects: obj,
            }
        },
        ...state
    }),
    UPDATE_PROJECT_FIRST_TASK: ({s, ...state}, {obj}) => ({
        s: {
            ...s,
            set: {
                ...s.set,
                project: {
                    ...s.set.project,
                    tasks: [obj.id]
                },
                tasks: [obj]
            }
        },
        ...state
    }),
    UPDATE_PROJECT_TASK: ({s, ...state}, {obj}) => ({
        s: {
            ...s,
            set: {
                ...s.set,
                project: {
                    ...s.set.project,
                    tasks: [...s.set.project.tasks, obj.id]
                },
                tasks: [...s.set.tasks, obj]
            }
        },
        ...state
    }),
    UPDATE_PROJECT_DESCRIPTION: ({s, ...state}, {value}) => ({
        s: {
            ...s,
            set: {
                ...s.set,
                project: {
                    ...s.set.project,
                    description: value
                }
            }
        },
        ...state
    }),
    UPDATE_PROJECT_TITLE: ({s, ...state}, {value}) => ({
        s: {
            ...s,
            set: {
                ...s.set,
                project: {
                    ...s.set.project,
                    title: value
                }
            }
        },
        ...state
    }),
    HIDE_MESSAGE: ({ s, ...state }, { t, m }) => ({
        s: {
            ...s,
            visibility: {
                ...s.visibility,
                message: false
            },
            data: {
                ...s.data,
                message: {
                    ...s.data.message,
                    type: 'error',
                    txt: '',
                }
            }
        },
        ...state
    }),
    SHOW_MESSAGE: ({ s, ...state }, { t, m }) => ({
        s: {
            ...s,
            visibility: {
                ...s.visibility,
                message: true
            },
            data: {
                ...s.data,
                message: {
                    ...s.data.message,
                    type: t,
                    txt: m,
                }
            }
        },
        ...state
    }),
    OPEN_SEARCH: ({ s, ...state }, { bool }) => ({
        s: {
            ...s,
            visibility: {
                ...s.visibility,
                search: !bool
            },
        },
        ...state
    }),
    OPEN_PERSONAL_MENU: ({ s, ...state }, { bool }) => ({
        s: {
            ...s,
            visibility: {
                ...s.visibility,
                personalMenu: !bool
            },
        },
        ...state
    }),
    TOGGLE_ADD_LIST: ({ s, ...state }, { bool }) => ({
        s: {
            ...s,
            visibility: {
                ...s.visibility,
                addList: !bool
            },
        },
        ...state
    }),
    OPEN_WORK_SPACE: ({ s, ...state }, { bool, name }) => ({
        s: {
            ...s,
            type: {
                ...s.type,
                workSpace: name
            },
            visibility: {
                ...s.visibility,
                addList: false,
                workSpace: !bool
            },
        },
        ...state
    }),
    CURRENT_HEADER_NAV: ({ s, ...state }, { arr }) => ({
        s: {
            ...s,
            position: {
                ...s.position,
                headerNav: arr
            },
        },
        ...state
    }),
    CHANGE_MAIN_SEC: ({ s, ...state }, { arr }) => ({
        s: {
            ...s,
            position: {
                ...s.position,
                main: arr
            },
        },
        ...state
    }),
    CHANGE_PATH: ({ s, ...state }, { string }) => ({
        s: {
            ...s,
            path: string,
        },
        ...state
    }),
    LOGIN: ({ s, ...state }, { currentUserObj, usersObj }) => ({
        ...state,
        s: {
            ...s,
            login: true,
        },
        i: currentUserObj,
        u: usersObj,
    }),
    PUSH_PROJECT_DATA: ({ s, ...state }, { bool }) => ({
        s: {
            ...s,
            set: {
                project: bool
            },
        },
        ...state
    }),
}


const INITIAL = {
    s: { // States
        login: true,
        path: "/",
        type: {
            workSpace: ''
        },
        visibility: {
            message: false,
            workSpace: false,
            search: false,
            personalMenu: false,
            addList: false,
            addButtonloading: false
        },
        position: {
            main: [],
            headerNav: [44, 25], // [barSize, positionFromLeft]
        },
        fetched: {
            users: false
        },
        data: {
            message: {
                type: 'error',
                txt: ''
            },
            projects: []
        },
        current: {
            task: ''
        },
        set: {
            project: {
                title: '',
                description: '',
                clientId: '',
                status: '',
                startAt: '',
                endAt: '',
                due: '',
                producer: '',
                permission: 777,
                team: [],
                clientTeam: [],
                tasks: []
            },
            tasks: []
        },
    },
    u: {}, // Users
    i: {} // Current user
}

export default createStore( (state, action) => (
    action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension==='function' ? devToolsExtension() : undefined)
