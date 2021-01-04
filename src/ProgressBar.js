import React from 'react';
import useDarkMode from 'use-dark-mode';
import './Player.css';

/* progress bar blends in with background from dark-mode, create separate component to handle */
const ProgressBar = (props) => {
    const darkMode = useDarkMode(true);

    let progressBarStyle = {
        width: ((props.progress_ms / props.duration_ms) * 100) + '%',
        animation: props.is_playing ? 'fadein 0.5s forwards' : 'fadeout 0.5s forwards',
        'background-color': darkMode.value ? 'antiquewhite' : 'black',
    };

    return (
        <div className='progress-in' style={progressBarStyle}></div>
    )
}

export default ProgressBar;