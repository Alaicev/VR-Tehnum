const playButton = document.querySelector(".button-play")
const videoPlayer = document.querySelector(".video-player")
const video = document.querySelector(".video")

let isPlay = false

playButton.addEventListener("click", () => {
    if(!isPlay) {
        videoPlayer.classList.add("video-control-none")
        isPlay = true
        video.play()
    }  
})

video.addEventListener("click", () => {
    if(isPlay) {
        videoPlayer.classList.remove("video-control-none")
        isPlay = false
        video.pause()
    }
})
