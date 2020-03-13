import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import { useHistory } from "react-router-dom";

export default function Logout(props) {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        
    }, []);

    return (
        <div className="container">
            <div className="form-container">
            {
                <div>Logging you out ... </div>
            }
            </div>
        </div>
    );

}
