import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    error: false,
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  submitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    console.log(response)

    if (response.ok === true) {
      this.submitSuccess()
    } else {
      this.setState({error: true})
    }
  }

  render() {
    const {username, password, error} = this.state

    return (
      <div className="login-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-lg-login"
        />
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-sm-login"
          />
          <form className="form-container" onSubmit={this.submitForm}>
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              value={username}
              className="input"
              placeholder="Username"
              onChange={this.changeUsername}
            />
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className="input"
              placeholder="Password"
              onChange={this.changePassword}
            />
            {error && (
              <p className="error">*Username and Password didn't match</p>
            )}
            <button className="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
