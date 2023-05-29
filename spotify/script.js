console.log("Welcome to Soptify");

//initialize the variables
let songIndex =0; //initial song that is being played
let audioElement=new Audio('covers/songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));




let songs=[
    {songName:"Warriyo - Mortals", filePath: "covers/songs/1.mp3" , coverPath:"covers/4.jpg"},
    {songName:"Cielo - Huma-Huma", filePath: "covers/songs/2.mp3" , coverPath:"covers/2.jpg"},
    {songName:"DEAF KEV", filePath: "covers/songs/3.mp3" , coverPath:"covers/3.jpg"},
    {songName:"Different Heaven", filePath: "covers/songs/4.mp3" , coverPath:"covers/4.jpg"},
    {songName:"Janji-Heroes-Tonight", filePath: "covers/songs/5.mp3" , coverPath:"covers/5.jpg"},
    {songName:"one", filePath: "covers/songs/2.mp3" , coverPath:"covers/6.jpg"},
    {songName:"two", filePath: "covers/songs/2.mp3" , coverPath:"covers/7.jpg"},
    {songName:"three", filePath: "covers/songs/2.mp3" , coverPath:"covers/8.jpg"},
    {songName:"three", filePath: "covers/songs/2.mp3" , coverPath:"covers/9.jpg"},
    {songName:"three", filePath: "covers/songs/2.mp3" , coverPath:"covers/10.jpg"},
    
   

    
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    

})


//handle play pause click
masterPlay.addEventListener('click',()=>{   //when clicking masterplay
    if(audioElement.paused || audioElement.currentTime<=0){    //whwn song is paused or when the song has not even started to play
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})


audioElement.addEventListener('timeupdate', ()=>{
  
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100); //how much it has been played in percent
  
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

 
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}




Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`covers/songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})

/*document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `covers/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `covers/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})*/

