import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils'

/**
 * See that main signin component has data & so it is class level component.
 * What data is needed for sigin..it's email and password
 * See that data is always stored in state.
 */

class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        };
    }

    handleSubmit = async event => {
        alert("Into handle submit of Sigin");
        event.preventDefault(); //This is to prevent default action of submitting the form

        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.state={email:'',password:''}; // after the form is submitted email & password state is set to blank again
        }catch(error){
            console.log(error);
        }

        
    }

    handleChange = event => {
        alert("Into handle change of Sigin");
        const {value, name} = event.target;
        this.setState({[name]:value});
    }
    //
    render(){
        alert("Into render of SignIN")
        //Notice that here we have created generic components for text box "FormInput" (actually it's a text box, so could have renamed as text box)
        // Similarly generic template/component is created for button ("CustomButton")
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                  <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label="email" required/>
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label="password" required/>
                    <div className='buttons'>
                        <CustomButton type="submit" > Sign In </CustomButton>
                        <CustomButton  onClick={signInWithGoogle} isGoogleSignIn> {' '} Sign in with Google {' '}</CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}


export default SignIn;