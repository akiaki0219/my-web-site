import React from 'react';
import Link from 'next/link';
import LatestVideo from "./components/LatestVideo";
import TopVideo from './components/TopVideo';

function Video() {
  return (
    <div>
      <h4 className="text-2xl font-medium text-center pb-2">Recommended Videos</h4>
      <div className="grid grid-cols-2 mx-auto justify-items-center">
        <div className="py-2">
          <LatestVideo />
        </div>
        <div className="py-2">
          <TopVideo />
        </div>
      </div>
      <h5 className="text-center text-xl">More Videos:
        <button className="mx-2 px-2 py-2 mb-4 bg-green-500 text-white rounded shadow-md">
          <Link className="px-2" href={'/video'}>Video List</Link>
        </button>
      </h5>
    </div>
  );
}

export default Video;
