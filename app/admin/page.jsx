// app/admin/page.jsx
import { FiBox, FiBriefcase, FiUsers, FiDollarSign } from 'react-icons/fi';

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-textMain mb-8">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<FiBox />} title="Total Products" value="0" color="bg-accentOrange" />
        <StatCard icon={<FiBriefcase />} title="Total Services" value="0" color="bg-accentGreen" />
        <StatCard icon={<FiUsers />} title="Total Users" value="0" color="bg-accentOrange" />
        <StatCard icon={<FiDollarSign />} title="Total Revenue" value="$0" color="bg-accentGreen" />
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, color }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-card border border-border flex items-center space-x-4">
      <div className={`p-3 rounded-xl ${color} text-textMain`}>{icon}</div>
      <div>
        <p className="text-textLight text-sm">{title}</p>
        <p className="text-2xl font-bold text-textMain">{value}</p>
      </div>
    </div>
  );
}