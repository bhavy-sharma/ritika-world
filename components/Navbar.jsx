// components/Navbar.jsx
"use client"
import Link from 'next/link';
import { FiShoppingCart, FiUser, FiLogOut, FiMenu } from 'react-icons/fi';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-soft">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accentOrange rounded-lg flex items-center justify-center">
              <span className="text-accentOrangeStrong font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-textMain">E-Store</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-textMain hover:text-accentOrangeStrong transition-colors font-medium">Home</Link>
            <Link href="/products" className="text-textMain hover:text-accentOrangeStrong transition-colors font-medium">Products</Link>
            <Link href="/services" className="text-textMain hover:text-accentOrangeStrong transition-colors font-medium">Services</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 text-textMain hover:text-accentOrangeStrong transition-colors">
              <FiShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-accentOrangeStrong text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="hidden sm:inline text-textMain font-medium">Hi, {user.name.split(' ')[0]}</span>
                <button onClick={handleLogout} className="flex items-center space-x-2 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg transition-colors font-medium">
                  <FiLogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link href="/login" className="hidden sm:flex items-center space-x-2 bg-accentGreen hover:bg-accentGreenStrong text-textMain px-4 py-2 rounded-lg transition-colors font-medium">
                <FiUser size={18} />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}