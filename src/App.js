import logo from './logo.svg';
import './App.css';

import React from 'react';
import * as $ from 'jquery';

import {auth_URL} from './auth';

import Player from './Player'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            token: null,
            no_data: false,
            is_playing: false,
            item: {
                album: {
                    images: [{ url: ''}]
                },
                artists: [{
                    name: '',
                    external_urls: {},
                }],
                name: '',
                popularity: 0,
                duration_ms: 0,
                external_urls: {},
            },
            progress_ms: 0,
            device: {},

            manually_paused: false,
        };

        /*
        this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
        this.update = this.update.bind(this);
        this.pauseCurrentlyPlaying = this.pauseCurrentlyPlaying.bind(this);
        */
    }

    componentDidMount() {
        /* preprocess window, will have access token if from spotify response */
        let response = window.location.hash
            .substring(1)
            .split('&')
            .reduce( (sum, next) => {
                if (next) {
                    let parts = next.split('=');
                    sum[parts[0]] = decodeURIComponent(parts[1]);
                }
                return sum;
            }, {});
        window.location.hash = '';

        let _token = response.access_token
        if (_token) {
            this.setState({
                token: _token,
            });

            /* call API */
            this.getCurrentlyPlaying(_token);
        }

        /* call API again every X milliseconds */
        this.interval = setInterval(() => this.update(), 1000);
    }

    /* clear interval when component unmounts */
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    /* keep calling API */
    update() {
        if (this.state.token) {
            this.getCurrentlyPlaying(this.state.token);
        }
    }

    getCurrentlyPlaying(token) {
        /* async API call */
        $.ajax({
            url: 'https://api.spotify.com/v1/me/player',
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },

            success: (data) => {
                /* check if no response */
                if (!data) {
                    this.setState({
                        no_data: true,
                    });
                    return;
                }
                
                /* if response, update state */
                this.setState({
                    no_data: false,
                    is_playing: data.is_playing,
                    progress_ms: data.progress_ms,
                    item: data.item,
                    device: data.device,
                });
            }
        });
    }

    pauseCurrentlyPlaying(token) {
        $.ajax({
            url: 'https://api.spotify.com/v1/me/player/pause',
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            /* no response for PUT */
        })
    }

    resumeCurrentlyPlaying(token) {
        $.ajax({
            url: 'https://api.spotify.com/v1/me/player/play',
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            /* no response for PUT */
        })
    }


    render() {
        return (
            <div className='App'>
                {/* If no token, get*/}
                {!this.state.token && (
                    <header className='App-header-login'>
                        <a
                        className='btn btn-login'
                        href={auth_URL}
                        >
                            Login to Spotify
                        </a>
                    </header>
                )}
                {this.state.token && !this.state.no_data && (
                    <header className='App-header-music'>
                        <div className='music-area'>
                            <Player
                            is_playing={this.state.is_playing}
                            progress_ms={this.state.progress_ms}
                            item={this.state.item}
                            device={this.state.device}
                            />
                            {this.state.is_playing && (
                                <button 
                                className='btn-pause-play btn-pause'
                                onClick={() => this.pauseCurrentlyPlaying(this.state.token)}>
                                    <b>&#8545;</b>
                                </button>
                            )}
                            {!this.state.is_playing && (
                                <button 
                                className='btn-pause-play btn-play'
                                onClick={() => this.resumeCurrentlyPlaying(this.state.token)}>
                                    &nbsp;&#9658;
                                </button>
                            )}
                        </div>
                    </header>
                )}
                {this.state.no_data && (
                    <header className='App-header-login'>
                        <div className='no-music-text'>
                            Songs you play will appear here.
                        </div>
                    </header>
                )}
            </div>
        );
    }
}


export default App;
