import React,{Component} from "react"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"

import {NavBar} from "nva-ui"

class Second extends Component{
    render(){
        const {popScene,replaceScene,pushScene,reloadScene} = this.props.navigationActions
        return (
            <View style={styles.container}>
            <NavBar title="Second" onLeftButtonClick={popScene} 
            rightButton='Next' onRightButtonClick={()=>pushScene('third')}/>
            <View style={[styles.content,{backgroundColor:this.props.color}]}>
            <View style={styles.label}>
                <Text>It's Second scene</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>replaceScene('login',{color:'whitesmoke'})}><Text style={styles.buttonText}>Replace With Login</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>reloadScene({color:'lightblue'})}><Text style={styles.buttonText}>Reload</Text></TouchableOpacity>
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
    },
    button:{
        backgroundColor:"dodgerblue",
        paddingVertical:8,
        paddingHorizontal:12,
        borderRadius:5,
        marginVertical:8
    },
    buttonText:{
        color:"#FFF",
        fontSize:14
    }
})

export default Second