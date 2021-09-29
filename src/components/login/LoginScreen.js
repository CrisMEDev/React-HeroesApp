import React, { useContext } from 'react';

import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const setUser = {
    type: types.login,
    payload: {
        name: 'Cristian',
        email: 'cr15moresp@gmail.com'
    }
};

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {
        // history.push('/');
        
        dispatch( setUser );
        history.replace('/');

    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
