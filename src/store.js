import { createStore } from 'redux'

let ACTIONS = {
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
    OPEN_ADD_LIST: ({ s, ...state }, { bool }) => ({
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
    LOGIN: ({ s, ...state }, { obj, arr }) => ({
        ...state,
        s: {
            ...s,
            login: true,
        },
        i: obj,
        u: arr,
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
        login: false,
        path: "/",
        type: {
            workSpace: ''
        },
        visibility: {
            message: false,
            workSpace: false,
            search: false,
            personalMenu: false,
            addList: false
        },
        position: {
            main: [],
            headerNav: [44, 25], // [barSize, positionFromLeft]
        },
        data: {
            message: {
                type: 'error',
                txt: 'fdsafdsa'
            }
        },
        fetched: {
            users: false
        },
        data: {
            projects: [
                {
                    id: 'fdsafd12j3jfds3',
                    title: 'Amore Miyakojima',
                    done: false,
                    codeName: 'Amore',
                    type: '6kObdS3foO2uAODNwAE9',
                    content: '',
                    author: '1CsJRlXltfc7NgLk6sHGQsy522F3',
                    team: ['1CsJRlXltfc7NgLk6sHGQsy522F3'],
                    dueDate: '',
                    recommend: '',
                    budgetMoney: 0,
                    budgetTime: '',
                    tasks: [],
                    comments: [''],
                    modifiedAt: '',
                    createdAt: ''
                }
            ]
        },
        current: {
            task: 'fdsafd12j3jfds3'
        },
        set: {
            project:false
        }
    },
    u: [], // Users
    i: {}, // Current user
    c: {} // User config
}

export default createStore( (state, action) => (
    action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension==='function' ? devToolsExtension() : undefined)
