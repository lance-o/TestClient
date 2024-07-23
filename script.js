const videoContainer = document.getElementById("videoContainer");

async function getVideo(){
    const res = await fetch("http://localhost:8080/video");

    const data = await res.json();

    const video = document.createElement("video");
    video.src = data;
    video.controls = true;
    videoContainer.appendChild(video);
}

getVideo();