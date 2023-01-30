import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const ifrem = document.querySelector('iframe');
const player = new Player(ifrem);

console.log(player)

const onPlay = function (evt) {
    const currentTime = evt.seconds;
    console.log(currentTime);
    localStorage.setItem('videoplayer-current-time', currentTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

const timeFromLocalStorage = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(JSON.parse(timeFromLocalStorage)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
