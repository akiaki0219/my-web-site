import Link from 'next/link'

function AppFooter() {
  const MailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS! as string;

  return (
    <div className="bg-zinc-300">
      <div className="hidden md:flex">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link href={'/contact'}>Contact: {MailAddress}</Link>
          </div>
          <div className="flex">
            <a className="px-8 py-2 my-1 hover:bg-gray-600 rounded" href="https://x.com/akiaki02_19" target="_blank">X (Twitter)</a>
            <a className="px-8 py-2 my-1 hover:bg-gray-600 rounded" href="https://www.youtube.com/@akiaki02_19" target="_blank">YouTube</a>
            <a className="px-8 py-2 my-1 hover:bg-gray-600 rounded" href="https://nico.ms/user/130487990" target="_blank">niconico</a>
            <a className="px-8 py-2 my-1 hover:bg-gray-600 rounded" href="https://note.com/akiaki02_19" target="_blank">note</a>
          </div>
        </div>
      </div>
      <div className="flex md:hidden">
        <div className="container mx-auto text-center items-center">
          <div>
            <Link href={'/contact'}>Contact: {MailAddress}</Link>
          </div>
          <div className="flex justify-center">
            <a className="px-8 py-2 my-1 hover:bg-gray-600 rounded" href="https://x.com/akiaki02_19" target="_blank">
              <svg className="h-6 w-6 fill-none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a className="px-8 py-2 my-1 hover:bg-gray-600 rounded" href="https://www.youtube.com/@akiaki02_19" target="_blank">
              <svg className="h-6 w-6 fill-none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /> 
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>        
            </a>
            <a className="px-8 py-2 my-1 hover:bg-gray-600 rounded" href="https://nico.ms/user/130487990" target="_blank">
              <svg className="h-6 w-6 fill-none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                <polyline points="17 2 12 7 7 2" />
              </svg>
            </a>
            <a className="px-8 py-2 my-1 hover:bg-gray-600 rounded" href="https://note.com/akiaki02_19" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 493 493">
                <path d="m139.57,142.06c41.19,0,97.6-2.09,138.1-1.04,54.34,1.39,74.76,25.06,75.45,83.53.69,33.06,0,127.73,0,127.73h-58.79c0-82.83.35-96.5,0-122.6-.69-22.97-7.25-33.92-24.9-36.01-18.69-2.09-71.07-.35-71.07-.35v158.96h-58.79v-210.22Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
