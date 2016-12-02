import React,{Component} from "react"
import {View,StyleSheet} from "react-native"
import {combineReducers} from "redux"

import container from "./redux-container"
import {Router,Scene,routerReducer} from "rn-navigation"

import Mine from "./mine"
import Todos from "./todos"
import Todo from "./todo"

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
                <Scene tabbar={true} key="tabs" name="tabs">
                    <Scene key="tab-0" name="tab-0" title="主页" iconName="coffee">
                        <Scene key="todos" name="todos" component={Todos}/>
                        <Scene key="todo" name="todo" component={Todo}/>
                    </Scene>
                    <Scene key="tab-1" name="tab-1" title="我的" iconName="user">
                        <Scene key="mine" name="mine" component={Mine}/>
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