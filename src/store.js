import { createStore } from 'redux'

let ACTIONS = {
    TEST: ({ s, ...state }, { payload }) => ({
        s: {
            ...s
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
    CURRENT_HEADER_NAV: ({ s, ...state }, { arr }) => ({
        s: {
            ...s,
            position: {
                ...s.position,
                headerNav: arr
            },
        },
        ...state
    })
}

const INITIAL = {
    s: {
        page: "/",
        visibility: {
            personalMenu: false
        },
        position: {
            headerNav: [44, 25], // [barSize, positionFromLeft]
        }
    }
}

export default createStore( (state, action) => (
    action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension==='function' ? devToolsExtension() : undefined)
