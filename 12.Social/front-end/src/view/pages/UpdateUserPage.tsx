import * as React from 'react';
import * as selectors from '../../store/users/selectors'
import { connect } from 'react-redux';
import { Container, CssBaseline, Typography, Button } from '@material-ui/core';
import { getUserByToken, updateUser, deleteUser } from '../../store/users/thunks';
import { Formik } from 'formik';

class UpdateUser extends React.Component<any> {
   
    componentDidMount() {
        if (!this.props.user.name) {
            this.props.getUser();
        }
    }

    update = (data: any) => {
        console.log(data)
        this.props.updateUser(this.props.user.login, data);
        this.props.history.push('/profile')
    }

    delete = () => {
        this.props.deleteUser(this.props.user.login);
        window.location.assign('/signin')
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography component="h1" variant="h5"> Edit </Typography>
                <Formik
                    initialValues={{
                        name: this.props.user.name,
                        surname: this.props.user.surname,
                        login: this.props.user.login,
                        password: ''
                    }}
                    onSubmit={(values) => { this.update(values) }}
                >
                    {({ handleSubmit, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                            <input className="input" type="text" name="name" placeholder="Name" onChange={handleChange} />
                            <input className="input" type="text" name="sunname" placeholder="Surname" onChange={handleChange} />
                            <input className="input" type="text" name="login" placeholder="Login" onChange={handleChange} />
                            <input className="input" type="password" name="password" placeholder="Password" onChange={handleChange} />
                            <input className="input" type="password" name="oldPassword" placeholder="Old Password" onChange={handleChange} required />
                            <Button type="submit" fullWidth variant="contained" color="primary"> Edit </Button>
                        </form>
                    )}
                </Formik>

                <div className='deletePage' >
                    <Button
                        fullWidth
                        variant="outlined" color="secondary" onClick={this.delete}
                    >Delete Page</Button>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: selectors.userSelector(state)
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getUser: () => dispatch(getUserByToken()),
        updateUser: (login: string, updateData: any) => dispatch(updateUser(login, updateData)),
        deleteUser: (token: string) => deleteUser(token)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser)