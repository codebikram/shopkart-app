import { useState } from 'react';

import {
  createAuthUserWithEmailPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button.component';
import FormInput from '../form-input/FormInput.component';
import './signUpForm.styles.scss';

const initialFormState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(initialFormState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formFields.password !== formFields.confirmPassword) {
      alert('Password do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailPassword(
        formFields.email,
        formFields.password
      );
      await createUserDocumentFromAuth(user, {
        displayName: formFields.displayName,
      });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('can not sign up, email already in use');
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          value={formFields.displayName}
          name="displayName"
        />
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          value={formFields.email}
          name="email"
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          value={formFields.password}
          name="password"
        />
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          value={formFields.confirmPassword}
          name="confirmPassword"
        />
        <Button type="submit">sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
