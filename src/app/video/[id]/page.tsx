'use client';

import Link from 'next/link';
import {fetchSelectedVideo} from 'utils/fetchVideo';
import {VideoObject} from 'utils/types';
import {useState, useEffect} from 'react';
import {useParams} from 'next/navigation';
import VideoPageItem from './components/VideoPageItem';

type Params = {
  id: string;
}

function VideoPage() {
  const {id} = useParams<Params>();
  const [Video, setVideo] = useState<VideoObject | null>(null);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      setIsLoaded(true);
      const fetchVideo = await fetchSelectedVideo(Number(id));
      if (fetchVideo) {
        const selectedVideo = fetchVideo as unknown as VideoObject;
        setVideo(selectedVideo);
      }
      setIsLoaded(false);
    };
    fetchVideo();
  }, [id]);

  return (
    <div className="mx-auto">
      {isLoaded ? (
        <h2 className="text-center my-4">Now Loading...</h2>
      ) : Video ? (
        <VideoPageItem video={Video} key={Video.id} />
      ) : (
        <h2 className="text-center my-4">There is No Video</h2>
      )}
      <div>
        <h5 className="text-center text-xl">Back to Video List:
          <button className="mx-2 px-2 py-2 mb-4 bg-green-500 text-white rounded shadow-md">
            <Link className="px-2" href={'/video'}>Video List</Link>
          </button>
        </h5>
      </div>
    </div>
  );
}

export default VideoPage;
