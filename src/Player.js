import React from 'react';
import ProgressBar from './ProgressBar';
import './Player.css';

const Player = (props) => {

    let fade ={
        animation: props.is_playing ? 'fadein 0.5s forwards' : 'fadeout 0.5s forwards',
    }

    return (
            <div className='progress-border'>
                <ProgressBar
                progress_ms={props.progress_ms}
                duration_ms={props.item.duration_ms}
                is_playing={props.is_playing}
                />
            <div className='popularity' style={fade}>Song Popularity - {props.item.popularity}</div>
            <div className='device' style={fade}>Source - {props.device['name']}</div>
            <div className='website' style={fade}>https://github.com/deeyeow/Simplify</div>
        </div>
    );
}

export default Player;