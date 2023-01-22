import { useState } from 'react';

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailPassword,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button.component';
import FormInput from '../form-input/FormInput.component';
import './signIn.styles.scss';

const initialFormState = {
  email: '',
  password: '',
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(initialFormState);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(initialFormState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for your email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };
  const googleSignIn = async () => {
    await signInWithGooglePopup();
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          value={email}
          name="email"
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          value={password}
          name="password"
        />
        <div className="buttons-container">
          <Button type="submit">sign in</Button>
          <Button buttonType="google" onClick={googleSignIn} type="button">
            google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
