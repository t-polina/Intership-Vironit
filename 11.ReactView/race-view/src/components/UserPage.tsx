import * as React from 'react';
import * as selectors from '../store/users/selectors'
import { connect } from 'react-redux';
import { getUserByToken } from '../store/users/thunks'
import Button from '@material-ui/core/Button';

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
    console.log('componentDidMount');
    this.token = localStorage.getItem('token');
    if (this.token) {
      await this.props.getUser(this.token);
    }
  }

   logout = () => {
    localStorage.clear()
    this.props.history.push('/login')
  }

  render() {

    return (
      <div className="userPage" >
        <p>{this.props.user.name}</p>
        <p>{this.props.user.surname}</p>
        <span>{this.props.user.login} </span>
        <span>{this.props.user.role}</span>

        <Button variant="outlined" onClick={this.logout}>Log Out</Button>
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