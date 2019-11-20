import * as React from 'react';
import { addNewUser } from '../store/users/thunks'
import { connect } from 'react-redux';
import { Checkbox, Button, Container, CssBaseline, Typography } from '@material-ui/core';
import { Formik } from 'formik';

class CreateUser extends React.Component<any> {
  isRemember = false;

  setData = async (data: any) => {
    console.log(data);
    if (await this.props.addUser(data, this.isRemember))
      this.props.history.push('/profile');
  }

  handleChange = () => (event: any) => {
    this.isRemember = !this.isRemember;
  };


  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h1" variant="h5"> Sign up </Typography>
        <Formik
          initialValues={{
            name: '',
            surname: '',
            login: '',
            password: '',
          
          }}
          onSubmit={(values) => { this.setData(values) }}
        >
          {({ handleSubmit, handleChange}) => (
            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="First name" type="text" className="input" required onChange={handleChange} />
              <input name="surname" className="input" type="text" placeholder="Last name" onChange={handleChange} required />
              <input name="login" className="input" type="text" placeholder="Login" onChange={handleChange} required />
              <input name="password" className="input" type="password" placeholder="Password" onChange={handleChange} required />
  
              <Checkbox onChange={this.handleChange()} color="primary" /> <label>Remember me</label>
              <Button type="submit" fullWidth variant="contained" color="primary"> Sign up </Button>
            </form>
          )}
        </Formik>
      </Container>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    addUser: (user: any, isRemember: boolean) => addNewUser(user, isRemember)
  }
}

export default connect(null, mapDispatchToProps)(CreateUser)
