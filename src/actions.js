export function openWorkSpace(bool) {
    return {
        type: 'OPEN_WORK_SPACE',
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
