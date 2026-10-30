let musicRequested=false;
const backgroundMusicSource = 'Tere_Mbi.mp3';
const musicRoot=document.createElement('aside');musicRoot.className='music-controls';musicRoot.setAttribute('aria-label','Musique / Music');
const backgroundAudio=new Audio();backgroundAudio.loop=true;backgroundAudio.preload='none';backgroundAudio.volume=0.3;
if(backgroundMusicSource)backgroundAudio.src=backgroundMusicSource;
backgroundAudio.hidden=true;document.body.append(backgroundAudio);
const musicToggle=document.createElement('button');musicToggle.className='music-toggle';musicToggle.type='button';musicToggle.setAttribute('aria-pressed','false');
const musicStatus=document.createElement('span');musicStatus.className='music-status';musicStatus.setAttribute('role','status');
musicRoot.append(musicToggle,musicStatus);document.body.append(musicRoot);
function musicLabel(){const fr=language==='fr';musicToggle.textContent=fr?(backgroundAudio.paused?'Tere Mbi · arrêtée':'Tere Mbi · en lecture'):(backgroundAudio.paused?'Tere Mbi · off':'Tere Mbi · playing');musicToggle.setAttribute('aria-pressed',String(!backgroundAudio.paused));musicToggle.disabled=!backgroundMusicSource;musicToggle.title='Céline Banza — Tere Mbi';if(!backgroundMusicSource)musicToggle.textContent=fr?'Tere Mbi · bientôt':'Tere Mbi · coming soon';}
function stopMusic(){musicRequested=false;backgroundAudio.pause();musicStatus.textContent='';musicLabel();}
async function startMusic(){if(!backgroundMusicSource)return;musicRequested=true;musicToggle.textContent=language==='fr'?'♫ Chargement… · arrêter':'♫ Loading… · stop';try{await backgroundAudio.play();if(!musicRequested){backgroundAudio.pause();}musicStatus.textContent='';}catch{musicStatus.textContent=language==='fr'?'Lecture indisponible':'Playback unavailable';}musicLabel();}
musicToggle.addEventListener('click',()=>{if(musicRequested)stopMusic();else startMusic();});
backgroundAudio.addEventListener('error',()=>{musicStatus.textContent=language==='fr'?'Lecture indisponible':'Playback unavailable';stopMusic();});
const renderBeforeMusic=render;render=function(){renderBeforeMusic();musicLabel();let button=document.querySelector('#recruiter .download-cv');if(!button){button=document.createElement('a');button.className='download-cv';button.href='CV-KIASI-SALUMU-DOLIVIN.pdf';button.download='CV-KIASI-SALUMU-DOLIVIN.pdf';document.querySelector('#recruiter').append(button)}button.textContent=language==='fr'?'Télécharger mon CV · PDF ↓':'Download my CV · PDF ↓';};render();

