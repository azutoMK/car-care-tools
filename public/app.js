'use strict';
const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('#navigation');
function closeMenu(){menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');}
toggle.addEventListener('click',()=>{const open=menu.hidden;menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
menu.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!menu.hidden){closeMenu();toggle.focus();}});
document.addEventListener('click',event=>{if(!menu.hidden&&!menu.contains(event.target)&&!toggle.contains(event.target))closeMenu();});
const video=document.querySelector('#product-film');
const playButton=document.querySelector('.play-overlay');
playButton.addEventListener('click',()=>{video.muted=false;video.volume=1;video.play().catch(()=>{playButton.hidden=false;playButton.querySelector('span:last-child').textContent='Tap to try again';});});
video.addEventListener('play',()=>{playButton.hidden=true;});
video.addEventListener('ended',()=>{playButton.hidden=false;playButton.setAttribute('aria-label','Replay product film with sound');playButton.querySelector('span:last-child').textContent='Watch again';});
video.addEventListener('error',()=>{playButton.hidden=true;});
