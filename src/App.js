import { BrowserRouter as Router, Switch } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import AppRoute from "./components/shared/AppRoute";
import AppAuthorizeRoute from "./components/shared/AppAuthorizeRoute";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Loader from "./components/Loader/Loader";
import { useDispatch } from "react-redux";
import { getAccount } from "./actions/accountAction";

const AuthPage = lazy(() => import("./pages/Auth/AuthPage"));
const MainPage = lazy(() => import("./pages/Main/MainPage"));
const EditPlayerPage = lazy(() => import("./pages/EditPlayer/EditPlayerPage"));

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAccount());
    }, []);

    return (
        <Router>
            <div className="App">
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <AppAuthorizeRoute
                            exact
                            path="/edit/:id?"
                            layout={AppLayout}
                            component={EditPlayerPage}
                            layoutProps={{ header: true, footer: false }}
                        />
                        <AppRoute
                            exact
                            path="/auth"
                            layout={AppLayout}
                            component={AuthPage}
                            layoutProps={{ header: false, footer: false }}
                        />
                        <AppRoute
                            exact
                            path="/"
                            layout={AppLayout}
                            component={MainPage}
                            layoutProps={{ header: true, footer: true }}
                        />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;

