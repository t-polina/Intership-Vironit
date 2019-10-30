import * as React from 'react';
import * as selectors from '../store/users/selectors'
import { connect } from 'react-redux';
import { getUserByToken } from '../store/users/thunks'
import { NavLink } from 'react-router-dom';

interface User {
  name: string,
  surname: string,
  login: string,
  role: string
}

class UserPage extends React.Component<any>{
  token: any
  user: User = { name: '', surname: '', login: '', role: '' }
  state = { user: this.user }

  async componentDidMount() {
    this.token = localStorage.getItem('token');
  
    if (this.token) {
      
      await this.props.getUser(this.token)
      console.log(this.props.user )
      await this.setState({ user: this.props.user });
    }
  }

  logout = () => {
    localStorage.clear()
  }

  render() {

    return (
      <div className="userPage" >
        <p>{this.state.user.name}</p>
        <p>{this.state.user.surname}</p>
        <span>{this.state.user.login} </span>
        <span>{this.state.user.role}</span>
        <NavLink to='login' onClick={this.logout}>Log Out</NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    user: selectors.userSelector(state)
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    getUser: (token: string) => dispatch(getUserByToken(token))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPage)