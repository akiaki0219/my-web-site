type StateYouTubePlayer = {
  YouTube: string;
}

function YouTubePlayer({YouTube}: StateYouTubePlayer) {
  return (
    <div className="flex items-center justify-center">
      <iframe className="aspect-video"
        id="player"
        title="YouTube"
        width={640}
        height={360}
        src={`https://www.youtube.com/embed/${YouTube}`}
        allowFullScreen
        loading="lazy" />
    </div>
  );
};

export default YouTubePlayer
