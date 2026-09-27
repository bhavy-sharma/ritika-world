// app/admin/layout.jsx
import Link from 'next/link';
import { FiHome, FiTag, FiBox, FiBriefcase, FiUsers } from 'react-icons/fi';

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-surface">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-border p-6 hidden md:block shadow-soft">
        <h2 className="text-xl font-bold text-textMain mb-8">Admin Panel</h2>
        <nav className="space-y-2">
          <Link href="/admin" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-textMain hover:bg-accentOrange transition-colors">
            <FiHome /> <span>Dashboard</span>
          </Link>
          <Link href="/admin/categories" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-textMain hover:bg-accentOrange transition-colors">
            <FiTag /> <span>Categories</span>
          </Link>
          <Link href="/admin/products" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-textMain hover:bg-accentOrange transition-colors">
            <FiBox /> <span>Products</span>
          </Link>
          <Link href="/admin/services" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-textMain hover:bg-accentOrange transition-colors">
            <FiBriefcase /> <span>Services</span>
          </Link>
          <Link href="/admin/users" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-textMain hover:bg-accentOrange transition-colors">
            <FiUsers /> <span>Users</span>
          </Link>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}