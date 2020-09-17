import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const MainRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    {/* routes go here */}
                    {/* home route must be the last route */}
                    {/* <Route path="/" component={<your component}></Route> */}
                </Switch>
            </Router>
        </div>
    );
};

export default MainRouter;