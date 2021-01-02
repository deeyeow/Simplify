const auth_endpoint = 'https://accounts.spotify.com/authorize';

const client_id = '4c9727379da54023a85576b3e41fa6e5';
const redirect_uri = 'http://spotify-v1.surge.sh';
const scopes = [
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
];

export const auth_URL = 
    auth_endpoint + 
    '?client_id=' + client_id +
    '&redirect_uri=' + redirect_uri +
    '&scope=' + scopes.join('%20') +
    '&response_type=token&show_dialog=false'
