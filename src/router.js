'use strict'

import React,{Component,PropTypes} from "react"
import {BackAndroid} from "react-native"
import TabNavigation from "./tabnavigation"
import Navigation from "./navigation"
import containerByComponent from "../../lib/redux-helper"
import routerReducer from "./reducer"
import * as actions from "./action"
import _ from "lodash"

class Router extends Component{
    constructor(props){
        super(props)
        this._scenes = this._scenesListByChilren(props.children)
        let injectedActions = {}
        for(let actionName in actions){
            injectedActions[actionName] = (...args)=>{
                return actions[actionName](this._scenes,...args)
            }
        }
        this._navigationActions = bindActionCreators(injectedActions,props.dispatch)
    }
    _scenesListByChilren(chilren){
        const _scenes = React.Children.map(chilren,(child)=>{
            let nextChildren = null
            if(child.props.children){
                nextChildren = this._scenesListByChilren(child.props.children)
                return {key:child.props.name,...child.props,routes:nextChildren}
            }else{
                return {key:child.props.name,...child.props}
            }
        })
        return _scenes
    }
    componentDidMount(){
        if(this.props.navigationState.routes.length === 0){
            this._navigationActions.pushScene(this.props.initialSceneKey)
        }
        let poping = false
        BackAndroid.addEventListener("hardwareBackPress",()=>{
            this._navigationActions.popScene()
            return true
        })
    }
    componentWillReceiveProps(nextProps){
        const sceneProps = this.props.sceneProps
        const nextSceneProps = nextProps.sceneProps
        if(_.isEqual(sceneProps,nextSceneProps) === false){
            this._navigationActions.reloadScene()
        }
        if(nextProps.navigationState.routes.length === 0){
            this._navigationActions.pushScene(this.props.initialSceneKey)
        }
    }
    render(){
        const {navigationState,sceneProps,initialSceneKey} = this.props
        if(!initialSceneKey){
            throw new Error("missing initialSceneKey")
        }
        if(navigationState.routes.length === 0){
            return null
        }
        return <Navigation navigationState={navigationState} navigationActions={this._navigationActions} sceneProps={sceneProps}/>
    }
}

export class Scene extends Component{
    static propTypes = {
        tabbar:PropTypes.bool,
        component:PropTypes.any,
        name:PropTypes.string
    }
    render(){
        return null
    }
}

export default Router