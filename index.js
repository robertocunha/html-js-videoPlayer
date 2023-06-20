const videoPlayer = document.getElementById('videoPlayerId');

const sourceInfo = [
  { src: 'videos/video01.ogg', type: 'video/ogg' },
  { src: 'videos/video01.mp4', type: 'video/mp4' }
];

for (const info of sourceInfo) {
  const sourceElement = document.createElement('source');
  sourceElement.src = info.src;
  sourceElement.type = info.type;
  
  videoPlayer.appendChild(sourceElement);
}

videoPlayer.load();

