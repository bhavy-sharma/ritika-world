// app/admin/categories/page.jsx
'use client';
import { useState, useEffect } from 'react';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({ name: '', type: 'product', parentCategory: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => { fetchCategories(); }, []);

  const fetchCategories = async () => {
    const res = await fetch('/api/admin/categories');
    const data = await res.json();
    setCategories(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch('/api/admin/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setFormData({ name: '', type: 'product', parentCategory: '' });
    fetchCategories();
    setLoading(false);
  };

  // Filter main categories for the parent dropdown
  const mainCategories = categories.filter(c => !c.parentCategory);

  return (
    <div>
      <h1 className="text-3xl font-bold text-textMain mb-8">Manage Categories</h1>
      
      {/* Add Category Form */}
      <div className="bg-white p-6 rounded-2xl shadow-card border border-border mb-8">
        <h2 className="text-xl font-semibold text-textMain mb-4">Add New Category</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="Category Name" required value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-accentOrangeStrong outline-none" />
          
          <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}
            className="px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-accentOrangeStrong outline-none">
            <option value="product">Product Category</option>
            <option value="service">Service Category</option>
          </select>

          <select value={formData.parentCategory} onChange={(e) => setFormData({...formData, parentCategory: e.target.value})}
            className="px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-accentOrangeStrong outline-none">
            <option value="">Main Category (No Parent)</option>
            {mainCategories.map(cat => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>

          <button type="submit" disabled={loading}
            className="md:col-span-3 bg-accentGreen hover:bg-accentGreenStrong text-textMain font-bold py-3 rounded-lg transition-colors">
            {loading ? 'Adding...' : 'Add Category'}
          </button>
        </form>
      </div>

      {/* Categories List */}
      <div className="bg-white p-6 rounded-2xl shadow-card border border-border">
        <h2 className="text-xl font-semibold text-textMain mb-4">Existing Categories</h2>
        <div className="space-y-3">
          {categories.map(cat => (
            <div key={cat._id} className="flex justify-between items-center p-4 bg-surface rounded-lg border border-border">
              <div>
                <p className="font-semibold text-textMain">{cat.name}</p>
                <p className="text-sm text-textLight">Type: {cat.type} {cat.parentCategory ? `| Subcategory of: ${cat.parentCategory.name}` : '| Main Category'}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${cat.type === 'product' ? 'bg-accentOrange text-textMain' : 'bg-accentGreen text-textMain'}`}>
                {cat.type.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}