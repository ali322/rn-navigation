'use strict'

import React,{Component,PropTypes} from "react"
import {NavigationExperimental,StyleSheet,Animated,Easing,View,Text,Dimensions} from "react-native"
import TabNavigation from "./tabnavigation"
import {navigationReducer} from "./reducer"
import * as actions from "./action"

const {
    Transitioner:NavigationTransitioner,
    Card:NavigationCard
} = NavigationExperimental

const {
    CardStackStyleInterpolator:NavigationCardStackStyleInterpolator
} = NavigationCard

const SCREEN_WIDTH = Dimensions.get("window").width

function leftToRight(/* NavigationSceneRendererProps */ props) {
  const {
    position,
    scene,
  } = props;

  const index = scene.index;
  const inputRange = [index - 1, index, index + 1];

  const translateX = position.interpolate({
    inputRange,
    outputRange: [0, 0, -SCREEN_WIDTH],
  });

  return {
    transform: [
      { translateX },
    ],
  };
}

class Navigation extends Component{
    static propTypes = {
        navigationState:PropTypes.object
    }
    constructor(props){
        super(props)
        this._renderCard = this._renderCard.bind(this)
    }
    _renderCard(NavigationSceneRendererProps){
        const {sceneProps,navigationActions} = this.props
        const {route} = NavigationSceneRendererProps.scene
        const {index,prevIndex} = NavigationSceneRendererProps.navigationState
        let animationStyle = NavigationCardStackStyleInterpolator.forHorizontal(NavigationSceneRendererProps)
        if(prevIndex && prevIndex > index){
            animationStyle = leftToRight(NavigationSceneRendererProps)
        }
        return <NavigationCard {...NavigationSceneRendererProps} renderScene={this._renderScene.bind(this)}  
        key={NavigationSceneRendererProps.scene.route.key} sceneProps={sceneProps} style={[animationStyle]}/>
    }
    _renderScene(props){
        const {sceneProps,navigationActions} = this.props
        const {route} = props.scene
        if(route.tabbar){
            return <TabNavigation navigationState={route} navigationActions={this.props.navigationActions}
                sceneProps={sceneProps} component={route.component}/>
        }
        if(route.component){
            const params = route.params
            const SceneComponent = route.component
            return <SceneComponent navigationActions={navigationActions} isRequired={true} {...sceneProps} {...params}/>
        }
    }
    _configureTransition(){
        const easing = Easing.inOut(Easing.ease)
        return {
            duration:500,
            easing
        }
    }
    render(){
        const {navigationState,sceneProps,navigationActions} = this.props
        const options = {}
        return (
            <NavigationTransitioner style={styles.animatedView} 
            navigationState={navigationState} configureTransition={this._configureTransition}
            render={this._renderCard} {...options}/>
        )
    }
}

const styles = StyleSheet.create({
    animatedView:{
        flex:1,
        backgroundColor:"transparent"
    }
})

export default Navigation