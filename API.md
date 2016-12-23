API
===

## Available imports

- Router
- Scene
- routerReducer


### Router

| Property | Type | Default | Description |
| ---- | ---- | ---- | ---- | ---- |
| initialSceneKey | string | | initial scene name |
| sceneProps | object | | props passed to every scene |


### Scene

| Property | Type | Default | Description |
| ---- | ---- | ---- | ---- | ---- |
| name | string | | must be unique for each scene |
| component | React.Component | | The Component to be displayed,not required when prop `tabbar` is true |
| tabbar | boolean | optional | Defines 'TabBar' scene container, so child scenes will be displayed as 'tabs'. If no component is defined, built-in TabBar is used as renderer |
| title | string | optional | Define `TabBar` title for scene |
| iconName | string | optional | Define `TabBar` iconName for scene (fontawesome iconfont name) |
| iconTag | React.Component | optional | Define `TabBar` custom component for scene |
| hideTabBar | boolean | optional | is `TabBar` hide or not | 
| beforeSelect | function | optional | get called before select `TabBar` item |
| afterSelect | function | optional | get called after select `TabBar` item |


## Available props

- navigationActions

| Method | Description |
| ---- | ---- |
| pushScene(sceneName,params) | navigate to next scene |
| popScene() | back to prev scene which in the navigation stack |
| backToScene(sceneName) | back to specified scene | 
| jumpToScene(sceneName,params) | jump to `TabBar`'s scene |
| resetScene() | back to the first scene in the scene stack |
| reloadScene(params) | refresh current scene |
| replaceScene(sceneName) | replace current scene with specified scene | 

Note: actions `pushScene`, `popScene`, `backToScene`, `jumpToScene`, `reloadScene`, `replace` can take `style` as last argument which define transition animation style,
below animation style available:

- vertical
- left2right
- top2bottom
- horizontal
- fade

