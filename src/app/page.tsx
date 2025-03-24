//import Sidebar from '../components/sidebar/sidebar';
import Profile from '../components/profile/profile';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1">
        <Profile />
      </main>
    </div>
  );
}
