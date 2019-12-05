import * as React from 'react';
import Button from '@material-ui/core/Button';

interface UserInf {
    _id: string,
    login: string
}

interface MyProps {
    data: UserInf,
    onClickAdd(_id: string): void,
    onClickNo(_id: string): void,
}

export default class FriendREquest extends React.Component<MyProps> {
    
    render() {
        if (this.props.data.login==null) return (<div></div>);
        return (
            <div>
                {this.props.data.login}
                <div>
                    <Button color="primary" fullWidth variant="outlined" onClick={() => { this.props.onClickAdd(this.props.data._id) }}> Add to friends</Button>
                </div>
                <div>
                    <Button color="secondary" fullWidth variant="outlined" onClick={() => { this.props.onClickNo(this.props.data._id) }}> Refuse</Button>
                </div>
    
            </div>
        );
    }
}