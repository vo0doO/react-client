import React, {PureComponent} from "react";
import {Card, Flex, Spacer} from "@qiwi/pijma-core";
import {Actions, Button, Paragraph} from "@qiwi/pijma-desktop";
import {Redirect} from "react-router";
import {styled} from '@qiwi/pijma-core';

const ButtonContainer = styled('div')`
    width: 150px;
    margin: 30px auto 13px;
`;

export class ButtonToUsers extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            click: false
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick = () => {this.setState({click: ! this.state.click}); console.log(this.state.click)};

    render() {
        const router = this.props;
        if (this.state.click !== true) {
            return (
                <ButtonContainer>
                <Flex justify="center">
                    <Spacer>
                        <Card p={7}>
                            <Paragraph>Users API</Paragraph>
                            <Actions size="minor">
                                <Button type='submit'
                                        kind='brand'
                                        size='minor'
                                        text='Опробовать'
                                        onClick={this.handleButtonClick}
                                />
                            </Actions>
                        </Card>
                    </Spacer>
                </Flex>
                </ButtonContainer>
            )
        } else return <Redirect to={'/api/users'}/>;
    }
}