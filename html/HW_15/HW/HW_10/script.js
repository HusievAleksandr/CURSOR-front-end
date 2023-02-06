export function hw_10 (){

const get_all_letters = document.querySelectorAll('.musical_letters');
const keystrokes= document.querySelector('body');
const music_playback = document.querySelector('audio');


keystrokes.addEventListener("click", function(e){
  let target = e.target;
  get_all_letters.forEach((el)=>{el.style.border='1px solid silver';});
  
  if(target.tagName=='SPAN'){
  target.style.border='5px solid rgb(13, 245, 63)';
  music_playback.setAttribute("src", `audio/${target.textContent.toLowerCase()}.mp3`);
                              }
                                                });


keystrokes.addEventListener("keydown",function(e){
    get_all_letters.forEach((el)=>{
    el.style.border='1px solid silver';

    if(el.textContent.toLowerCase()==e.key){
        el.style.border='5px solid rgb(13, 245, 63)';
        music_playback.setAttribute("src", `audio/${e.key}.mp3`);}
                                    });  
                                                  });


module.exports = {get_all_letters,
                keystrokes,
                music_playback
 };
}