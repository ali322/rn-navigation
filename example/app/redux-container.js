import {Provider,connect} from "react-redux"
import React,{Component} from "react"
import {createStore,applyMiddleware,compose,bindActionCreators} from "redux"
import thunkMiddleware from "redux-thunk"
import createLogger from "redux-logger"

let middlewares = [thunkMiddleware]

if(__DEV__ && typeof window !== "undefined"){
    middlewares.push(createLogger())
}

const configureStore = compose(applyMiddleware(...middlewares))(createStore)

export default function (rootReducer,initialState={},actions={},mapStateToProps=state=>state){
    return OriginalComponent=>{
        const store = configureStore(rootReducer,initialState)
        const mapActionToProps = dispatch=>({
            dispatch,
            actions:bindActionCreators(actions,dispatch)
        })
        const ConnectedComponent = connect(mapStateToProps,mapActionToProps)(OriginalComponent)
        return class extends Component{
            render(){
                return (
                    <Provider store={store}>
                    <ConnectedComponent {...this.props}/>
                    </Provider>
                )
            }
        }
    }
}