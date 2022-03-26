import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ auth, children }) => {
  return (
    <div>
        {auth ? children : <Navigate to="/" ></Navigate>}
    </div>
  )
}

export default PrivateRoute