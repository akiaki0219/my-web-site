type StatenicoVideoPlayer = {
  niconico: string;
}

function NicoVideoPlayer({niconico}: StatenicoVideoPlayer) {
  return (
    <div className="flex justify-center px-10 py-4">
      <div className="w-full aspect-w-16 aspect-h-9">
        <iframe className="w-full h-full"
          id="player"
          title="niconico"
          src={`https://embed.nicovideo.jp/watch/${niconico}`}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default NicoVideoPlayer
