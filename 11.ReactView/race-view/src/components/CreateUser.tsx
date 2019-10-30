import * as React from 'react';
import { addNewUser } from '../store/users/thunks'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class CreateUser extends React.Component<any> {

  state = { name: '', surname: '', login: '', password: '', role: 'Admin' }

  refreshData(e: React.ChangeEvent<HTMLInputElement>, fildInObject: string) {
    if (fildInObject === 'name') this.setState({ name: e.target.value })
    else if (fildInObject === "surname") this.setState({ surname: e.target.value })
    else if (fildInObject === "login") this.setState({ login: e.target.value })
    else if (fildInObject === "password") this.setState({ password: e.target.value })
  }

  setData = () => {
    if (this.props.addUser(this.state))
      this.props.history.push('/user')
  }
  render() {
    return (
      <div className="createUser" >
        <div>name: <input onChange={(e) => this.refreshData(e, 'name')} /></div>
        <div>surname:<input onChange={(e) => this.refreshData(e, 'surname')} /></div>
        <div>login:<input onChange={(e) => this.refreshData(e, 'login')} /></div>
        <div>password: <input onChange={(e) => this.refreshData(e, 'password')} /></div>
        <NavLink to='/user' onClick={this.setData}>Add user</NavLink>
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    addUser: (user: any) => addNewUser(user)
  }
}

export default connect(null, mapDispatchToProps)(CreateUser)

