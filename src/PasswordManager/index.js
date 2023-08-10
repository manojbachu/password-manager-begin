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
          <form className="password-container">
            <h1 className="add-new-password-heading">Add New Password</h1>
            <div className="input-container">
              <img
                className="input-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />

              <input
                className="input"
                type="text"
                placeholder="Enter Website"
              />
            </div>
            <div className="input-container">
              <img
                className="input-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                alt="username"
              />

              <input
                className="input"
                type="text"
                placeholder="Enter Website"
              />
            </div>
            <div className="input-container">
              <img
                className="input-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
              />

              <input
                className="input"
                type="password"
                placeholder="Enter Website"
              />
            </div>
            <div className="add-button-container">
              <button className="add-button" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default PasswordManager
