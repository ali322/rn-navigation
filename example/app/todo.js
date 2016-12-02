import React,{Component} from "react"
import {View,Text,StyleSheet} from "react-native"

import {NavBar} from "yarn-ui"

class Todo extends Component{
    render(){
        const {navigationActions} = this.props
        return (
            <View style={styles.container}>
            <NavBar title="Todo" onLeftButtonClick={navigationActions.popScene}/>
            <View style={styles.content}>
            <View style={styles.label}>
                <Text>Todo</Text>
            </View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    content:{
        flex:1,
        backgroundColor:"#FFF",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    label:{
        // flex:1
        paddingVertical:12
    }
})

export default Todo