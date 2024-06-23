import Profile from '@/components/Top/Profile/Profile';
import Video from '@/components/Top/Video/Video';
import Blog from '@/components/Top/Blog/Blog';

function Home() {
  return (
    <main className="bg-zinc-200">
      <div className="container mx-auto">
        <div className="py-4">
          <h2 className="text-4xl text-center">My web site</h2>
        </div>
        <div className="py-2">
          <Profile />
        </div>
        <div className="py-2">
          <Video />
        </div>
        <div className="py-2">
          <Blog />
        </div>
      </div>
    </main>
  );
}

export default Home;
