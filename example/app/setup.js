import React,{Component} from "react"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"

import {NavBar} from "nva-ui"

class Setup extends Component{
    render(){
        const {jumpToScene,popScene} = this.props.navigationActions
        return (
            <View style={styles.container}>
            <NavBar title="Setup" onLeftButtonClick={()=>popScene('top2bottom')}/>
            <View style={styles.content}>
            <View style={styles.label}>
                <Text>It's Setup scene</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>jumpToScene('first',null,'fade')}><Text style={styles.buttonText}>JumpTo First</Text></TouchableOpacity>
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

export default Setup