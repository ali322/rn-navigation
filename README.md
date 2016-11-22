RN-Navigation [![CircleCI](https://circleci.com/gh/ali322/rn-navigation.svg?style=svg)](https://circleci.com/gh/ali322/rn-navigation) [![npm version](https://badge.fury.io/js/rn-navigation.svg)](https://badge.fury.io/js/rn-navigation)
===
[![NPM](https://nodei.co/npm/rn-navigation.png)](https://nodei.co/npm/rn-navigation/)

inspired by [react-native-router-flux](https://github.com/aksonov/react-native-router-flux),yet another router for react-native,built on new NavigationExperimental API,easy to migrate with redux and other flux-like framework

Install
===

```javascript
npm install rn-navigation --save
```

Useage
===

in your entry point (etc: index.ios.js),define your own routes by Scene component,and wrap all of routes with Router component

```javascript
class Index extends React.Component{
    render(){
        const sceneProps = {
            //scene props what you like to pass into scene components
        }
        return (
            <View style={{flex:1}}>
                <Router initialSceneKey="tabs" sceneProps={sceneProps} 
                navigationState={this.props.navigationState} dispatch={this.props.dispatch}>
                    <Scene tabbar={true} key="tabs" name="tabs">
                        <Scene key="tab_1" name="tab_1" title="topic" iconName="coffee">
                            <Scene key="topics" component={Topics}/>
                            <Scenen key="topic" component={Topic}/>
                        </Scene>
                        <Scene key="tab_2" name="tab_2" title="collect" iconName="bookmark">
                            <Scenen key="collect" component={Collect}/>
                        </Scene>
                        <Scene key="tab_3" name="tab_3" title="message" iconName="envelope">
                            <Scenen key="message" component={Message}/>
                        </Scene>
                        <Scene key="tab_4" name="tab_4" title="about" iconName="user">
                            <Scenen key="about" component={About}/>
                        </Scene>
                    </Scene>
                </Router>
            </View>
        )
    }
}
```

then create your own redux store

```javascript
import {routerReducer} from "rn-navigation"

const rootReducer = combineReducers({routerReducer})

connect(state=>({
    navigationState:state.navigationState
}))(Index)
```
in scene component you can navigate to next,or go back to prev

```javascript
this.props.navigationActions.pushScene("topic")
this.props.navigationActions.popScene()
```

just simple and easy

## Todo

- fix some unknow bugs
- add more api documents


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)