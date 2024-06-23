type StatenicoVideoPlayer = {
  niconico: string;
}

function NicoVideoPlayer({niconico}: StatenicoVideoPlayer) {
  return (
    <div className="flex items-center justify-center">
      <iframe className="aspect-video"
        id="player"
        title="niconico"
        width={640}
        height={360}
        src={`https://embed.nicovideo.jp/watch/sm${niconico}`}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default NicoVideoPlayer
