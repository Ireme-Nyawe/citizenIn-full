import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaBox,
  FaUsers,
  FaUser,
  FaComments,
  FaSignOutAlt,
  FaExchangeAlt,
  FaHeadset,
  FaTimes,
  FaBars
} from 'react-icons/fa';

interface DashboardSidebarProps {
  isSidebarOpen: boolean;
  sideBarToggle: () => void;
}

type MenuItem = {
  name: string;
  icon: any;
  path: string;
}

const DashboardSidebar = ({
  isSidebarOpen,
  sideBarToggle,
}: DashboardSidebarProps) => {
  const location = useLocation();
  const [userRole, setUserRole] = useState<string | null>(null);
  
  // Get current active path
  const currentPath = location.pathname;
  
  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      try {
        const parsedProfile = JSON.parse(storedProfile);
        setUserRole(parsedProfile.role);
      } catch (error) {
        console.error('Error parsing profile data:', error);
      }
    }
  }, []);

  // Define menu links for different conditions
  const condition1Links: MenuItem[] = [
    { name: 'Dashboard', icon: <FaHome />, path: '/dashboard' },
    { name: 'Products', icon: <FaBox />, path: '/dashboard/products' },
    { name: 'Users', icon: <FaUsers />, path: '/dashboard/users' },
    { name: 'Profile', icon: <FaUser />, path: '/dashboard/profile' },
    { name: 'Support', icon: <FaHeadset />, path: '/dashboard/support' },
  ];

  const condition2Links: MenuItem[] = [
    { name: 'Dashboard', icon: <FaHome />, path: '/dashboard' },
    { name: 'Payments', icon: <FaExchangeAlt />, path: '/dashboard/payments' },
    { name: 'Profile', icon: <FaUser />, path: '/dashboard/profile' },
  ];

  const defaultLinks: MenuItem[] = [
    { name: 'Home', icon: <FaHome />, path: '/dashboard' },
    { name: 'Messages', icon: <FaComments />, path: '/dashboard/messages' },
    { name: 'Profile', icon: <FaUser />, path: '/dashboard/profile' },
  ];

  // Determine which links to show based on user role
  let menuLinks: MenuItem[] = defaultLinks;
  
  if (userRole === 'admin') {
    menuLinks = condition1Links;
  } else if (userRole === 'technician') {
    menuLinks = condition2Links;
  }

  // Check if a link is active
  const isActive = (path: string) => {
    return currentPath === path || 
           (path !== '/dashboard' && currentPath.startsWith(path));
  };

  return (
    <>
      {/* Mobile menu button - shown only on small screens */}
      <button 
        className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-md bg-primary text-white"
        onClick={sideBarToggle}
      >
        {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-30 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-all duration-300 ease-in-out w-72 bg-primary h-screen shadow-xl`}
      >
        {/* Logo area */}
        <div className="flex items-center justify-center h-20 border-b border-primary-700">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        </div>

        {/* Nav links */}
        <nav className="p-4 space-y-1 mt-4">
          {menuLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                isActive(link.path)
                  ? 'bg-secondary text-white shadow-md'
                  : 'text-white/80 hover:bg-primary-700 hover:text-white'
              }`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="font-medium">{link.name}</span>
              
              {/* Active indicator */}
              {isActive(link.path) && (
                <span className="ml-auto h-2 w-2 rounded-full bg-white"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Logout button - fixed to bottom */}
        <div className="absolute bottom-8 w-full px-4">
          <Link
            to="/logout"
            className="flex items-center gap-3 p-3 rounded-lg transition-colors bg-red-600 text-white hover:bg-red-700 shadow-md"
          >
            <span className="text-xl">
              <FaSignOutAlt />
            </span>
            <span className="font-medium">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Backdrop overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={sideBarToggle}
        />
      )}
    </>
  );
};

export default DashboardSidebar;