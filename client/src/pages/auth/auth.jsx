import React from 'react';
import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';

const AuthPage = () => (
  <div className='auth-page'>
    <SignIn />
    <SignUp />
  </div>
)

export default AuthPage;