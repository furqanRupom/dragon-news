import React from 'react';
import NevigationBar from '../pages/Shared/NevigationBar/NevigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayouts = () => {
    return (
        <div>
            <NevigationBar />
            <Outlet />
        </div>
    );
};

export default LoginLayouts;