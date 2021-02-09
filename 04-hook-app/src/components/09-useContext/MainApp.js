import React , { useState }from 'react'
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

import './styles.css';

export const MainApp = () => {
    const [ user, setUser ] = useState();

    return (
        <div className="row">
            <UserContext.Provider value={{ user, setUser }}>
                <AppRouter /> 
            </UserContext.Provider>
        </div>
    )
}
