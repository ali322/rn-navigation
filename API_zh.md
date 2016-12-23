API
===

## Available imports

- Router
- Scene
- routerReducer


### Router

| 属性 | 类型 | 默认值 | 描述 |
| ---- | ---- | ---- | ---- | ---- |
| initialSceneKey | string | | 初始化场景名 |
| sceneProps | object | | 场景通用属性 |


### Scene

| 属性 | 类型 | 默认值 | 描述 |
| ---- | ---- | ---- | ---- | ---- |
| name | string | | 场景名(必须唯一) |
| component | React.Component | | 场景渲染组件(`tabbar` 属性为true时,可省略) |
| tabbar | boolean | optional | 是否为 `TabBar` 容器场景,如果未提供 `component` 属性,将使用内置的 `TabBar` 组件渲染 |
| title | string | optional | 定义场景 `TabBar` 标题 |
| iconName | string | optional | 定义场景 `TabBar` 图标名称 |
| iconTag | React.Component | optional | 定义场景 `TabBar` 上的自定义小组件 |
| hideTabBar | boolean | optional | `TabBar` 是否在场景中隐藏 | 
| beforeSelect | function | optional | 选择 `TabBar` 项目之前触发 |
| afterSelect | function | optional | 选择 `TabBar` 项目之后触发 |


## Available props

- navigationActions

| 方法 | 描述 |
| ---- | ---- |
| pushScene(sceneName,params) | 前往下一个场景 |
| popScene() | 返回至上一个场景 |
| backToScene(sceneName) | 返回特定场景(同一个导航栈中) | 
| jumpToScene(sceneName,params) | 跳转至 `TabBar` 中另外一个场景 |
| resetScene() | 返回导航栈中第一个场景,并清除其他场景 |
| reloadScene(params) | 刷新当前场景 |
| replaceScene(sceneName) | 使用指定场景替换当前场景 | 

注意: actions `pushScene`, `popScene`, `backToScene`, `jumpToScene`, `reloadScene`, `replace` 可以使用 `style` 作为最后一个参数(定义转场动画名称),
可使用的转场动画名称:

- vertical
- left2right
- top2bottom
- horizontal
- fade