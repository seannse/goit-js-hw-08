import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const LS_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onSaveCurrentTime = function ({seconds}) {
  localStorage.setItem(LS_KEY, seconds) 
  console.log(seconds)  
}

player.setCurrentTime(localStorage.getItem(LS_KEY) || 0);
player.on('timeupdate', throttle(onSaveCurrentTime, 1000));



