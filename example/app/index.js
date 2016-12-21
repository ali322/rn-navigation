import React,{Component} from "react"
import {View,StyleSheet} from "react-native"
import {combineReducers} from "redux"

import container from "./redux-container"
import {Router,Scene,routerReducer} from "./src"

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
            <Router initialSceneKey="todos" sceneProps={sceneProps} {...this.props}>
                        <Scene key="todos" name="todos" component={Todos}/>
                        <Scene key="todo" name="todo" component={Todo} hideTabBar={true}/>
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