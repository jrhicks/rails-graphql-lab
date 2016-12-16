import React from 'react';
import Relay from 'react-relay';
import LoginForm from './LoginForm';
import styles from './LoginPage.scss';

class LoginPage extends React.Component {

  constructor(...params) {
    super(...params);
    this.state = {
      showLoader: false
    }
    this.renderForm = this.renderForm.bind(this);
  }

  renderForm() {
    return (
      <div className={styles.outerContainer}>
        <div className={styles.titleContainer}>
          <div id="title" className={styles.logo}>
            Response Portal Login 2
          </div>
        </div>
        <div className={styles.formContainer}>
          <LoginForm />
          <div className={styles.errorMessage}>
            { this.state.errorMessage }
          </div>
        </div>
      </div>
    );
  }

  renderAd() {
    const ad = false;
    let result;
    if (ad) {
      result = <div className={styles.brandSide}>&nbsp;</div>;
    } else {
      result = null;
    }
    return result;
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.formSide}>{this.renderForm()}</div>
        {this.renderAd()}
      </div>
    );
  }

}

module.exports = LoginPage;
