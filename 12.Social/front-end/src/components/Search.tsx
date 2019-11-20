import React from "react";
import { Formik } from "formik";
// import Autocomplete from "react-autocomplete";
import { getAllUsers, setVisitedUser } from "../store/users/thunks";
import { connect } from "react-redux";
import * as selectors from '../store/users/selectors'
import { IconButton } from "@material-ui/core";
import { withRouter } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from "react-autocomplete";

class Search extends React.Component<any>{
    state = { users: []}
    async  componentDidMount() {
        // setInterval(async () => {
            await this.props.getUsers();
            this.setState({ users: this.props.users })
        // }, 2000);
    }
    

    getFindLogin = (value: any) => {
        if (value.value !== '') {
            this.props.setVisitedUser(value.value)
            this.props.history.push('/user')
        }
    }

    render() {
        return (
             <Formik
                initialValues={{ value: "" }}
                onSubmit={(values) => {
                    this.getFindLogin(values)
                }}>
                {({ values, handleSubmit, setFieldValue }) => (
                    <form onSubmit={handleSubmit} className={'formForSearch'}>
                        <Autocomplete
                            getItemValue={item => item.login}
                            items={this.state.users}
                            renderItem={(item) => (
                                <div>
                                    {item.login}
                                </div>
                            )}
                            value={values.value}
                            onChange={e => setFieldValue("value", e.target.value)}
                            onSelect={val => setFieldValue("value", val)}
                        />
                       <IconButton type="submit" color="inherit"><SearchIcon /></IconButton>
                    </form>
                )}
             </Formik>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: selectors.allUsersSelector(state)
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getUsers: () => dispatch(getAllUsers()),
        setVisitedUser: (login: string) =>  dispatch(setVisitedUser(login))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))