import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

const AppAuthorizeRoute = ({ component: Component, layout: Layout, layoutProps: LayoutProps, ...rest}) => {
    const user = useSelector(state => state.account.user);

    return <Route {...rest} render={_ =>
            user ?
                 (
                    <Layout {...LayoutProps}>
                        <Component/>
                    </Layout>
                  )
                : <Redirect to="/" />
                }
            />;
}

export default AppAuthorizeRoute;