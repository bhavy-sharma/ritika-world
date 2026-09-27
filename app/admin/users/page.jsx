// app/admin/users/page.jsx
'use client';
import { useState, useEffect } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [emailData, setEmailData] = useState({ subject: '', text: '' });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    // Fetch users (You'll need to create a GET /api/admin/users route similar to categories)
    fetch('/api/admin/users').then(res => res.json()).then(setUsers);
  }, []);

  const handleSendEmail = async () => {
    setSending(true);
    await fetch('/api/admin/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to: selectedUser.email, ...emailData }),
    });
    alert('Email sent!');
    setSelectedUser(null);
    setEmailData({ subject: '', text: '' });
    setSending(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-textMain mb-8">User Management</h1>
      
      <div className="bg-white p-6 rounded-2xl shadow-card border border-border">
        <div className="space-y-3">
          {users.map(user => (
            <div key={user._id} className="flex justify-between items-center p-4 bg-surface rounded-lg border border-border">
              <div>
                <p className="font-semibold text-textMain">{user.name}</p>
                <p className="text-sm text-textLight">{user.email} | {user.phone}</p>
              </div>
              <button onClick={() => setSelectedUser(user)} className="bg-accentOrange hover:bg-accentOrangeStrong text-textMain px-4 py-2 rounded-lg font-medium transition-colors">
                Send Email
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Email Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl shadow-card w-full max-w-md border border-border">
            <h2 className="text-xl font-bold text-textMain mb-4">Send Email to {selectedUser.name}</h2>
            <input type="text" placeholder="Subject" value={emailData.subject}
              onChange={(e) => setEmailData({...emailData, subject: e.target.value})}
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-accentOrangeStrong" />
            <textarea placeholder="Your message..." rows="5" value={emailData.text}
              onChange={(e) => setEmailData({...emailData, text: e.target.value})}
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-accentOrangeStrong resize-none" />
            <div className="flex space-x-3">
              <button onClick={() => setSelectedUser(null)} className="flex-1 bg-surface text-textMain py-3 rounded-lg font-medium">Cancel</button>
              <button onClick={handleSendEmail} disabled={sending} className="flex-1 bg-accentGreen hover:bg-accentGreenStrong text-textMain py-3 rounded-lg font-bold">
                {sending ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}