import React from 'react'

class UserBar extends React.Component {
  render() {
    return (
      <div id="userbar" className="b-top-profile js-userbar">
        <div className="auth-bar auth-bar--top">
          <div className="auth-bar__item auth-bar__item--text">Вход</div>
        </div>
      </div>
    )
  }
}

export default UserBar
