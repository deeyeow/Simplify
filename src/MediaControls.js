import React from 'react';
import * as $ from 'jquery';
import './MediaControls.css'

class MediaControls extends React.Component {
    constructor(props) {
        super(props);
    }

    pauseCurrentlyPlaying = (token) => {
        $.ajax({
            url: 'https://api.spotify.com/v1/me/player/pause',
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        })
    }

    resumeCurrentlyPlaying = (token) => {
        $.ajax({
            url: 'https://api.spotify.com/v1/me/player/play',
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        })
    }

    getNextSong = (token) => {
        $.ajax({
            url: 'https://api.spotify.com/v1/me/player/next',
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        })
    }

    getPrevSong = (token) => {
        $.ajax({
            url: 'https://api.spotify.com/v1/me/player/previous',
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        })
    }
    
    render() {
        return (
            <div>
                {this.props.is_playing && (
                    <div className='media-controls-table'>
                        <div className='media-controls-row'>
                            <button
                            className='btn-media btn-prev can-hover'

                            onClick={() => this.getPrevSong(this.props.token)}>
                                &#171;
                            </button>
                            <button 
                            className='btn-media btn-pause can-hover'

                            onClick={() => this.pauseCurrentlyPlaying(this.props.token)}>
                                <b>&#8545;</b>
                            </button>
                            <button
                            className='btn-media btn-next can-hover'

                            onClick={() => this.getNextSong(this.props.token)}>
                                &#187;
                            </button>
                        </div>
                    </div>
                )}
                {!this.props.is_playing && (
                    <div className='media-controls-table'>
                        <div className='media-controls-row'>
                            <button 
                            className='btn-media btn-play can-hover'

                            onClick={() => this.resumeCurrentlyPlaying(this.props.token)}>
                                &nbsp;&#9658;
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default MediaControls;