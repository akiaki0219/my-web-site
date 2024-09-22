'use client';

import React, {useState, useEffect} from "react";

const YOUTUBE_SEARCH_API_URL: string = process.env.NEXT_PUBLIC_YOUTUBE_SEARCH_API_URL! as string;
const API_KEY: string = process.env.NEXT_PUBLIC_API_KEY! as string;

function TopVideo() {
  const [videoId, setVideoId] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const params = {
      key: API_KEY,
      channelId: "UCG6CzweaohMczHNS5tfI4UA",
      order: "viewCount",
      type: "video",
      maxResults: "10",
    };
    const queryParams = new URLSearchParams(params);

    fetch(YOUTUBE_SEARCH_API_URL + queryParams)
      .then((result) => result.json())
      .then((result) => {
        if (result.items && result.items.length !== 0) {
          console.log(result);
          setVideoId(result.items[0].id.videoId);
          setIsLoaded(true);
        }
      })
      .catch((error) => {console.error(error);});
  }, []);

  return (
    <div className="">
      <h5 className="text-xl text-center">Top Video (based on YouTube data)</h5>
      {!isLoaded && <p>Now Loading...</p>}
      <div className="my-2 aspect-w-16 aspect-h-9">
        <iframe className=""
          id="player"
          title="TopVideo"
          src={"https://www.youtube.com/embed/"+videoId}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default TopVideo;
