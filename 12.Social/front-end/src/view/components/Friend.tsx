import * as React from 'react';
import Button from '@material-ui/core/Button';
interface UserInf {
    _id: string,
    login: string
}

interface MyProps {
    data: UserInf,
    onClickMessage(_id: string, login: string): void,
    onClickDelete(_id: string): void,
}

export default class Friend extends React.Component<MyProps> {

    render() {
        if (this.props.data == null) return (<div></div>);
        return (
            <div>
                {this.props.data.login}
                <div>
                    <Button color="primary" fullWidth variant="outlined" onClick={() => { this.props.onClickMessage(this.props.data._id, this.props.data.login) }}> Send message</Button>
                </div>
                <div>
                    <Button color="secondary" fullWidth variant="outlined" onClick={() => { this.props.onClickDelete(this.props.data._id) }}> Delete</Button>
                </div>
            </div>
        );
    }
}