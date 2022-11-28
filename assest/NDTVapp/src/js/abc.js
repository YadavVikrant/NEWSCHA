var btnRed=document.getElementById('btnRed')
var btnBlack=document.getElementById('btnBlack')
var btnBlue=document.getElementById('btnBlue')
var btnPink=document.getElementById('btnPink')
var btnPurple=document.getElementById('btnPurple')
var watch=document.getElementById('watch')

var hr1=document.getElementById('hr')
var min1=document.getElementById('min')
var sec1=document.getElementById('sec')

var heartratec1=document.getElementById('btnheartrate')
var imgheartrate=document.getElementById('hearrate')

var heartrading=document.getElementById('heartrading')
var btntime=document.getElementById('time')
var initialcoundownval2=heartrading.innerHTML;
var mySound;

// var snd = new Audio("/static/NDTVapp/audio/beep-05.mp3"); // buffers automatically when created
// snd.play();
// console.log(snd.play())

function startGame() {
    
    // mySound = new sound("bounce.mp3");
    myMusic = new sound("/static/NDTVapp/audio/beep-05.mp3");
    myMusic.play();
    
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    } 
}
heartratec1.addEventListener('click',function(){
    
    heartrading.style.display="block"
    timehead.style.display="none"
    
    var interval=setInterval(function(){   
    initialcoundownval2=initialcoundownval2>70?initialcoundownval2-1:70;
    if(initialcoundownval2 % 2 === 0){
        imgheartrate.style.display="block"
        imgheartrate.style.marginTop="-158px"
        
    heartrading.style.marginTop="-55px"
    heartrading.style.marginleft="106px"
    }
    else{
        imgheartrate.style.display="none" 
    }


    // heartrading.innerHTML=initialcoundownval2;
    if(initialcoundownval2===70)
    {
        clearInterval(interval) //to stop the interval
        initialcoundownval2=78
    }
    heartrading.innerHTML=initialcoundownval2;
    },1000)
   
   
    
})

btntime.addEventListener('click',function(){
    imgheartrate.style.display="none"
    timehead.style.display="block"
    heartrading.style.display="none"

    var hr2=hr1.innerHTML;
var min2=min1.innerHTML;
var sec2=sec1.innerHTML;



setInterval(function(){   
    var d = new Date(); // for now
hr2=d.getHours()+":"; // => 9
min2=d.getMinutes()+":"; // =>  30
sec2=d.getSeconds(); // => 51

hr1.innerHTML=hr2
sec1.innerHTML=sec2
min1.innerHTML=min2
;
},1000)
   
   
    
})





btnBlack.addEventListener('click',function(){
   
    watch.src='//i.imgur.com/iOeUBV7.png';
    
})

btnRed.addEventListener('click',function(){
    
    watch.src='//i.imgur.com/PTgQlim.png';
    
})
btnPink.addEventListener('click',function(){
 
    watch.src='//i.imgur.com/Zygu7I3.png';
    
})
btnBlue.addEventListener('click',function(){
   
    watch.src='//i.imgur.com/Mplj1YR.png';
    
})

btnPurple.addEventListener('click',function(){
   
    watch.src='//i.imgur.com/xSIK4M8.png';
    
})

console.log(hr1)



console.log(hr1+":"+min1+":"+sec1);

