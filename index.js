const videoPlayer = document.getElementById('videoPlayerId');
const sourceButtons = document.querySelectorAll('button');

const sources = [
    {
        formats: [
            { src: 'videos/video01.ogg', type: 'video/ogg' },
            { src: 'videos/video01.mp4', type: 'video/mp4' }
        ]
    },
    {
        formats: [
            { src: 'videos/video02.ogg', type: 'video/ogg' },
            { src: 'videos/video02.mp4', type: 'video/mp4' }
        ]
    }
  
];

for (const info of sources[0].formats) {
  const sourceElement = document.createElement('source');
  sourceElement.src = info.src;
  sourceElement.type = info.type;
  
  videoPlayer.appendChild(sourceElement);
}

videoPlayer.load();

sourceButtons.forEach((element, index) => {
    element.addEventListener("click", () => {
        videoPlayer.innerHTML = ''; // Limpar elementos <source> existentes
        
        for (const info of sources[index].formats) {
            const sourceElement = document.createElement('source');
            sourceElement.src = info.src;
            sourceElement.type = info.type;
            
            videoPlayer.appendChild(sourceElement);
        }
          
        videoPlayer.load();
    })
});