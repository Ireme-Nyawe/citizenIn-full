import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react';

interface DashboardHeaderProps {
  sideBarToggle: () => void;
  profile: any;
}

const DashboardHeader = ({ sideBarToggle, profile }: DashboardHeaderProps) => {
  return (
    <header className="bg-blue-700 text-white flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center">
        <button 
          onClick={sideBarToggle}
          className="mr-4 p-2 rounded hover:bg-blue-800 transition-colors"
        >
          <span className="sr-only">Toggle Menu</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-xl font-bold">CitizeIn</h1>
      </div>
      
      <div className="flex items-center space-x-4">        
        <button className="p-2 rounded hover:bg-blue-800 transition-colors">
          <Bell size={20} />
        </button>
        
        <Link to="/profile" className="flex items-center p-2 rounded hover:bg-blue-800 transition-colors">
          <FaUserAlt className="mr-2" />
          <span>{profile?.name || 'User'}</span>
        </Link>
      </div>
    </header>
  );
};

export default DashboardHeader;