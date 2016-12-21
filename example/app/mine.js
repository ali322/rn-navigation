import React,{Component} from "react"
import {View,Text,StyleSheet} from "react-native"

import {NavBar} from "nva-ui"

class Mine extends Component{
    constructor(){
        super()
        this._handleNext = this._handleNext.bind(this)
    }
    _handleNext(){
        const {navigationActions} = this.props
        navigationActions.pushScene("setup")
    }
    render(){
        const {navigationActions} = this.props
        return (
            <View style={styles.container}>
            <NavBar title="Mine" onLeftButtonClick={navigationActions.popScene} rightButton='Next' onRightButtonClick={this._handleNext}/>
            <View style={styles.content}>
            <View style={styles.label}>
                <Text>Mine</Text>
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

export default Mine