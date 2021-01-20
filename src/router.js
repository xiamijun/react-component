import React from "react"
import { Route, BrowserRouter, Switch } from "react-router-dom"
import HomeIndex from "./pages/home";
import Marquee from "./pages/Marquee";
import Carousel from "./pages/Carousel";
class AppRouter extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <div>
                    {/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
                    <Switch>
                        <Route exact path="/" component={HomeIndex} />
                        <Route exact path="/marquee" component={Marquee}/>
                        <Route exact path="/carousel" component={Carousel}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default AppRouter;