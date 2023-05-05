import React from 'react';
import { Navigate } from 'react-router-dom';

import Cookies from "universal-cookie";

const PrivateRoute = ({children}) => {
    // const navigate = useNavigate();
    const cookies = new Cookies();
    let user = cookies.get("user");
    console.log(user);
    if (user) {

        return children;
    } else {
        return <Navigate to="/login" replace />;
    }
}

export default PrivateRoute