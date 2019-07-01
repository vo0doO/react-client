import './common/Layout';
import React, {Component} from 'react';
import {ConnectedRouter} from "connected-react-router";
import {ThemeProvider, themes} from '@qiwi/pijma-core';
import Root from './common/Root';
import Content from './common/Content';
import {Provider} from 'react-redux';
import {history, store} from '../model/';
import ErrorBoundary from './common/ErrorBoundary';
import Spreader from './common/Spreader';
import {Redirect, Route, Switch} from 'react-router';
import {AuthPage} from "./pages/AuthPage";
import {UsersListPage} from "./pages/UsersListPage";
import {BillsListPage} from "./pages/BillsListPage";
import {AuthLayout} from "./common/AuthLayout";
import {ApiPage} from "./pages/ApiPage";

class App extends Component {
    render() {
        return (<ThemeProvider theme={themes.orange}>
            <Root>
                <Content>
                    <Provider store={store}>
                        <ConnectedRouter history={history}>
                            <ErrorBoundary>
                                <Spreader>
                                    <Switch>
                                        <Route exact path='/auth' component={() => {
                                            return (
                                                <AuthLayout>
                                                    <AuthPage/>
                                                </AuthLayout>
                                            )
                                        }}/>
                                        <Route exact path='/api' component={() => {
                                            return (
                                                <AuthLayout>
                                                    <ApiPage/>
                                                </AuthLayout>
                                            );
                                        }}/>
                                        <Route exact path='/api/users' component={() => {
                                            return (
                                                <AuthLayout>
                                                    <UsersListPage/>
                                                </AuthLayout>
                                            );
                                        }}/>
                                        <Route exact path='/api/bills' component={() => {
                                            return (
                                                <AuthLayout>
                                                    <BillsListPage/>
                                                </AuthLayout>
                                            );
                                        }}/>
                                        <Route path='/' component={() => {
                                            return <Redirect to='/api'/>
                                        }}/>
                                    </Switch>
                                </Spreader>
                            </ErrorBoundary>
                        </ConnectedRouter>
                    </Provider>
                </Content>
            </Root>
        </ThemeProvider>)
    }
}

export default App;
