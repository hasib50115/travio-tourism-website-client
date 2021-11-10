import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { render } from '@testing-library/react';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    // const {children, ...rest} = props;
    const {user} = useAuth();
    return (
        <Route  
        {...rest}
        render ={({location}) => user.displayName ? children : <Redirect
        to={{
            pathname: '/login',
            state: {from: location}
        }}>
        </Redirect>} >
                      
        </Route>
    );
};

export default PrivateRoute;