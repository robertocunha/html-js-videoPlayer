const videoPlayer = document.getElementById('videoPlayerId');

const sources = [
  { src: 'videos/video01.ogg', type: 'video/ogg' },
  { src: 'videos/video01.mp4', type: 'video/mp4' }
];

for (const source of sources) {
  const sourceElement = document.createElement('source');
  sourceElement.src = source.src;
  sourceElement.type = source.type;
  
  videoPlayer.appendChild(sourceElement);
}

videoPlayer.load();

