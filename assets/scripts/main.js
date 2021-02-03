// main.js

var volIma = document.getElementById("volume-image");
var volNum = document.getElementById("volume-number");
var volSli = document.getElementById("volume-slider");
var aSelect = document.getElementById("audio-selection");
var play = document.getElementById("honk-btn");
var audio = document.getElementById("horn-sound");
var sndImg = document.getElementById("sound-image");



volNum.addEventListener("input",function(){updateFromNumber(volNum.value,volSli, audio, volIma)});
volSli.addEventListener("input", function(){updateFromSlider(volSli.value, volNum, audio, volIma)});
aSelect.addEventListener("change",function(){setAudio(sndImg, audio)});
play.addEventListener("click", function(event){event.preventDefault(); audio.play();});



function setAudio(image, audio){
    var selectedAudio = document.querySelector('input[name="radio-sound"]:checked').id;
    if(selectedAudio=="radio-party-horn"){
        audio.src="./assets/media/audio/party-horn.mp3";
        image.src="./assets/media/images/party-horn.svg";
    }
    else if(selectedAudio=="radio-air-horn"){
        audio.src="./assets/media/audio/air-horn.mp3";
        image.src="./assets/media/images/air-horn.svg";
    }
    else{
        audio.src="./assets/media/audio/car-horn.mp3";
        image.src="./assets/media/images/car.svg";
    }
}


function updateFromSlider(sliVal, volumeNumber, audio, image){
    volumeNumber.value=sliVal;
    audio.volume = sliVal/100;
    updateImage(image,sliVal);
}

function updateFromNumber(numVal, volumeSlider, audio, image){
    volumeSlider.value=numVal;
    audio.volume=numVal/100;
    updateImage(image,numVal);
}

function updateImage(image, sliVal){
    var btn = document.getElementById("honk-btn");
    if(sliVal==0){
        image.src="./assets/media/icons/volume-level-0.svg";
        btn.disabled = true;
        return;
    } else if (sliVal <= 33){
        image.src="./assets/media/icons/volume-level-1.svg";
    } else if (sliVal <= 66){
        image.src="./assets/media/icons/volume-level-2.svg";
    } else{
        image.src="./assets/media/icons/volume-level-3.svg";
    }
    if(btn.disabled){
        btn.disabled=false;
    }
}