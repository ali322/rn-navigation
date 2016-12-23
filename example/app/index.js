import React,{Component} from "react"
import {View,StyleSheet} from "react-native"
import {combineReducers} from "redux"

import container from "./redux-container"
import {Router,Scene,routerReducer} from "rn-navigation"

import First from "./first"
import Second from "./second"
import Third from "./third"
import Mine from "./mine"
import Setup from "./setup"
import Login from "./login"

const rootReducer = combineReducers({
    navigationState:routerReducer
})

@container(rootReducer)
class App extends Component{
    render(){
        const sceneProps = {}
        return (
            <View style={styles.container}>
            <Router initialSceneKey="tabs" sceneProps={sceneProps} {...this.props}>
                <Scene tabbar={true} name="tabs">
                    <Scene name="tab-0" title="主页" iconName="coffee">
                        <Scene name="first" component={First}/>
                        <Scene name="second" component={Second} hideTabBar={false}/>
                        <Scene name="third" component={Third} hideTabBar={true}/>
                    </Scene>
                    <Scene name="tab-1" title="我的" iconName="user">
                        <Scene name="mine" component={Mine}/>
                        <Scene name="setup" component={Setup} hideTabBar={true}/>
                    </Scene>
                </Scene>
                <Scene name='login' component={Login}/>
            </Router>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default App