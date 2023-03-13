import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

let savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(savedTime);

function onTimeUpdate() {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem('videoplayer-current-time', seconds);
    }).catch(function (error) {
        console.log(error);
    });
}
const trotledonTimeUpdate = throttle(onTimeUpdate, 1000);

player.on('timeupdate', trotledonTimeUpdate);




