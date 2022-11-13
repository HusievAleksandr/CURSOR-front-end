window.onload = slayder;

function slayder(){
let slayd = document.getElementById("slayder");
let i = 2;

setInterval(krutitSlayd,5000);
    function krutitSlayd(){

       slayd.setAttribute ("src", "images/"+i+".jpg");       
       slayd.setAttribute("class", "show_"+i);
           

        let tekstSlayder = document.getElementById("kontent_slayder_"+i);
        tekstSlayder.setAttribute("style","opacity: 1; animation: show_text 4s ease;");
        if (i>1){
        let tekstSlayderMinus = document.getElementById("kontent_slayder_"+(i-1));
        tekstSlayderMinus.setAttribute("style","opacity: 0;");}
        else if (i=1){
        let tekstSlayderMinus = document.getElementById("kontent_slayder_4");
        tekstSlayderMinus.setAttribute("style","opacity: 0;");}


        if (i<4){return   i=i+1;}  
        else {return i=1;}  
        
        }
}


