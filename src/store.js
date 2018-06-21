import { createStore } from 'redux'

let ACTIONS = {
    TEST: ({ s, ...state }, { payload }) => ({
        s: {
            ...s
        },
        ...state
    }),
    OPEN_PERSONAL_NAV: ({ s, ...state }, { bool }) => ({
        s: {
            visibility: {
                personalNav: !bool,
            },
            ...s.visibility
        },
        ...s
    })
}

const INITIAL = {
    s: {
        visibility: {
            personalNav: false
        },
        test: true
    }
}

export default createStore( (state, action) => (
    action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension==='function' ? devToolsExtension() : undefined)
