import React from 'react';
import SignInForm from '../../components/sign-in/SignInForm.component';
import SignUpForm from '../../components/sign-up/SignUpForm.component';
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
