import {Component} from 'react'
import './index.css'

class PasswordManager extends Component {
  render() {
    return (
      <div className="app-container">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="passwords-create-container">
          <img
            className="password-manager-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
          <div className="password-container">
            <h1 className="add-new-password-heading">Add New Password</h1>
            <div className="input-container">
              <img
                className="input-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
