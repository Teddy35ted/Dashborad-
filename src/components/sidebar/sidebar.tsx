import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r">
      <nav className="p-5 flex flex-col gap-2">
        <Link 
          href="/profile" 
          className="flex items-center  text-blue-300 bg-blue-50 p-2 rounded"
        >
          My Profile
        </Link>
        <Link 
          href="/security" 
          className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          Security
        </Link>
        {/* Non-functional links */}
        <span className="flex items-center p-3 text-gray-400 cursor-not-allowed">
          Teams
        </span>
        <span className="flex items-center p-3 text-gray-400 cursor-not-allowed">
          Team Member
        </span>
        <span className="flex items-center p-3 text-gray-400 cursor-not-allowed">
          Notifications
        </span>
        <span className="flex items-center p-3 text-gray-400 cursor-not-allowed">
          Billing
        </span>
        <span className="flex items-center p-3 text-gray-400 cursor-not-allowed">
          Data Export
        </span>
        
        {/* Delete Account at the bottom */}
        <div className="mt-auto pt-4 border-t">
          <span className="flex items-center p-3 text-red-400 cursor-not-allowed">
            Delete Account
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;