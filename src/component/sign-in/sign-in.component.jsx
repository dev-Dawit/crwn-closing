import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {email:'', password:''}
    }

    handleSubmit = (event) => {
        event.preventDefault(); 

        this.setState({email:'', password:''})
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});   // we are using handleChange to both email & password,
                                            // when the name changes to password value is going to be password value the user going to input 
                                            // when the name changes to email value is going to be email value the user going to input 
    };
   
    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type='text' 
                    name='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    required
                    label ='Email'
                    />
                    

                    <FormInput
                    type='password' 
                    name='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label ='Password'
                    
                    />
                    <CustomButton type='submit'>Sign In </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;