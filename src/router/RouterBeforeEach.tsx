import * as React from "react";
import { Switch, Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';

interface RProps {
    routes: ReadonlyArray<any>;
}

function RouterBeforeEach(props: RProps & RouteComponentProps) {
    const { routes, location } = props;
    if (location.pathname === '/video') {
        return (
            <Redirect to='/' />
        )
    } else {
        return (
            <Switch>
                {
                    routes.map((item: any) => {
                        return <Route exact {...item} key={item.path} />
                    })
                }
                <Redirect from='/*' to='/404' />
            </Switch>
        )
    }
}


export default withRouter(RouterBeforeEach);