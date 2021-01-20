# react-component
react组件

## 文字跑马灯

Marquee

横排，文字滚动

| 参数       | 说明                                                | 类型     | 默认值 |
| ---------- | --------------------------------------------------- | -------- | ------ |
| duringTime | 播放间隔（毫秒）                                    | number   | 3000   |
| isLoop     | 是否循环                                            | boolean  | true   |
| callbackFn | 不循环时的播放结束回调函数，仅在isLoop为false时生效 | function | -      |
| data       | 播放的文字                                          | string   | -      |

可利用callbackFn设置轮播多段文字

## 轮播组件

Carousel

包裹住要轮播的dom

## ToolTip提示组件

ToolTip

包裹住要提示的dom

| 参数      | 说明 | 类型             | 默认值 |
| --------- | ---- | ---------------- | ------ |
| direction | 方向 | "up" \|\| "down" | up     |
| style     | 样式 | object           | -      |