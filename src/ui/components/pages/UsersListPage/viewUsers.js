import React from 'react';
import {PropTypes} from 'prop-types';
import {Card} from '@qiwi/pijma-core';
import {Paragraph} from '@qiwi/pijma-desktop';

export class ViewUsers extends React.PureComponent {

    render() {
        const usersList = this.props.usersList;
        const users = usersList.map(function (user, idx) {
            return (
                <li
                  key={idx}>
                      <Paragraph size="m">Индификатор: {user.idUser};</Paragraph>
                      <Paragraph size="m">Имя: {user.userName};</Paragraph>
                      <Paragraph size="m">Почта: {user.userEmail};</Paragraph>
                </li>
            )
        });
        return (
            <Card p={4} bb="1px solid #e6e6e6">
                <ul>
                    {users}
                </ul>
            </Card>
        )
    }
}

ViewUsers.defaultProps = {
    usersList:
        [
            {
                idUser: 0,
                userEmail: 'Loading',
                userName: 'Loading'
            }
        ]
    };

ViewUsers
    .propTypes = {
        usersList: PropTypes.array,
        user: PropTypes
                .shape(
                    {
                    idUser: PropTypes.string,
                    userEmail: PropTypes.string,
                    userName: PropTypes.string
                    }
                )
            };