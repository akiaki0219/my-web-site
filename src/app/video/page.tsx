'use client';

import {fetchLatestAllVideoList, fetchOldestAllVideoList} from 'utils/fetchVideo';
import {VideoObject} from 'utils/types';
import {useState, useEffect} from 'react';
import SortandFilter from './components/SortAndFilter';
import VideoList from './components/VideoList';

function Video() {
  const [videoList, setVideoList] = useState<VideoObject[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      const fetchVideoList = await fetchLatestAllVideoList();
      if (fetchVideoList) {
        const videoList = fetchVideoList as unknown as VideoObject[];
        setVideoList(videoList);
        setIsLoaded(true);
      }
    };
    fetchVideo();
  }, []);

  const applySortFilter = async (order: 'latest' | 'oldest', filterType: string[], filterCharacter: string[], filterEngine: string[]) => {
    let NewVideoList: VideoObject[] | null = [];
    if (order==='oldest') {
      const fetchNewVideoList = await fetchOldestAllVideoList();
      NewVideoList = fetchNewVideoList as unknown as VideoObject[];
    }
    else {
      const fetchNewVideoList = await fetchLatestAllVideoList();
      NewVideoList = fetchNewVideoList as unknown as VideoObject[];
    }
    
    if (NewVideoList) {
      NewVideoList = NewVideoList.filter(video => filterType.includes(video.type.name));
      NewVideoList = NewVideoList.filter(video => video.used.some(use => filterCharacter.includes(use.character.name)));
      NewVideoList = NewVideoList.filter(video => video.used.some(use => filterEngine.includes(use.engine.name)));
      setVideoList(NewVideoList);
      setIsLoaded(true);
    }
  }

  return (
    <div className="mx-auto">
      <h1 className="text-4xl text-center py-4">Video List</h1>
      <SortandFilter applySortFilter={applySortFilter} />
      {!isLoaded && <p>Now Loading...</p>}
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
