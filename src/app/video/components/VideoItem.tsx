import Link from 'next/link';
import {VideoObject} from 'utils/types';
import YouTubePlayer from './YouTubePlayer';
import NicoVideoPlayer from './NicoVideoPlayer';

type StateVideoItem = {
  video: VideoObject;
}

function VideoItem({video}: StateVideoItem) {
  return (
    <div className="border w-3/4 mx-auto mb-4 rounded border-slate-500">
      <div className="grid md:grid-cols-2 justify-items-center">
        <div className="py-4">
          {video.YouTube? (
          <YouTubePlayer YouTube={video.YouTube} key={video.id} />
        ) : (
          <NicoVideoPlayer niconico={video.niconico} key={video.id} />
        )}
        </div>
        <div className="content-center">
          <h2 className="text-xl">{video.title}</h2>
          <h5 className="px-8 pt-1 pb-2">Type: {video.type.name}</h5>
          {video.YouTube &&
            <div className="px-8 pb-2">
              <button className="px-2 py-2 bg-red-500 text-white rounded">
                <a className="px-2" href={`https://youtu.be/${video.YouTube}`}>YouTube</a>
              </button>
            </div>
          }
          {video.niconico &&
            <div className="px-8 py-2">
              <button className="px-2 py-2 bg-white text-black rounded shadow-md">
                <a className="px-2" href={`https://nico.ms/sm${video.niconico}`}>niconico</a>
              </button>
            </div>
          }
          <div>
          <h5 className="px-8 py-2">More Information:
            <button className="mx-2 px-2 py-2 bg-green-500 text-white rounded shadow-md">
              <Link className="px-2" href={`/video/${video.id}`}>Individual Page</Link>
            </button>
          </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
