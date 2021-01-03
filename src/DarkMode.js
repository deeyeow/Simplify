import useDarkMode from 'use-dark-mode';
import ButtonToggle from './ButtonToggle'


const DarkModeToggle = (props) => {
    /* manually add each HTML element */
    const darkMode = useDarkMode(true);
    /*const darkMode1 = useDarkMode(true, {element: document.getElementsByClassName('btn-login')[0]});*/
    const darkMode2 = useDarkMode(true, {element: document.getElementsByClassName('btn-prev')[0]});
    const darkMode3 = useDarkMode(true, {element: document.getElementsByClassName('btn-pause')[0]});
    const darkMode4 = useDarkMode(true, {element: document.getElementsByClassName('btn-play')[0]});
    const darkMode5 = useDarkMode(true, {element: document.getElementsByClassName('btn-next')[0]});
    const darkMode6 = useDarkMode(true, {element: document.getElementsByClassName('no-music-text')[0]});
    const darkMode7 = useDarkMode(true, {element: document.getElementsByClassName('song-title-link')[0]});
    const darkMode8 = useDarkMode(true, {element: document.getElementsByClassName('song-artist-link')[0]});
    const darkMode9 = useDarkMode(
        true, 
        {
            element: document.getElementsByClassName('progress-in')[0],
        });

    return (
        <div>
            {/*
            <button onClick={() => {
                darkMode.toggle();
            }}>
                ☀ Toggle Dark Mode ☾
            </button>
            */}
            <ButtonToggle
            checked={darkMode.value}
            onChange={darkMode.toggle}
            />
        </div>
    );
}

export default DarkModeToggle;