import React from 'react';

const SongInfo = (props) => {

    let fade = {
        'animation': props.is_playing ? 'fadein 0.5s forwards' : 'fadeout 0.5s forwards',
    }

    let image = {
        'background-image': 'url(' + props.item.album.images[0].url + ')',
    }

    let shift = props.is_playing ?
    {
        'margin-bottom': '0vh',
        'transition': 'all 0.5s ease',
        '-webkit-transition': 'all 0.5s ease',
        '-moz-transition': 'all 0.5s ease',
        '-ms-transition': 'all 0.5s ease',
    } :
    {
        'margin-bottom': '-10vh',
        'transition': 'all 0.5s ease',
        '-webkit-transition': 'all 0.5s ease',
        '-moz-transition': 'all 0.5s ease',
        '-ms-transition': 'all 0.5s ease',
    }

    return (
        <div 
        className='song-area2'
        style={shift}>
            <a 
            className='song-image can-hover-img'
            target="_blank" rel="noopener noreferrer" 
            href={props.item.album.external_urls['spotify']}
            style={image}>
                {props.item.album.name}
            </a>
            <div className='song-title'>
                <a
                className='song-title-link can-hover'
                target="_blank" rel="noopener noreferrer"
                style={fade} 
                href={props.item.external_urls['spotify']}>
                    {props.item.name}
                </a>
            </div>
            <div className='song-artist'>
                <a 
                className='song-artist-link can-hover'
                target="_blank" rel="noopener noreferrer"
                style={fade} 
                href={props.item.artists[0].external_urls['spotify']}>
                    {props.item.artists[0].name}
                </a>
            </div>
            <div className='popularity' style={fade}>Song Popularity - {props.item.popularity}</div>
            <div className='website' style={fade}>https://darren-yau.webflow.io</div>
        </div>
    );

}

export default SongInfo;