import React from 'react';
import {Loader} from "../../common/Loader";
import {AuthLayout}from "../../common/AuthLayout/";
import {ViewUsers} from "./viewUsers";


export class UsersListPage extends React.Component {
    constructor(props) {
        super(props);
        this.loadUsers = this.loadUsers.bind(this);
    }

    componentDidMount() {
        return this.loadUsers()
    }

    loadUsers() {
        return this.props.users()
    }

    render() {

        const { isInitial, isLoading,  isLoadIn, usersList } = this.props;

        return (
            <AuthLayout>
                { isInitial && <Loader /> }
                { isLoading && <Loader /> }
                { isLoadIn && <ViewUsers usersList={usersList}></ViewUsers> }
            </AuthLayout>
        );
    }
}