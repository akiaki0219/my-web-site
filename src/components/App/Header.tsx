'use client';

import React, {useState} from 'react';
import Link from 'next/link';

function AppHeader() {
  const [isOpenA, setIsOpenA] = useState(false);
  const toggleDropdownA = () => {
    setIsOpenA(!isOpenA);
    if (isOpenB) {setIsOpenB(false);};
  };
  const [isOpenB, setIsOpenB] = useState(false);
  const toggleDropdownB = () => {
    setIsOpenB(!isOpenB);
  };

  return (
    <div className="bg-zinc-300">
      <div className="container mx-auto items-center">
        <div className="flex justify-between md:justify-center items-center">
          <Link className="text-2xl font-semibold md:hidden" href="/">あっきー</Link>
          <div className="hidden md:flex">
            <Link className="block px-8 py-2 my-1 hover:bg-gray-600 rounded" href="/">Top</Link>
            <Link className="block px-8 py-2 my-1 hover:bg-gray-600 rounded" href="/video">Video</Link>
            <Link className="block px-8 py-2 my-1 hover:bg-gray-600 rounded" href="/blog">Blog</Link>
            <Link className="block px-8 py-2 my-1 hover:bg-gray-600 rounded" href="/contact">Contact</Link>
            <button className="block px-8 py-2 my-1 hover:bg-gray-600 rounded" onClick={toggleDropdownB}>Link</button>
          </div>
          <div>
            <button className="md:hidden" onClick={toggleDropdownA}>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isOpenB ? 'md:flex' : 'hidden'} bg-zinc-300 justify-center hidden`}>
          <a className="block px-8 py-2 my-1 hover:bg-gray-600 rounded" href="https://x.com/akiaki02_19" target="_blank">X (Twitter)</a>
          <a className="block px-8 py-2 my-1 hover:bg-gray-600 rounded" href="https://www.youtube.com/@akiaki02_19" target="_blank">YouTube</a>
          <a className="block px-8 py-2 my-1 hover:bg-gray-600 rounded" href="https://nico.ms/user/130487990" target="_blank">niconico</a>
          <a className="block px-8 py-2 my-1 hover:bg-gray-600 rounded" href="https://note.com/akiaki02_19" target="_blank">note</a>
        </div>
        <div className={`${isOpenA ? 'block' : 'hidden'} left-0 w-full bg-zinc-300 md:hidden`}>
          <ul>
            <li className="border-b">
              <Link className="block px-8 py-2 my-1 hover:bg-gray-600 rounded" href="/">Top</Link>
            </li>
            <li className="border-b">
              <Link className="block px-8 py-2 my-1 hover:bg-gray-600 rounded" href="/video">Video</Link>
            </li>
            <li className="border-b">
              <Link className="block px-8 py-2 my-1 hover:bg-gray-600 rounded" href="/blog">Blog</Link>
            </li>
            <li className="border-b">
            <Link className="block px-8 py-2 my-1 hover:bg-gray-600 rounded" href="/contact">Contact</Link>
            </li>
            <li className="hover:bg-gray-600 rounded">
              <button className="block px-8 py-2 my-1" onClick={toggleDropdownB}>Link</button>
            </li>
            <div className={`${isOpenB ? 'block' : 'hidden'} left-0 w-full bg-zinc-300`}>
              <ul>
                <li className="border-y">
                  <a className="block px-12 py-2 my-1 hover:bg-gray-600 rounded" href="https://x.com/akiaki02_19" target="_blank">X (Twitter)</a>
                </li>
                <li className="border-b">
                  <a className="block px-12 py-2 my-1 hover:bg-gray-600 rounded" href="https://www.youtube.com/@akiaki02_19" target="_blank">YouTube</a>
                </li>
                <li className="border-b">
                  <a className="block px-12 py-2 my-1 hover:bg-gray-600 rounded" href="https://nico.ms/user/130487990" target="_blank">niconico</a>
                </li>
                <li>
                  <a className="block px-12 py-2 my-1 hover:bg-gray-600 rounded" href="https://note.com/akiaki02_19" target="_blank">note</a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>      
    </div>
  );
}

export default AppHeader;
