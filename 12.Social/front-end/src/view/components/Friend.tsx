import * as React from 'react';
import Button from '@material-ui/core/Button';

export default class Friend extends React.Component<any> {

    constructor(props: any) {
        super(props);
    }

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