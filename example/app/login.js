import React,{Component} from "react"
import {View,Text,StyleSheet} from "react-native"

import {NavBar} from "nva-ui"

class Login extends Component{
    static defaultProps = {
        color:'gray'
    }
    render(){
        const {pushScene} = this.props.navigationActions
        return (
            <View style={styles.container}>
            <NavBar title="Login" leftButton='' rightButton='Next' onRightButtonClick={()=>pushScene('third')}/>
            <View style={[styles.content,{backgroundColor:this.props.color}]}>
            <View style={styles.label}>
                <Text>It's Login scene</Text>
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

export default Login