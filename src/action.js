import * as constants from "./constant"

export function pushScene(scenes,key,params={}){
    return {
        type:constants.PUSH_SCENE,
        scenes,
        key,
        params
    }
}

export function popScene(scenes){
    return {
        type:constants.POP_SCENE,
        scenes
    }
}

export function backToScene(scenes,key){
    return {
        type:constants.BACKTO_SCENE,
        scenes,
        key
    }
}

export function jumpToScene(scenes,key,params={}){
    return {
        type:constants.JUMPTO_SCENE,
        key,
        params
    }
}

export function focusScene(scenes,key){
    return {
        type:constants.FOCUS_SCENE,
        key
    }
}

export function replaceScene(scenes,key,params){
    return {
        type:constants.REPLACE_SCENE,
        scenes,
        key,
        params
    }
}

export function resetScene(scenes){
    return {
        type:constants.RESET_SCENE
    }
}

export function reloadScene(scenes,params={}) {
    return {
        type:constants.RELOAD_SCENE,
        params
    }
}
