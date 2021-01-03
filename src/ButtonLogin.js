import React from 'react';
import useDarkMode from 'use-dark-mode';

const ButtonLogin = (props) => {
    const darkMode = useDarkMode(true);

    return (
        <div>
            {darkMode.value && (
                <a
                className='btn-login-dark'
                href={props.auth_URL}
                >
                    Dream with Spotify
                </a>
            )}
            {!darkMode.value && (
                <a
                className='btn-login-light'
                href={props.auth_URL}
                >
                    Dance with Spotify
                </a>
            )}
        </div>
    );
}

export default ButtonLogin;