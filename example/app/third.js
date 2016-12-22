import React,{Component} from "react"
import {View,Text,StyleSheet} from "react-native"

import {NavBar} from "nva-ui"

class Third extends Component{
    render(){
        const {navigationActions} = this.props
        return (
            <View style={styles.container}>
            <NavBar title="Third" onLeftButtonClick={()=>navigationActions.backToScene('first')} leftButton="First"/>
            <View style={styles.content}>
            <View style={styles.label}>
                <Text>It's Third scene</Text>
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

export default Third