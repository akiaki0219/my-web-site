'use client';

import {fetchTopVideo} from 'utils/fetchVideo';
import {TopVideoObject} from 'utils/types';
import React, {useState, useEffect} from 'react';

function TopVideo() {
  const [latestVideo, setTopVideo] = useState<TopVideoObject>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      setIsLoaded(true);
      const fetchVideo = await fetchTopVideo();
      if (fetchVideo) {
        const latestVideo = fetchVideo;
        setTopVideo(latestVideo);
        setIsLoaded(false);
      }
      else {
        setIsLoaded(false);
      }
    };
    fetchVideo();
  }, []);

  return (
    <div className="">
      <h5 className="text-xl text-center">Top Video</h5>
      {isLoaded && <p className="text-center">Now Loading...</p>}
      {latestVideo &&
      <div className="my-2 aspect-w-16 aspect-h-9">
        <iframe className=""
          id="player"
          title="TopVideo"
          src={latestVideo.YouTube ? `https://www.youtube.com/embed/${latestVideo.YouTube}` : `https://embed.nicovideo.jp/watch/${latestVideo.niconico}`}
          allowFullScreen
        />
      </div>
      }
    </div>
  );
};

export default TopVideo;
