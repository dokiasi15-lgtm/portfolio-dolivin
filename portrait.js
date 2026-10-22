const portrait=document.querySelector('.portrait');
const portraitButton=document.querySelector('#portrait-toggle');
function updatePortraitLabel(){const color=portrait.classList.contains('is-color');portraitButton.textContent=language==='fr'?(color?'Noir et blanc':'Révéler la couleur'):(color?'Black & white':'Reveal colour');portraitButton.setAttribute('aria-pressed',String(color));}
portraitButton.addEventListener('click',()=>{portrait.classList.toggle('is-color');updatePortraitLabel()});
const renderBeforePortrait=render;render=function(){renderBeforePortrait();updatePortraitLabel()};render();
