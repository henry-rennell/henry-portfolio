import React, { createContext, useState } from 'react';

let DarkModeContext = createContext();

function DarkModeProvider(props) {
    const [darkMode, setDarkMode] = useState(false)

    let toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div>
            <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
}

export {DarkModeContext, DarkModeProvider};