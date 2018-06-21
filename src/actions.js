export function initUser(obj) {
    return {
        type: 'INIT_USER',
        obj
    }
}

export function openPersonalNav(bool) {
    return {
        type: 'OPEN_PERSONAL_NAV',
        bool
    }
}
