import * as constants from "./constant"

export function pushScene(key, params = {}, style = 'horizontal') {
    return {
        type: constants.PUSH_SCENE,
        key,
        params,
        style
    }
}

export function popScene(style = 'left2right') {
    //fix bug: empty args may turn `style` to an Proxy object
    style = typeof style === 'object' ? 'left2right' : style
    return {
        type: constants.POP_SCENE,
        style
    }
}

export function backToScene(key, style = 'left2right') {
    return {
        type: constants.BACKTO_SCENE,
        key,
        style
    }
}

export function jumpToScene(key, params = {}, style = 'fade') {
    return {
        type: constants.JUMPTO_SCENE,
        key,
        params,
        style
    }
}

export function focusScene(key) {
    return {
        type: constants.FOCUS_SCENE,
        key
    }
}

export function replaceScene(key, params = {}, style = 'fade') {
    return {
        type: constants.REPLACE_SCENE,
        key,
        params,
        style
    }
}

export function resetScene() {
    return {
        type: constants.RESET_SCENE,
    }
}

export function reloadScene(params = {}, style = 'fade') {
    return {
        type: constants.RELOAD_SCENE,
        params,
        style
    }
}