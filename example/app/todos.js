import React,{Component} from "react"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"

import {NavBar} from "yarn-ui"

class Todos extends Component{
    constructor(props){
        super(props)
        this._handleNext = this._handleNext.bind(this)
    }
    _handleNext(){
        const {navigationActions} = this.props
        navigationActions.pushScene("todo",{id:1})
    }
    render(){
        return (
            <View style={styles.container}>
            <NavBar title="Todos" leftButton={null}/>
            <View style={styles.content}>
                <View style={styles.label}>
                    <Text>Todos</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={this._handleNext}><Text style={styles.buttonText}>Next</Text></TouchableOpacity>
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
        borderRadius:5
    },
    buttonText:{
        color:"#FFF",
        fontSize:14
    }
})

export default Todos