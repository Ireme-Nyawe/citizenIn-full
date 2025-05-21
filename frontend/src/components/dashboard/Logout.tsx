import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const logoutTimer = setTimeout(() => {
      localStorage.clear();
      setLoading(false);
      navigate('/get-started');
    }, 3000);

    return () => clearTimeout(logoutTimer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300">
      {loading && (
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 border-8 border-gray-300 border-t-primary rounded-full animate-spin"></div>
          <span className="text-xl font-semibold text-white">
            Logging out...
          </span>
        </div>
      )}
    </div>
  );
};

export default Logout;
