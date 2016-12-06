API
===

## Available imports

- Router
- Scene
- routerReducer


### Router

| Property | Type | Default | Description |
| ---- | ---- | ---- | ---- | ---- |
| initialSceneKey | string | | initial scene key |
| sceneProps | object | | props passed to every scene |


### Scene

| Property | Type | Default | Description |
| ---- | ---- | ---- | ---- | ---- |
| key | string | | must be unique for each scene |
| component | React.Component | | The Component to be displayed,not required when prop `tabbar` is true |
| tabbar | boolean | optional | Defines 'TabBar' scene container, so child scenes will be displayed as 'tabs'. If no component is defined, built-in TabBar is used as renderer |
| title | string | optional | Define `TabBar` title for scene |
| iconName | string | optional | Define `TabBar` iconName for scene |
| iconTag | React.Component | optional | Define `TabBar` custom component for scene |
| beforeSelect | function | optional | get called before select `TabBar` item |
| afterSelect | function | optional | get called after select `TabBar` item |


## Available props

- navigationActions

| Method | Description |
| ---- | ---- |
| pushScene(sceneName,params) | navigate to next scene |
| popScene() | back to prev scene |
| jumpToScene(sceneName,params) | jump to scene |
| resetScene() | back to the first scene in the scene stack |
| reloadScene() | refresh current scene |

