import React,{Component} from "react"
import {View,StyleSheet} from "react-native"
import {combineReducers} from "redux"

import container from "./redux-container"
import {Router,Scene,routerReducer} from "./src"

import Mine from "./mine"
import Todos from "./todos"
import Todo from "./todo"
import Setup from "./setup"

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
                        <Scene name="todos" component={Todos}/>
                        <Scene name="todo" component={Todo} hideTabBar={true}/>
                    </Scene>
                    <Scene name="tab-1" title="我的" iconName="user">
                        <Scene name="mine" component={Mine}/>
                        <Scene name="setup" component={Setup}/>
                    </Scene>
                </Scene>
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