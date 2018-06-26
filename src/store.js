import { createStore } from 'redux'

let ACTIONS = {
    TEST: ({ s, ...state }, { payload }) => ({
        s: {
            ...s
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
    OPEN_WORK_SPACE: ({ s, ...state }, { bool }) => ({
        s: {
            ...s,
            visibility: {
                ...s.visibility,
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
    LOGIN: ({ s, ...state }, { bool }) => ({
        s: {
            ...s,
            login: bool,
        },
        ...state
    }),
    FETCH_USERS: ({ s, ...state }, { arr, obj }) => ({
        ...state,
        s: {
            ...s,
            fetched: {
                ...s.fetched,
                users: true
            }
        },
        i: obj,
        u: arr
    })
}

const INITIAL = {
    s: { // States
        login: false,
        path: "/",
        visibility: {
            workSpace: false,
            search: false,
            personalMenu: true // now
        },
        position: {
            main: [],
            headerNav: [44, 25], // [barSize, positionFromLeft]
        },
        fetched: {
            users: false
        }
    },
    u: [], // Users
    i: {}, // Current user
    c: {} // User config
}

export default createStore( (state, action) => (
    action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension==='function' ? devToolsExtension() : undefined)
