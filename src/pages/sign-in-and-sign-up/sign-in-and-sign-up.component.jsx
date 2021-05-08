import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';


/**
 * 
 * See that this page component is functional & abstract in nature 
 */

const SignInAndSignUpPage = ()=>(
    <div className='sign-in-and-sign-up'>
        <SignIn/>
    </div>
)

export default SignInAndSignUpPage;