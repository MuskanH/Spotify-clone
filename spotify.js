let songindex= 0;
let audioElement = new Audio("1.mp3");
let masterPlay= document.getElementById("masterPlay");
let progressBar =document.getElementById("progressBar");
let gif= document.getElementById("gif");
let songItems= Array.from(document.getElementsByClassName("songItem"));
let masterSongName= document.getElementById("masterSongName");

let songs=[
    {songName: "Tere Vaaste", filePath: "0.mp3", coverPath: "covers0.jpg"},
    {songName: "Kesariya", filePath: "1.mp3", coverPath: "covers1.jpg"},
    {songName: "Malang Sajna", filePath: "2.mp3", coverPath: "covers2.jpg"},
    {songName: "Fir aur kya chahiye", filePath: "3.mp3", coverPath: "covers3.jpg"},
    {songName: "Tere Pyaar Main", filePath: "4.mp3", coverPath: "covers4.jpg"},
    {songName: "Pyaar Hota Kayi Baar Hain", filePath: "5.mp3", coverPath: "covers5.jpg"},
    {songName: "Raatan Lambiya", filePath: "6.mp3", coverPath: "covers6.jpg"},
    {songName: "Tere Hawaale", filePath: "7.mp3", coverPath: "covers7.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src =songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener("click", ()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity =1;
}else{
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity =0;
}
})

audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})

progressBar.addEventListener("change",()=>{
    audioElement.currentTime = progressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        if(audioElement.paused || audioElement.currentTime<=0){
        songIndex= parseInt(e.target.id);
        audioElement.src= `${songIndex}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.play();
        gif.style.opacity =1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        }else{
            audioElement.pause();
            e.target.classList.remove("fa-circle-pause");
            e.target.classList.add("fa-circle-play");
            masterPlay.classList.remove("fa-circle-pause");
            masterPlay.classList.add("fa-circle-play");
            gif.style.opacity =0;
        }
        })
})
/////////////////////////////////////////////////////////////////////////
document.getElementById("next").addEventListener("click",()=>{
    if (songIndex>=7){
        songIndex=0
    }else{
        songIndex +=1;
    }
    audioElement.src= `${songIndex}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity =1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

document.getElementById("previous").addEventListener("click",()=>{
    if (songIndex<=0){
        songIndex=0
    }else{
        songIndex -=1;
    }
    audioElement.src= `${songIndex}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity =1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})