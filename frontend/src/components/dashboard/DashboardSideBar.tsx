import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaBox,
  FaUsers,
  FaUser,
  FaSignOutAlt,
  FaExchangeAlt,
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

  const condition1Links: MenuItem[] = [
    { name: 'Dashboard', icon: <FaHome />, path: '/dashboard/admin' },
    { name: 'Categories', icon: <FaBox />, path: '/dashboard/admin/categories' },
    { name: 'Institutions', icon: <FaUsers />, path: '/dashboard/admin/institutions' },
    { name: 'Institutions Users', icon: <FaUser />, path: '/dashboard/admin/users' },
  ];

  const condition2Links: MenuItem[] = [
    { name: 'Dashboard', icon: <FaHome />, path: '/dashboard/agency' },
    { name: 'Complaints', icon: <FaExchangeAlt />, path: '/dashboard/agency/complaints' },
  ];

  const defaultLinks: MenuItem[] = [
    { name: 'Dashboard', icon: <FaHome />, path: '/dashboard/citizen' },
    { name: 'Complaints', icon: <FaBox />, path: '/dashboard/citizen/complaints' },
  ];

  let menuLinks: MenuItem[] = defaultLinks;
  
  if (userRole === 'admin') {
    menuLinks = condition1Links;
  } else if (userRole === 'agency') {
    menuLinks = condition2Links;
  }

  const isActive = (path: string) => {
    return currentPath === path || 
           (path !== '/dashboard' && currentPath.startsWith(path));
  };

  return (
    <>
      <button 
        className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-md bg-blue-600 text-white"
        onClick={sideBarToggle}
      >
        {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <aside
        className={`fixed md:relative z-30 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-all duration-300 ease-in-out w-72 bg-blue-700 h-screen shadow-xl`}
      >
       

        <nav className="p-4 space-y-1 mt-4">
          {menuLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                isActive(link.path)
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-white/80 hover:bg-blue-600 hover:text-white'
              }`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="font-medium">{link.name}</span>
              
              {isActive(link.path) && (
                <span className="ml-auto h-2 w-2 rounded-full bg-white"></span>
              )}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-20 w-full px-4">
          <Link
            to="/logout"
            className="flex items-center gap-3 p-3 rounded-lg transition-colors bg-blue-800 text-white hover:bg-blue-900 shadow-md"
          >
            <span className="text-xl">
              <FaSignOutAlt />
            </span>
            <span className="font-medium">Logout</span>
          </Link>
        </div>
      </aside>

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