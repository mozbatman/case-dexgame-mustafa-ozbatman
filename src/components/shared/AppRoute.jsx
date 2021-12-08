import { Route } from "react-router";
import * as React from "react";

const AppRoute = ({ component: Component, layout: Layout, layoutProps: LayoutProps, ...rest }) => {

    return <Route {...rest} render={_ =>
                 (
                    <Layout {...LayoutProps} >
                        <Component />
                    </Layout>
                  )
                }
            />;
}

export default AppRoute;