import React from 'react';
import useDarkMode from 'use-dark-mode';
import './Login.css';

const Login = (props) => {
    const darkMode = useDarkMode(true);

    /* darkMode not applying on initial page load, set color manually */
    let style = [
        {'margin-left': darkMode.value ? '-16vh' : '-24vh'},
        {'color': darkMode.value ? 'antiquewhite' : 'black'},
        {'color': darkMode.value ? '#008c8c' : '#b89c00'},
    ];

    
    /* changing actual content of HTML elements requires re-render for smooth transition */
    /* note Object.assign for passing in multiple inline styles */
    return (
        <div>
            {darkMode.value && (
                <div>
                    <div className='login-text'>
                        <span 
                        className='login-static-text' 
                        style={Object.assign({}, style[0],style[1])}>
                            Say goodbye to
                        </span>
                        <div className='sliding-vertical'>
                            <span style={style[2]}>&nbsp;clunky UI.</span>
                            <span style={style[2]}>&nbsp;headaches.</span>
                            <span style={style[2]}>&nbsp;insomnia. 💤</span>
                        </div>
                    </div>     
                </div>
            )}
            {!darkMode.value && (
                <div>
                    <div className='login-text'>
                        <span 
                        className='login-static-text' 
                        style={Object.assign({}, style[0],style[1])}>
                            Say hello to
                        </span>
                        <div className='sliding-vertical'>
                            <span style={style[2]}>&nbsp;simple design.</span>
                            <span style={style[2]}>&nbsp;peace of mind.</span>
                            <span style={style[2]}>&nbsp;good vibes. 🙌</span>
                        </div>
                    </div>
                </div>
            )}
            <a
            className={darkMode.value ? 'btn-login dark-mode' : 'btn-login light-mode'}
            href={props.auth_URL}
            >
                Login to Spotify
            </a>
        </div>
    );
}

export default Login;