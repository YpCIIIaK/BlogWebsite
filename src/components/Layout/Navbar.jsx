import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? "text-indigo-400" : "text-gray-300 hover:text-indigo-400";
  };

  return (
    <nav className="bg-gray-800 shadow-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-400">
              Frontend Journey
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/blog" className={isActive('/blog')}>Blog</Link>
            <Link to="/about" className={isActive('/about')}>About</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}