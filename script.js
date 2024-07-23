const videoContainer = document.getElementById("videoContainer");

async function getVideo(){
    const res = await fetch("https://testserver-9xtz.onrender.com/video");

    const data = await res.json();

    const video = document.createElement("video");
    video.src = data;
    video.controls = true;
    videoContainer.appendChild(video);
}

getVideo();