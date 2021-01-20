# react-component
react组件

## 文字跑马灯

横排，文字滚动

| 参数       | 说明                                                | 类型     | 默认值 |
| ---------- | --------------------------------------------------- | -------- | ------ |
| duringTime | 播放间隔（毫秒）                                    | number   | 3000   |
| isLoop     | 是否循环                                            | boolean  | true   |
| callbackFn | 不循环时的播放结束回调函数，仅在isLoop为false时生效 | function | -      |
| data       | 播放的文字                                          | string   | -      |

可利用callbackFn设置轮播多段文字