import React from "react";

class UserBar extends React.Component {
  render() {
    return (
      <div id="userbar" className="b-top-profile js-userbar">
        {}
        {}
        <div
          className="auth-bar auth-bar--top"
          data-bind="visible: !$root.currentUser.id()"
          style={{}}
        >
          <div
            className="auth-bar__item auth-bar__item--text"
            onclick="MODELS.AuthController.showModalAuth()"
          >
            Вход
          </div>
          <div
            className="auth-bar__item auth-bar__item--facebook auth__icon auth__icon--facebook"
            data-bind="click: function () {$root.socialNetworksAuth.auth('facebook')}"
            title="Facebook"
          />
          <div
            className="auth-bar__item auth-bar__item--vk auth__icon auth__icon--vk"
            data-bind="click: function () {$root.socialNetworksAuth.auth('vkontakte')}"
            title="\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435"
          />
          <div
            className="auth-bar__item auth-bar__item--twitter auth__icon auth__icon--twitter"
            data-bind="click: function () {$root.socialNetworksAuth.auth('twitter')}"
            title="Twitter"
          />
        </div>
      </div>
    );
  }
}

export default UserBar;
