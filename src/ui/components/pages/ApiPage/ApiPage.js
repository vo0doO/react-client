import React, {PureComponent} from "react";
import {styled} from '@qiwi/pijma-core';
import {AuthLayout} from "../../common/AuthLayout";
import {ButtonToBills} from "./ButtonToBills";
import {ButtonToUsers} from "./ButtonToUsers";

const HeaderContainer = styled('h2')`
    font-size: 17px;
    font-weight: 500;
    text-align: center;
    font-weight: bold;
    margin-bottom: 30px;
`;

export class ApiPage extends PureComponent {
    render() {
        return (
            <AuthLayout>
                <HeaderContainer>Выбирите Api клиент</HeaderContainer>
                <ButtonToBills/>
                <ButtonToUsers/>
            </AuthLayout>
        )
    }
}