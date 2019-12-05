import React from "react";
import Autocomplete from "react-autocomplete";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import * as userSelectors from '../../store/users/userSelectors'
import { getAllUsers } from "../../store/users/userThunks";
import { Formik } from "formik";
import { IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

class Search extends React.Component<any>{
    isSending = false;

    getUsers = (value: any): void => {
        if (!this.isSending) {
            this.isSending = true;
            setTimeout(() => {
                this.props.getUsers(value);
                this.isSending = false;
            }, 300);
        }
    }

    goToFoundUser = (login: any) => {
        if (login !== '')
            this.props.history.push(`/user/${login}`)
    }

    render() {
        return (
            <Formik
                initialValues={{ login: "" }}
                onSubmit={(values) => {
                    this.goToFoundUser(values.login)
                }}>
                {({ values, handleSubmit, setFieldValue }) => (
                    <form onSubmit={handleSubmit} className={'formForSearch'}>
                        {(this.props.users) ?
                            <Autocomplete
                                getItemValue={item => item.login}
                                items={this.props.users}
                                renderItem={(item) => (
                                    <div key={item.login}> {item.login} </div>
                                )}
                                value={values.login}
                                onChange={e => { setFieldValue("login", e.target.value); this.getUsers(e.target.value) }}
                                onSelect={login => setFieldValue("login", login)}
                            /> : null}
                        <IconButton type="submit" color="inherit"><SearchIcon /></IconButton>
                    </form>
                )}
            </Formik>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: userSelectors.allUsersSelector(state)
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getUsers: (character: string) => dispatch(getAllUsers(character))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))