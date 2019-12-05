import * as React from 'react';
import { Typography, Container } from '@material-ui/core';

interface MyProps {
   name: string,
   surname: string,
   login: string,
}

export default class InfAboutUser extends React.Component<MyProps> {

    render() {
        return (
            <Container maxWidth="xs">
                <Typography>{this.props.name} {this.props.surname}</Typography>
                <Typography>Login: {this.props.login}</Typography>
            </Container>
        );
    }
}