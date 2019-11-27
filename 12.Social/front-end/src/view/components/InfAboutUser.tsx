import * as React from 'react';
import { Typography, Container } from '@material-ui/core';

export default class InfAboutUser extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Container maxWidth="xs">
                <Typography>{this.props.name} {this.props.surname}</Typography>
                <Typography>Login: {this.props.login}</Typography>
            </Container>
        );
    }
}