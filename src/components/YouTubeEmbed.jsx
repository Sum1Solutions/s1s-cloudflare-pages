import React from 'react';

function YouTubeEmbed() {
  const videoUrl = 'https://www.youtube.com/embed/ySrkPGYgbHk';

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube Video Embed"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YouTubeEmbed;
