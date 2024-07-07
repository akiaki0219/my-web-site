"use client";

import {fetchLatestVideo} from 'utils/fetchVideo';
import {LatestVideoObject} from 'utils/types';
import React, {useState, useEffect} from 'react';

function LatestVideo() {
  const [latestVideo, setLatestVideo] = useState<LatestVideoObject>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      const fetchVideo = await fetchLatestVideo();
      if (fetchVideo) {
        const latestVideo = fetchVideo as unknown as LatestVideoObject;
        console.log(latestVideo);
        setLatestVideo(latestVideo);
        setIsLoaded(true);
      }
    };
    fetchVideo();
  }, []);

  return (
    <div className="">
      <h5 className="text-xl text-center">Latest Video</h5>
      {!isLoaded && <p>Now Loading...</p>}
      {latestVideo &&
      <div className="my-2 aspect-w-16 aspect-h-9">
        <iframe className=""
          id="player"
          title="LatestVideo"
          src={latestVideo.YouTube ? `https://www.youtube.com/embed/${latestVideo.YouTube}` : `https://embed.nicovideo.jp/watch/sm${latestVideo.niconico}`}
          allowFullScreen
        />
      </div>
      }
    </div>
  );
};

export default LatestVideo;
