export function openSearch(bool) {
    return {
        type: 'OPEN_SEARCH',
        bool
    }
}
export function openWorkSpace(bool, name) {
    return {
        type: 'OPEN_WORK_SPACE',
        name,
        bool
    }
}
export function openAddList(bool) {
    return {
        type: 'OPEN_ADD_LIST',
        bool
    }
}
export function openPersonalMenu(bool) {
    return {
        type: 'OPEN_PERSONAL_MENU',
        bool
    }
}
export function currentHeaderNav(arr) {
    return {
        type: 'CURRENT_HEADER_NAV',
        arr
    }
}
export function changePath(string) {
    return {
        type: 'CHANGE_PATH',
        string
    }
}
export function changeMainSec(arr) {
    return {
        type: 'CHANGE_MAIN_SEC',
        arr
    }
}
export function login(bool) {
    return {
        type: 'LOGIN',
        bool
    }
}
export function pushProjectData(bool) {
    return {
        type: 'PUSH_PROJECT_DATA',
        bool
    }
}
// Firestore
export function fetchUsers(arr, obj) {
    return {
        type: 'FETCH_USERS',
        arr,
        obj
    }
}
