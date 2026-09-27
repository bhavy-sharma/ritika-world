// app/signup/page.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', address: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Signup failed');

      alert('Account created! Please login.');
      router.push('/login');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-card border border-border">
        <h2 className="text-3xl font-bold text-center text-textMain mb-2">Create Account</h2>
        <p className="text-center text-textLight mb-8">Join us to start shopping</p>

        {error && <p className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" required onChange={handleChange}
            className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accentOrangeStrong" />
          
          <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange}
            className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accentOrangeStrong" />
          
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange}
            className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accentOrangeStrong" />
          
          <textarea name="address" placeholder="Delivery Address" required rows="2" onChange={handleChange}
            className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accentOrangeStrong resize-none" />
          
          <input type="password" name="password" placeholder="Password" required onChange={handleChange}
            className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accentOrangeStrong" />

          <button type="submit" disabled={loading}
            className="w-full bg-accentOrange hover:bg-accentOrangeStrong text-textMain font-bold py-3 rounded-lg transition-colors shadow-soft disabled:opacity-50">
            {loading ? 'Creating...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-textLight mt-6">
          Already have an account? <Link href="/login" className="text-accentOrangeStrong font-semibold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}