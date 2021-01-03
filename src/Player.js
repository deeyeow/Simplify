import React from 'react';
import './Player.css';
import ProgressBar from './ProgressBar';

const Player = (props) => {

    let fade ={
        animation: props.is_playing ? 'fadein 2s forwards' : 'fadeout 2s forwards',
    }

    return (
        <div className='song-info-ext'>
            <div className='song-info-int'>
                <img className='song-image' src={props.item.album.images[0].url}></img>
                <div className='song-title'>
                    <a
                    className='song-title-link'
                    style={fade} 
                    href={props.item.external_urls['spotify']}>{props.item.name}</a>
                </div>
                <div className='song-artist'>
                    <a 
                    className='song-artist-link'
                    style={fade} 
                    href={props.item.artists[0].external_urls['spotify']}>
                        {props.item.artists[0].name}
                    </a>
                </div>
                <div className='progress-border'>
                    <ProgressBar
                    progress_ms={props.progress_ms}
                    duration_ms={props.item.duration_ms}
                    is_playing={props.is_playing}
                    />
                </div>
            </div>
            <div className='popularity' style={fade}>Song Popularity - {props.item.popularity}</div>
            <div className='device' style={fade}>Source - {props.device['name']}</div>
            <div className='website' style={fade}>https://darren-yau.webflow.io</div>
        </div>
    );
};

export default Player;