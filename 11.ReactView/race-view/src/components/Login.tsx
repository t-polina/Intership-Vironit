import * as React from 'react';
import { setToken } from '../store/users/thunks'
import { connect } from 'react-redux';

class Login extends React.Component<any> {
  state = { login: '', password: '' };
  token = '';

  handleClick = async() => {
    if (await this.props.setUser(this.state.login, this.state.password)) {
      this.props.history.push('/user')
    }
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>, fildInObject?: string) {
    (fildInObject === "login") ? this.setState({ login: e.target.value }) : this.setState({ password: e.target.value })
  }

  render() {
    return (
      <div className="login" >
        <div>login:<input onChange={(e) => this.handleChange(e, 'login')} /></div>
        <div>password: <input onChange={(e) => this.handleChange(e)} /></div>
        <button onClick={this.handleClick}>Log in</button>
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    setUser: (login: string, password: string) => setToken(login, password)
  }
}
export default connect(null, mapDispatchToProps)(Login)