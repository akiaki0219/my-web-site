import {VideoObject} from 'utils/types';
import YouTubePlayer from '../../components/YouTubePlayer';
import NicoVideoPlayer from '../../components/NicoVideoPlayer';

type StateVideoPageItem = {
  video: VideoObject;
}

function VideoPageItem({video}: StateVideoPageItem) {
  return(
    <div className="mx-auto my-4 grid grid-cols-2">
      <div className="items-center">
        {(() => {
          if (video.YouTube) {
            return (
              <div className="py-4">
                <YouTubePlayer YouTube={video.YouTube} key={video.id}/>
              </div>
            );}})()}
        {(() => {
          if (video.niconico) {
            return (
              <div className="py-4">
                <NicoVideoPlayer niconico={video.niconico} key={video.id}/>
              </div>
            );}})()}
      </div>
      <div className="my-4">
        <h1 className="text-2xl">{video.title}</h1>
        <div className="px-8">
          <h3>Type: {video.type.name}</h3>
          <h3>Posted: {video.posted_at.toString()}</h3>
          <div className="flex pb-4">
            <h3 className="">Character: </h3>
            <div className="px-4">
              {video.used.map((number) => <h3>{number.character.name} ({number.engine.name})</h3>)}
            </div>
          </div>
          <div className="flex">
            {video.YouTube && 
              <div className="px-8 pb-2">
                <button className="px-2 py-2 bg-red-500 text-white rounded">
                  <a className="px-2" href={`https://youtu.be/${video.YouTube}`}>YouTube</a>
                </button>
              </div>
            }
            {video.niconico && 
            <div className="px-8 pb-2">
              <button className="px-2 py-2 bg-white text-black rounded shadow-md">
                <a className="px-2" href={`https://nico.ms/sm${video.niconico}`}>niconico</a>
              </button>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPageItem;
