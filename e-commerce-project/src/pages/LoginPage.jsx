import React from 'react';
import LoginForm from './LoginForm';

const loginData = {
    login: {
        header: {
            subtitle: "Welcome back",
            title: "Login to your account",
            description: "Please enter your credentials to access your account."
        },
        email: {
            label: "Email Address",
            placeholder: "Enter your email",
            errorMsg: {
                required: "Email is required"
            },
            footnote: "We'll never share your email with anyone else."
        },
        password: {
            label: "Password",
            placeholder: "Enter your password",
            errorMsg: {
                required: "Password is required"
            },
            footnote: "Your password must be at least 8 characters long."
        },
        button: "Sign In",
        submission: {
            fail: "Login failed. Please check your credentials and try again."
        }
    }
};

function LoginPage() {
    return (
        <div>
            <LoginForm data={loginData} />
        </div>
    );
}

export default LoginPage;