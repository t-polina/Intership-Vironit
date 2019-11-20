import * as React from 'react';
import { setToken, setIsLogin } from '../store/users/thunks'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import { Formik } from 'formik';

class Login extends React.Component<any> {

  handleClick = async (data: any) => {
    if (await this.props.setUser(data.login, data.password)) {
      this.props.setIsLogin(true);
      this.props.history.push('/profile');
    }
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{
            login: '',
            password: ''
          }}
          onSubmit={(values) => { this.handleClick(values) }}
        >
          
          {({ handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <input className="input" type="text" name="login" placeholder="Login" onChange={handleChange} />
              <input className="input" type="password" name="password" placeholder="Password" onChange={handleChange} />
              <Button type="submit" fullWidth variant="contained" color="primary"> Sign in </Button>
            </form>
          )}
        </Formik>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUser: (login: string, password: string) => setToken(login, password),
    setIsLogin: (isLogin: boolean) => dispatch(setIsLogin(isLogin))
  }
}
export default connect(null, mapDispatchToProps)(Login)



