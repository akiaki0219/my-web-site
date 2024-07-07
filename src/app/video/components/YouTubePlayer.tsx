type StateYouTubePlayer = {
  YouTube: string;
}

function YouTubePlayer({YouTube}: StateYouTubePlayer) {
  return (
    <div className="flex justify-center px-10 py-4">
      <div className="w-full aspect-w-16 aspect-h-9">
        <iframe className="w-full h-full"
          id="player"
          title="YouTube"
          src={`https://www.youtube.com/embed/${YouTube}`}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default YouTubePlayer
