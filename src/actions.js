export function updateTeamMember(id) {
    return {
        type: 'UPDATE_TEAM_MEMBER',
        id
    }
}
export function initProjects(obj) {
    return {
        type: 'INIT_PROJECTS',
        obj
    }
}
export function updateProjectFirstTask(obj) {
    return {
        type: 'UPDATE_PROJECT_FIRST_TASK',
        obj
    }
}
export function updateProjectTask(obj) {
    return {
        type: 'UPDATE_PROJECT_TASK',
        obj
    }
}
export function updateProjectDescription(value) {
    return {
        type: 'UPDATE_PROJECT_DESCRIPTION',
        value
    }
}
export function updateProjectTitle(value) {
    return {
        type: 'UPDATE_PROJECT_TITLE',
        value
    }
}
export function hideMessage(bool) {
    return {
        type: 'HIDE_MESSAGE',
        bool
    }
}
export function showMessage(t, m) {
    return {
        type: 'SHOW_MESSAGE',
        t,
        m
    }
}
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
export function toggleAddList(bool) {
    return {
        type: 'TOGGLE_ADD_LIST',
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
export function login(currentUserObj, usersObj) {
    return {
        type: 'LOGIN',
        currentUserObj,
        usersObj
    }
}
export function pushProjectData(bool) {
    return {
        type: 'PUSH_PROJECT_DATA',
        bool
    }
}
