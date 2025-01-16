'use client';

import {fetchVideoList, fetchLatestAllVideoList} from 'utils/fetchVideo';
import {VideoObject} from 'utils/types';
import {useState, useEffect} from 'react';
import SortandFilter from './components/SortAndFilter';
import VideoList from './components/VideoList';

function Video() {
  const [videoList, setVideoList] = useState<VideoObject[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      setIsLoaded(true);
      const fetchVideoList = await fetchLatestAllVideoList();
      if (fetchVideoList) {
        const videoList = fetchVideoList as unknown as VideoObject[];
        setVideoList(videoList);
        setIsLoaded(false);
      }
    };
    fetchVideo();
  }, []);

  const applySortFilter = async (order: 'latest' | 'oldest', filterType: string[], filterCharacter: string[], filterEngine: string[]) => {
    setIsLoaded(true);
    const fetchNewVideoList = await fetchVideoList(order, filterType, filterCharacter, filterEngine);
    let NewVideoList = fetchNewVideoList as unknown as VideoObject[];
    
    if (NewVideoList) {
      setVideoList(NewVideoList);
      setIsLoaded(false);
    }
  }

  return (
    <div className="mx-auto">
      <h1 className="text-4xl text-center py-4">Video List</h1>
      <SortandFilter applySortFilter={applySortFilter} />
      {isLoaded && <p className="w-3/4 text-center mx-auto mb-4">Now Loading...</p>}
      {videoList.length===0
        ? <div className="w-3/4 text-center mx-auto mb-4">
            <h2>There is No Video</h2>
            <br/>
            <h5>Please try agein after Changing search parameters.</h5>
          </div>
        : <VideoList videos={videoList} />
      }
    </div>
  );
}

export default Video;
