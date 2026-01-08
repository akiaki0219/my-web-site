import VideoItem from './VideoItem';
import {fetchVideoObject} from 'utils/types';

interface VideoListProps {
  videos: fetchVideoObject[];
}
interface IsLoadedProps {
  isLoaded: boolean;
}

function VideoList({videos}: VideoListProps, {isLoaded}: IsLoadedProps) {
  return (
    <div>
      {isLoaded && <p>Now Loading...</p>}
      {videos.map((video) => <VideoItem video={video} key={video.id} />)}
    </div>
  );
};

export default VideoList;
